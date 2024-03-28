const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
const {displComponent,postComponent} = require('../controller/dynamicgridcontroller')

router.get('/dynamicgrid', displComponent)
router.all("/data", urlencodedParser,postComponent)

module.exports = router