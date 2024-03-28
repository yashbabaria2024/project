const express = require('express')
const app = express()
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const login = require('./router/loginrouter')
const display = require('./router/displayrouter')
 const task7 = require('./router/task7/attendrouter')
const task8 = require('./router/task8/resultrouter')
const task9 = require('./router/task9/studdetailrouter') 
const task10 = require('./router/task10/delimiterrouter')
const task11 = require('./router/task11/crudrouter') 
const task12 = require('./router/task12/fetchcrudrouter') 
const task13 = require('./router/task13/regrouter')
 
 app.set('view engine', 'ejs')
 app.use(express.static('public'))
 

    app.use('/',login)
    app.use('/',display)
    app.use('/attendence', task7)
    app.use('/',task8);
    app.use('/',task9)
    app.use('/',task10)
    app.use('/',task11)
    app.use('/',task12)
    app.use('/',task13)

    dotenv.config();

    let port = process.env.PORT ;
    app.listen(port, () => {
        console.log(`http://localhost:`+port);
    });
