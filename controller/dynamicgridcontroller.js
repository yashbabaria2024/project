const { conn } = require('../connection/connection')

const displComponent = (req, res) => {
    res.status(200).render('dynamicgrid')
}
let id

const postComponent = (req, res) => {

    if (req.body.data) {
        id = req.body.data;
    }

    col = [];
   
    conn.query(id, (err, row, fields) => {
        if (err) {
            return res.status(406).redirect('/dynamicgrid');
        }
        else {

            for (i in fields) {
                col.push(fields[i].name);
              
            }
         }

        let recordset =row.length
        let pid;
        if (req.query.pid == undefined) {
            pid = 1;
        }
        else {
            pid = parseInt(req.query.pid);
        }

        let pagefield = 20;
        let currentpage = (pid - 1) * pagefield;

        conn.query(`${id} limit ${currentpage},${pagefield}`, (err, row) => {
            if (err) {
                return res.status(406).redirect('/dynamicgrid');
            }

            return res.status(200).render('dynamicgrid', { 'row': row, 'pid': pid, 'col': col, 'recordset': recordset })
        })
    })

}

module.exports = { displComponent, postComponent }