const express = require('express')
var cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");

const dotenv = require('dotenv');
const login = require('./router/regrouter')
const logout = require('./router/logout')
const display = require('./router/displayrouter')
const dynamicgrid = require('./router/dynamicgrid');
const attendrouter = require('./router/attendrouter')
const resultrouter = require('./router/resultrouter')
const studdetailrouter = require('./router/studdetailrouter')
const delimiterrouter = require('./router/delimiterrouter')
const crudrouter = require('./router/crudrouter')
const fetchcrudrouter = require('./router/fetchcrudrouter')
const ajaxcityrouter = require('./router/ajaxcityrouter')
const timeZoneRouter = require('./router/timezonerouter')

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', login)
app.use('/', display)
app.use('/',dynamicgrid)
app.use('/attendence', attendrouter)
app.use('/', resultrouter);
app.use('/', studdetailrouter)
app.use('/', delimiterrouter)
app.use('/', crudrouter)
app.use('/', fetchcrudrouter)
app.use('/', ajaxcityrouter)
app.use('/',timeZoneRouter)
app.use('/', logout)

dotenv.config();
let port = process.env.PORT;

app.listen(port, () => {
    console.log(`http://localhost:` + port);
});
