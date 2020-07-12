const router = require("express").Router();
//const Transaction = require("../models/transaction.js");
const fetch = require("node-fetch");

// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
const yelpAPIrequest = function (router) {
  router.get("/api/yelpAPI", (req, res) => {
    //search: (term,location) =>
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}`,

      {
        auth: { bearer: process.env.REACT_APP_YELP_API_KEY },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.send(err));
  });
};

//     request.get('http://some.server.com/', {
//   'auth': {
//     'bearer': 'bearerToken'
//   }
// });

//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = yelpAPIrequest;
