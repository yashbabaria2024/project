const {conn} = require('../connection/connection')

const userview = (req,res)=>{
  try{
  let col = []
  conn.query(`select emp_id as Id,first_name as Firstname, last_name as Lastname,desg as Designation ,email as Email,contact as Contact,city as City from basic_detail`, (err,row,fields)=>{
    if(err)
    {
      console.log(err);
      res.status(404).json("error")
    }
    else{
    for(i in fields)
    {
      col.push(fields[i].name);
    }
   res.render('userview',{"col":col,"row":row})
  }})
}catch(err){
  console.log("error userview"+err);
}
}


const userdelete = (req,res)=>{
  let id = req.params.id
  conn.query(`delete from basic_detail where emp_id = ${id}`,(err)=>{
    if(err)
    {
      res.status(404).json("not found")
    }
    else
    {
      res.status(200).redirect("/userview")
    }
  })
}

module.exports = {userview,userdelete}