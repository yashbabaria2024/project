const {conn} = require('../connection/connection')

const displComponent = (req,res)=>{
    res.render('task6')
}
let id
const postComponent = (req, res)=>{
  
    if ( req.body.data) {
        id = req.body.data;
    }

    if ( req.query.data) {
        id = req.query.data;
    }

        col = [];
            conn.query(`${id}`, (err,row,fields) =>{
          if(err)
          {
             return res.redirect('/dynamicgrid');
          }
          else
          {   
                      
            for(i in fields)
            {
                col.push(fields[i].name);   
            }   
        }
        let recordset = row.length

        // pagination
        var pid;
        if(req.query.pid == undefined)
        {
            pid = 1;
        }
        else
        {
            pid = parseInt(req.query.pid);
        }
    
      let  pagefield = 20;
        let currentpage = (pid - 1)* pagefield;

        let q = `${id} limit ${currentpage},${pagefield}`;
        conn.query(q, (err,row)=>{
            if(err)
              {
                 return res.redirect('/dynamicgrid');
              }
              
              return res.render('task6', {'row':row, 'pid':pid,'col':col,'id':id,'q':q, 'pagefield':pagefield, 'recordset':recordset})
        })
        })
       
}

module.exports = {displComponent,postComponent}