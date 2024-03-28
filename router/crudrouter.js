const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
const authorization=require('../middleware/authentication');
const { handleJobform, displayJobFormData, createJobFormData, updatejobFormData } = require('../controller/crudcontroller')

router.get("/jobform",authorization.authorization, handleJobform)

router.get('/jobform/id/:id',authorization.authorization,displayJobFormData) 
router.post('/jobform',urlencodedParser,createJobFormData) 

   
router.post('/jobform/id/:id', urlencodedParser,updatejobFormData) 


module.exports = router