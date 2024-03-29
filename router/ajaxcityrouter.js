const express = require('express')
const router = express.Router()
const authorization = require('../middleware/authentication')
const { handlecitystate, handlestate, handlecity } = require('../controller/ajaxcitycontroller')
router.get('/citystate',authorization.authorization,handlecitystate)

router.get('/state',authorization.authorization, handlestate)
router.get('/city/:id',authorization.authorization, handlecity)

module.exports = router