const { conn } = require('../connection/connection');

const handleStudDetail = (req, res) => {

    let id, field, orderby;

    if (req.query.id == undefined || req.query.orderby == undefined || req.query.field == undefined) {
        id = 1;
        orderby = 'asc'
        field = 'stud_id'
    }
    else {
        id = parseInt(req.query.id);
        orderby = req.query.orderby;
        field = req.query.field;
    }
    let pageField = 200
    let startIndex = (id - 1) * pageField;

    conn.query(`select * from stud_detail_50000  order by ${field} ${orderby} limit ?, ?;`,[startIndex,pageField], (err, row) => {
        if (err) throw err;
        res.status(200).render('searchgrid/display', { "row": row, "id": id, "orderby": orderby, "field": field });
    });
}

const handleSearch = (req, res) => {
    let id, field, orderby;

    if (req.query.id == undefined || req.query.orderby == undefined || req.query.field == undefined) {
        id = 1;
        orderby = 'asc'
        field = 'stud_id'
    }
    else {
        id = parseInt(req.query.id);
        orderby = req.query.orderby;
        field = req.query.field;
    }
    let pageField = 200
    let startIndex = (id - 1) * pageField;

    operator = req.query.operator;
    firstname = req.query.firstname;
    address = req.query.address;
    branch = req.query.branch;

    conn.query(`select * from stud_detail_50000 where firstname like ? ${operator} address like ? ${operator} branch like ? order by ${field} ${orderby} limit ?, ?;`,[firstname+'%',address+'%',branch+'%',startIndex,pageField] ,(err, row) => {
        
        if (err) throw err;
        res.status(200).render('searchgrid/search', { "row": row, "id": id, "orderby": orderby, "field": field });
    }

    )
}


const handleidSearch = (req, res) => {

    let stud_id = req.query.stud_id
    conn.query(`select * from stud_detail_50000 where stud_id = ?;`,[stud_id] ,(err, row) => {
        if (err) throw err;
        res.status(200).render('searchgrid/idsearch', { "row": row });
    })
}

module.exports = { handleStudDetail, handleSearch, handleidSearch }