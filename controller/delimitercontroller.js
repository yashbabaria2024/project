const {conn} = require('../connection/connection') 

var search;

const searchDelim =  (req, res) => {

        let q = `select * from stud_detail_50000 limit 0,200`;
        conn.query(`${q}`, (err, row) => {
            if (err) throw err
            res.render('task10', { 'row': row, search: search })
        })
    }

const searchData = (req, res) => {

    search = req.body.search;
    var p = search.replace(/(?=[$-/:-?{-~!"^_`\[\]])/gi, ",");

    var str = p.split(',');
    var query;
    var firstname = [];
    var mname = [];
    var lastname = [];
    var email = [];
    var address = [];
    var branch = [];
    var val;

    for (var i = 1; i < str.length; i++) {

        if (str[i].startsWith('_')) {
            val = str[i].replace('_', "");
            firstname.push(val);
        }
        if (str[i].startsWith(':')) {
            val = str[i].replace(':', "");
            mname.push(val);
        }
        if (str[i].startsWith('^')) {
            val = str[i].replace('^', "");
            lastname.push(val);
        }
        if (str[i].startsWith('$')) {
            val = str[i].replace('$', "");
            email.push(val);
        }
        if (str[i].startsWith('}')) {
            val = str[i].replace('}', "");
            address.push(val);
        }
        if (str[i].startsWith('{')) {
            val = str[i].replace('{', "");
            branch.push(val);
        }
    }

    query = `select * from stud_detail_50000 where (`
    if (firstname.length >= 1) {
        for (let i = 0; i < firstname.length; i++) {
            query += `firstname like "%${firstname[i]}%" or `
        }
        query = query.slice(0, query.length - 3) + ') and (';
    }
    if (mname.length >= 1) {
        for (let i = 0; i < mname.length; i++) {
            query += `mname like "%${mname[i]}%" or `
        }
        query = query.slice(0, query.length - 3) + ') and (';
    }
    if (lastname.length >= 1) {
        for (let i = 0; i < lastname.length; i++) {
            query += `lastname like "%${lastname[i]}%" or `
        }
        query = query.slice(0, query.length - 3) + ') and (';
    }
    if (email.length >= 1) {
        for (let i = 0; i < email.length; i++) {
            query += `email like "%${email[i]}%" or `
        }
        query = query.slice(0, query.length - 3) + ') and (';
    }
    if (address.length >= 1) {
        for (let i = 0; i < address.length; i++) {
            query += `address like "%${address[i]}%" or `
        }
        query = query.slice(0, query.length - 3) + ') and (';
    }
    if (branch.length >= 1) {
        for (let i = 0; i < branch.length; i++) {
            query += `branch like "%${branch[i]}%" or `
        }
        query = query.slice(0, query.length - 3) + ') and (';
    }
    query = query.slice(0, query.length - 6);

    conn.query(`${query}`, (err, row) => {
        if (err) throw err;
        else {
            res.render('task10', { row: row, search: search })
        }
    })

}
 
module.exports = {searchDelim, searchData}