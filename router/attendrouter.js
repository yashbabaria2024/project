const express = require('express')
const router = express.Router()
const authorization=require('../middleware/authentication');
const {attendancecontrol} = require('../controller/attendancecontrol')

router.get('/', authorization.authorization, attendancecontrol)

module.exports =  router 