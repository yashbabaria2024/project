const express = require('express')
const router = express.Router()
const authorization = require('../middleware/authentication');
const {handleDisplay, handleRoute} = require('../controller/displaycontroller')
router.get('/displ', authorization.authorization,handleDisplay)
router.get('/task/:id', authorization.authorization,handleRoute) 
module.exports = router