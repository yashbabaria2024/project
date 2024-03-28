const {conn} = require('../connection/connection') 
const md5 = require('md5');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const homecontroller = (req, res) => {
    res.render('task13/home');
}

const createuser = (req, res) => {

    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let desg = req.body.desg
    let email = req.body.email
    let contact = req.body.contact
    let gender = req.body.gender
    let relationshipstatus = req.body.relationshipstatus
    let address = req.body.address
    let address2 = req.body.address2
    let city = req.body.city
    let state = req.body.state
    let zipcode = req.body.zipcode
    let dateofbirth = req.body.dateofbirth

    function activeFun() {
        const character = 'abcdefghijklmnopqrstuvwxyz1234567890'
        let activelink = ''
        for (let i = 0; i < 10; i++) {
            activelink += character.charAt(Math.floor(Math.random() * character.length))
        }
        return activelink
    }

    let alertmsg = "alert"

    let link = activeFun()

    let query = `insert into employee_details (first_name,last_name,desg,email,contact,gender,relation_status,add1,add2,city,state,zip_code,dob,activelink, activestatus ) values ('${firstname}','${lastname}','${desg}','${email}','${contact}','${gender}','${relationshipstatus}','${address}','${address2}','${city}','${state}','${zipcode}','${dateofbirth}','${link}','deactive') `

    conn.query(query, (err) => {
        if (err) {
            res.render('task13/register', { alertmsg: alertmsg })
        }
        else {
            res.render('task13/thank', { "link": link })
        }
    })
}

const activelinkcontroller = (req, res) => {

    let link = req.params.link;

    conn.query(`select employee_registered from employee_details where activelink = '${link}'`, (err, result) => {
        if (err) throw err
        let currentime = new Date().toTimeString()
        let acivelinktime = new Date(new Date(result[0].employee_registered).getTime() + 500 * 600000000000).toTimeString();
        if (currentime < acivelinktime) {
            res.render('task13/password')
        }
        else {
            res.send("Your Link Expired")
        }
    })
}

const createactivelink = (req, res) => {

    let link = req.params.link
    let psw = req.body.password;


    const reset = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let resetcode = '';

    for (let i = 0; i < 15; i++) {
        resetcode += reset.charAt(Math.floor(Math.random() * reset.length));
    }
    
    const str = 'dev013yash172405'
    let result = '';

    for (let i = 0; i < 6; i++) {
        result += str.charAt(Math.floor(Math.random() * str.length));
    }

    let password = psw.concat(result)

    let query = `update employee_details set password = '${md5(password)}',activestatus = 'active',saltkey = '${result}', resetkey = '${resetcode}' where activelink = '${link}'`
    // console.log(query);
    conn.query(query, (err) => {
        if (err) throw err
        res.redirect('/login')
    })

}

const handleregisterpage =  (req, res) => {
    res.render('task13/register');
}

function createToken(email){
    const Token = jwt.sign({email:email},process.env.JWT_SECRET_KEY)
       return Token
 }

const handlelogin =  (req, res) => {
    res.render('task13/login')
}

const createlogin = (req, res) => {


    conn.query(`select saltkey from employee_details where email='${req.body.email}'`, (err, result) => {
     if (err) throw err
 
     let fail = "fail"
     conn.query(`select count(*) as count from employee_details where email='${req.body.email}' and password = '${md5(req.body.password + result[0].saltkey)}'`, (err, row) => {
         if (err) throw err;

         if (row[0].count == 1) {

          let token = createToken(req.body.email)  
         res.cookie("access_token", token, {
             expires:new Date(Date.now() + 60000000000),
             httpOnly: true
         })
             res.status(200).redirect('/displ')
             
         }
         else {
             res.render('task13/login',{fail:fail})
         }
     })
 });
}

const resetget = (req, res) => {
    res.render('task13/resetpsw')
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
    res.render('task13/password')
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


// module.exports = {handlelogin,createlogin,resetget,resetpost,handleResetKey,createresetKey }
module.exports = {handleregisterpage,homecontroller,createuser,activelinkcontroller,createactivelink,handlelogin,createlogin,resetget,resetpost,handleResetKey,createresetKey}