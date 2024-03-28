const express = require('express')
const app = express()
const router = express.Router()

const bodyParser = require("body-parser");
app.use(bodyParser.json())
const { authorization } = require('../middleware/authentication');
const {
    handlefetchCrud,
handleBasicDetail,
handleEduDetail,
handleexpdetail,
handlelangdetail,
handlerefdetail,
handleprefdetail,
handletechdetail,
handleuser,
createuser,
updateuser
} = require('../controller/fetchcrudcontroller')

router.get('/fetchcrud',authorization,handlefetchCrud) 

router.get('/fbasicdetail/:id',authorization,handleBasicDetail)

router.get('/fedudetail/:id',authorization,handleEduDetail) 

router.get('/fworkexp/:id',authorization,handleexpdetail) 

router.get('/flangdetail/:id',authorization,handlelangdetail) 

router.get('/frefdetail/:id',authorization,handlerefdetail) 
router.get('/fprefdetail/:id',authorization,handleprefdetail) 

router.get('/ftechdetail/:id',authorization,handletechdetail)

router.get('/fuser/:id',authorization,handleuser)

createuser,
router.post('/finsertUser',createuser) 
router.post('/fuser/:id',updateuser) 
module.exports = router