const express = require('express')
const app = express()
var cookieParser = require('cookie-parser')

const dotenv = require('dotenv');
const login = require('./router/loginrouter')
const logout = require('./router/logout')
const display = require('./router/displayrouter')
const task6 = require('./router/dynamicgrid');
const task7 = require('./router/attendrouter')
const task8 = require('./router/resultrouter')
const task9 = require('./router/studdetailrouter')
const task10 = require('./router/delimiterrouter')
const task11 = require('./router/crudrouter')
const task12 = require('./router/fetchcrudrouter')

app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', login)
app.use('/', display)
app.use('/',task6)
app.use('/attendence', task7)
app.use('/', task8);
app.use('/', task9)
app.use('/', task10)
app.use('/', task11)
app.use('/', task12)

app.use('/', logout)

dotenv.config();
let port = process.env.PORT;

app.listen(port, () => {
    console.log(`http://localhost:` + port);
});
