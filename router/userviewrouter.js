const express = require('express')
const router = express.Router()
const authorization = require('../middleware/authentication')
const {userview,userdelete} = require('../controller/userviewcontroller')

router.get('/userview',authorization.authorization, userview)
router.get('/userview/:id', authorization.authorization,userdelete)
module.exports = router;