const mysql = require("mysql")

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database: "masterdb",
    dateStrings: true
})

// conn.connect(console.log("connnect"))

module.exports = { conn }