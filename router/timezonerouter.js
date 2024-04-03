const express = require('express')
const router = express.Router()
const {timeZoneFun} = require('../controller/timezoneController')
const authorization = require('../middleware/authentication')
router.get('/timeZone',authorization.authorization, timeZoneFun)

module.exports = router