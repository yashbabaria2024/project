const express = require('express')
const router = express.Router()
const authorization = require('../middleware/authentication');
const { result, resultView } = require('../controller/resultcontroller')
router.get('/result', authorization.authorization, result)

router.get('/viewresult', authorization.authorization, resultView)

module.exports = router