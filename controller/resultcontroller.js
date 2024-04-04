const { conn } = require('../connection/connection')

const result = (req, res) => {

    let id

    if (req.query.id == undefined) {
        id = 1
    }
    else {
        id = parseInt(req.query.id)
    }

    let pagefield = 10;
    let currentPage = (id - 1) * pagefield;

    que = conn.query(`select student_detail.stud_id,firstname,lastname,
    sum(case when exam_id=1 then result_master.p_obtain end) as prelim_pm,
     sum(case when exam_id=1 then result_master.th_obtain end) as prelim_tm,
      sum(case when exam_id=2 then result_master.p_obtain end) as terminal_pm,
       sum(case when exam_id=2 then result_master.th_obtain end) as terminal_tm,
        sum(case when exam_id=3 then result_master.p_obtain end) as final_pm,
         sum(case when exam_id=3 then result_master.th_obtain end) as final_tm,
         sum(case when exam_id=1 then result_master.p_total end) + sum(case when exam_id=1 then result_master.th_total end)
         +sum(case when exam_id=2 then result_master.p_total end) + sum(case when exam_id=2 then result_master.th_total end) 
         +sum(case when exam_id=3 then result_master.p_total end) + sum(case when exam_id=3 then result_master.th_total end) as total,
   sum(case when exam_id=1 then result_master.p_obtain end)+sum(case when exam_id=1 then result_master.th_obtain end)
   + sum(case when exam_id=2 then result_master.p_obtain end) +   sum(case when exam_id=2 then result_master.th_obtain end) 
   + sum(case when exam_id=3 then result_master.p_obtain end) +   sum(case when exam_id=3 then result_master.th_obtain end) as totalobtain
   from result_master inner join student_detail on result_master.stud_id = student_detail.stud_id group by result_master.stud_id limit ?,?`,[currentPage,pagefield] ,(err, row) => {
        if (err) throw err;

        res.status(200).render('resultgrid/result', { 'row': row, 'id': id })
    })
}

const resultView = (req, res) => {

    let sid = req.query.sid;
    conn.query(`select firstname, lastname, exam_type as exam,subject_detail.sub_id, sub_name, th_obtain, p_obtain, (th_obtain + p_obtain) as obtainmarks, (th_total + p_total) as totalmarks
    from result_master inner join subject_detail on result_master.sub_id = subject_detail.sub_id 
    inner join exam_detail on result_master.exam_id = exam_detail.exam_id
    inner join student_detail on result_master.stud_id = student_detail.stud_id 
    where result_master.stud_id = ?`,[sid], (err, row) => {
        if (err) throw err
        res.status(200).render('resultgrid/gen', { 'row': row, 'sid': sid })
    })
}

module.exports = { result, resultView }