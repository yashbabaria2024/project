const express = require('express')
const router = express.Router()
const {timeZoneFun} = require('../controller/timeZoneController')
router.get('/timeZone', timeZoneFun)

module.exports = router