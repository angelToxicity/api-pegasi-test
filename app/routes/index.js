var router = require('express').Router()
var login = require('./login')
var signin = require('./signin')
var bodyParser = require('body-parser')
var cors = require('cors');

router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.use('/login', login)
router.use('/signin', signin)

router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router