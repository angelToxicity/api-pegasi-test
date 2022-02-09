var router = require('express').Router()
var cors = require('cors');
var signinController = require('../controllers/registerController')

router.use(cors())

router.post('/registerUser', signinController.create)

module.exports = router