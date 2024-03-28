const express = require('express')
const router = express.Router()
const authorization = require('../middleware/authentication')
const {logout} = require('../controller/logoutcontroller')

router.get('/logout', authorization.authorization,logout)
module.exports = router