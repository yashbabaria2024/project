const { conn } = require('../connection/connection')

const attendancecontrol = (req, res) => {

    var month;
    if (req.query.id == undefined || req.query.month == undefined) {
        id = 1;
        month = 1;
    }
    else {
        id = parseInt(req.query.id);
        month = parseInt(req.query.month);
    }
    pagefield = 10
    currentpage = (id - 1) * pagefield;

    conn.query(`select student_detail.stud_id ,firstname,lastname,count(student_detail.stud_id) as present, concat(round((count(*)/30 * 100),2), '%') as percentage from student_detail inner join attend_detail  on student_detail.stud_id = attend_detail.stud_id where  month(attend_date) = ${month} and attend_type= 'present' group by student_detail.stud_id limit  ${currentpage}, ${pagefield} `, (err, row) => {
        if (err) throw err;
        res.render('task7', { 'row': row, "month": month })
    });
}

module.exports = { attendancecontrol }