const express = require('express')
const router = express.Router()

const { authorization } = require('../middleware/authentication');
const {handleStudDetail,handleSearch, handleidSearch} = require('../controller/studdetailcontroller')

router.get('/studdetail',authorization,handleStudDetail) 

   router.get('/search',authorization,handleSearch) 

   router.get('/idsearch',authorization,handleidSearch)
module.exports = router