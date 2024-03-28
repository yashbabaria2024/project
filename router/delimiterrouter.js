const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
const authorization=require('../middleware/authentication');
const {searchDelim, searchData} = require('../controller/delimitercontroller')

router.get('/delimitersearch',authorization.authorization,searchDelim) 

router.post('/delimitersearch', urlencodedParser,searchData) 


module.exports = router