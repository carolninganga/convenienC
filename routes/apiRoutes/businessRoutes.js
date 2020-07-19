const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const ObjectId = require('mongoDb').ObjectID;
//const { check, validationResult } = require('express-validator/check');

const { check, validationResult } = require('express-validator');

// const User = require('../../models/User');
const Business = require('../../models/Business');

//@route  GET api/businesses
//@desc   Get all users businesses
//acccess Private
router.get('/', auth, async (req, res) => {
  try {
    const businesses = await Business.find({ user: req.user.id })
      .populate('items')
      .sort({
        date: -1,
      });

      
    res.json(businesses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route  POST api/businesses
//@desc   Add new business
//acccess Private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const business = await Business.create(req.body);
      await business.populate('items').execPopulate() 
      

      res.json(business); 
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route  PUT api/business/:id
//@desc   Update business
//acccess Private
router.put('/:id', auth, async (req, res) => {
  //   const { name, email, phone, type } = req.body;

  //   // Build business object
  //   const businessFields = {};
  //   if (name) businessFields.name = name;
  //   if (email) businessFields.email = email;
  //   if (phone) businessFields.phone = phone;
  //   if (type) businessFields.type = type;

  try {
    const business = await Business.findOne({
      '_id': ObjectId(req.params.id),
      
      //user: ObjectId(req.user.id),
    }).exec();
    if (!business) return res.status(404).json({ msg: 'business not found' });

    //make sure user owns business
    // if (business.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    // business = await Business.findByIdAndUpdate(
    //   req.params.id,
    //   { $set: businessFields },
    //   { new: true }
    // );

    Object.keys(req.body).forEach((key) => (business[key] = req.body[key]));
    console.log("io",req.body )
    console.log(business)
    await business.save();

    res.json(business);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

//@route  DELETE api/business/:id
//@desc   Delete business
//acccess Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let business = await Business.findOne({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!business) return res.status(404).json({ msg: 'Business not found' });

    //make sure user owns business
    // if (business.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    // await Business.findByIdAndRemove(req.params.id);
    await business.remove();

    res.json({ msg: 'Business removed' });
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
