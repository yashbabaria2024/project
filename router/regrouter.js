const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: true })

const {handlelogin,createlogin,handleResetKey,createresetKey, resetpost, resetget } = require('../controller/logincontroller')

const {handleregisterpage,homecontroller,createuser,activelinkcontroller,createactivelink} = require('../controller/regcontroller')

router.get('/',homecontroller) 

router.get('/register',handleregisterpage)

router.post('/register', urlencodedParser,createuser) 
router.get('/activelink/:link',activelinkcontroller) 

router.post('/activelink/:link',urlencodedParser,createactivelink) 

router.get('/login',handlelogin)
router.post('/login',urlencodedParser,createlogin) 

router.get('/reset',resetget) 

router.post('/reset',urlencodedParser,resetpost) 

router.get('/reset/:resetkey',handleResetKey) 

router.post('/reset/:resetkey',urlencodedParser,createresetKey)





module.exports = router