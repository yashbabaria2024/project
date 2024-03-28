const express = require('express')
const router = express.Router()

const { authorization } = require('../middleware/authentication');
const {handleStudDetail,handleSearch} = require('../controller/studdetailcontroller')

router.get('/studdetail',authorization,handleStudDetail) 

   router.get('/search',authorization,handleSearch) 
module.exports = router