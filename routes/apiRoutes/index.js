const router = require('express').Router();

router.use("/users", require('./users'))
router.use("/auth", require('./auth'))
router.use("/businesses", require('./businesses'))
router.use("/items", require('./items'))

module.exports = router