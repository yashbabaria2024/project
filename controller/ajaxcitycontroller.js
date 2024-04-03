
const {conn} = require('../connection/connection')

const handlecitystate = (req,res)=>{
    res.status(200).render('citystatecombo') 
}

const handlestate = (req,res)=>{
    conn.query(`select * from states;`, (err,result)=>{
        if(err) throw err;
       res.json(result)
    })
}

const handlecity = (req,res)=>{
    conn.query(`select * from cities where state_id = ?`,[req.params.id],(err,result)=>{
        if(err) throw err;
       res.json(result)
    })
}

module.exports = { handlecitystate, handlestate, handlecity }