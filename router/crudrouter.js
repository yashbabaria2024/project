const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true })
const authorization=require('../middleware/authentication');
const { handleJobform, displayJobFormData, createJobFormData, updatejobFormData } = require('../controller/crudcontroller')
const {handleuser,handleBasicDetail,handleEduDetail,handleexpdetail,handlelangdetail,handlerefdetail, handleprefdetail, handletechdetail} = require('../controller/fetchcrudcontroller')

router.get("/jobform",authorization.authorization, handleJobform)

router.get('/jobform/:id',authorization.authorization,displayJobFormData) 
router.post('/jobform',urlencodedParser,createJobFormData) 

   
router.post('/jobform/:id', urlencodedParser,updatejobFormData) 


router.get('/fbasicdetail/:id',authorization.authorization,handleBasicDetail)
router.get('/fedudetail/:id',authorization.authorization,handleEduDetail) 
router.get('/fworkexp/:id',authorization.authorization,handleexpdetail) 
router.get('/flangdetail/:id',authorization.authorization,handlelangdetail) 
router.get('/frefdetail/:id',authorization.authorization,handlerefdetail) 
router.get('/fprefdetail/:id',authorization.authorization,handleprefdetail) 
router.get('/ftechdetail/:id',authorization.authorization,handletechdetail)
router.get('/fuser/:id',authorization.authorization,handleuser)



module.exports = router