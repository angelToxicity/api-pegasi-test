var router = require('express').Router()
var cors = require('cors');
router.use(cors())
var authCtrl = require('../controllers/authController')

router.post('/', authCtrl.search)

module.exports = router