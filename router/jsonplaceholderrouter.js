const express = require('express');
const { authorization } = require('../middleware/authentication');
const router = express.Router()
const {jsonplaceholder,comments,jsonplaceholderpost} = require('../controller/jsonplaceholdercontroller')
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true })

router.get('/jsonplaceholder' ,authorization, jsonplaceholder)
router.post('/jsonplaceholder',urlencodedParser, jsonplaceholderpost)
router.get('/comments',authorization,comments)

module.exports = router