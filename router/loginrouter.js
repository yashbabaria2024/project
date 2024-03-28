const express = require('express')
const router = express.Router()
const {conn} = require('/home/yash-babariya/Task/connection.js') 
const bodyParser = require("body-parser");
const md5 = require('md5');
var urlencodedParser = bodyParser.urlencoded({ extended: true })




   router.get('/', (req, res) => {
    res.render('task13/login')
})

router.post('/',urlencodedParser, (req, res) => {

    conn.query(`select saltkey from employee_details where email='${req.body.email}'`, (err, result) => {
        if (err) throw err
    
        let fail = "fail"
        conn.query(`select count(*) as count from employee_details where email='${req.body.email}' and password = '${md5(req.body.password + result[0].saltkey)}'`, (err, row) => {
            if (err) throw err;
            console.log(row[0].count);
            if (row[0].count == 1) {
                res.redirect('/displ')
            }
            else {
                res.render('task13/login',{fail:fail})
            }
        })
    });
})

router.get('/reset', (req, res) => {
    res.render('task13/resetpsw')
})

router.post('/reset',urlencodedParser, (req, res) => {

    conn.query(`select count(*) as count, resetkey from employee_details where email = '${req.body.emailreset}'`, (err, row) => {
        if (err) throw err;

        if (row[0].count == 1) {
            res.redirect(`/reset/${row[0].resetkey}`)
        }
        else {
            res.send("Email id does not exist")
        }

    })
})

router.get('/reset/:resetkey', (req, res) => {
    req.params.resetkey
    res.render('task13/password')
})

router.post('/reset/:resetkey',urlencodedParser, (req, res) => {

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

    console.log(query);
    conn.query(query, (err) => {
        if (err) throw err
        res.redirect('/login')
    })
});

module.exports = router


   
