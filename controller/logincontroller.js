const {conn} = require('../connection/connection') 
const md5 = require('md5');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

function createToken(email){
    const Token = jwt.sign({email:email},process.env.JWT_SECRET_KEY)
       return Token
 }

const handlelogin =  (req, res) => {
    res.render('registration/login')
}

const createlogin = (req, res) => {


    conn.query(`select saltkey from employee_details where email='${req.body.email}'`, (err, result) => {
     if (err) throw err
 
     let fail = "fail"
     conn.query(`select count(*) as count from employee_details where email='${req.body.email}' and password = '${md5(req.body.password + result[0].saltkey)}'`, (err, row) => {
         if (err) throw err;

         if (row[0].count == 1) {

          let token = createToken(req.body.email)  

  

         res.cookie("access_token", token)
             res.status(200).redirect('/displ')
             
         }
         else {
             res.render('registration/login',{fail:fail})
         }
     })
 });
}

const resetget = (req, res) => {
    res.render('registration/resetpsw')
}

const resetpost = (req, res) => {

    conn.query(`select count(*) as count, resetkey from employee_details where email = '${req.body.emailreset}'`, (err, row) => {
        if (err) throw err;

        if (row[0].count == 1) {
            res.redirect(`/reset/${row[0].resetkey}`)
        }
        else {
            res.send("Email id does not exist")
        }

    })
}

const handleResetKey = (req, res) => {
    req.params.resetkey
    res.render('registration/password')
}

const createresetKey =  (req, res) => {

    let resetkey = req.params.resetkey
    let psw = req.body.password;

    const str = 'dev013yash172405'
    let result = '';

    for (let i = 0; i < 6; i++) {
        result += str.charAt(Math.floor(Math.random() * str.length));
    }

    const reset = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let resetcode = '';

    for (let i = 0; i < 15; i++) {
        resetcode += reset.charAt(Math.floor(Math.random() * reset.length));
    }

    let password = psw.concat(result)

    let query = `update employee_details set password = '${md5(password)}',saltkey = '${result}', resetkey = '${resetcode}' where resetkey = '${resetkey}'`

    // console.log(query);
    conn.query(query, (err) => {
        if (err) throw err
        res.redirect('/login')
    })
}


module.exports = {handlelogin,createlogin,resetget,resetpost,handleResetKey,createresetKey }