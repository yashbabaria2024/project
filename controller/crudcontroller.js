const { conn } = require('../connection/connection')
const bodyParser = require("body-parser");
bodyParser.urlencoded({ extended: true })

const handleJobform = (req, res) => {
    res.render('crud')
}

const displayJobFormData = async (req, res) => {
    id = req.params.id
    res.render('crud')

}

const createJobFormData = (req, res) => {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const desg = req.body.desg;
    const email = req.body.email
    const address = req.body.address;
    const address2 = req.body.address2
    const contact = req.body.contact;
    const city = req.body.city;
    const gender = req.body.gender;
    const state = req.body.state;
    const relationshipstatus = req.body.relationshipstatus;
    const zipcode = req.body.zipcode;
    const dateofbirth = req.body.dateofbirth;

    const queryPromise1 = () => {
        return new Promise((resolve, reject) => {
            conn.query(`insert into basic_detail (first_name,last_name,desg,email,contact,gender,relation_status,add1,add2,city,state,zip_code,dob) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`, [firstname, lastname, desg, email, contact, gender, relationshipstatus, address, address2, city, state, zipcode, dateofbirth], (error, results) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results.insertId);
            });
        });
    };

    async function sequentialQueries() {
        try {
            const id = await queryPromise1();
            let nob = req.body.nob  ;
            const passingyear = req.body.passingyear  ;
            const percentage = req.body.percentage  ;

            for (let i = 0; i < nob.length; i++) {
                if (nob[i] != "" && passingyear[i] != "" && percentage[i] != "") {
                    conn.query(`insert into edu_detail (emp_id,nob,passing_yr,percentage) values (?,?,?,?);`, [id, nob[i], passingyear[i], percentage[i]], (err) => {
                        if (err) throw err;
                    })
                }
            }

            let companyname = req.body.companyname  
            let designation = req.body.designation  ;
            let from = req.body.dt_from  ;
            let to = req.body.dt_to  ;

            for (let i = 0; i < companyname.length; i++) {
                if (companyname[i] != "") {
                    conn.query(`insert into work_exp (emp_id,comp_name,desg,dt_from,dt_to) values (?,?,?,?,?)`, [id, companyname[i], designation[i], from[i], to[i]], (err) => {
                        if (err) throw err;
                    })
                }
            }

            let lang = req.body.language

            if (lang != undefined) {
                lang = req.body.language  ;
                for (let i = 0; i < lang.length; i++) {
                    if (lang[i] != "") {
                        let read = req.body["read_" + lang[i]]
                        let write = req.body["write_" + lang[i]]
                        let speak = req.body["speak_" + lang[i]]
                        if (read == undefined) {
                            read = 0;
                        }
                        if (write == undefined) {
                            write = 0;
                        }
                        if (speak == undefined) {
                            speak = 0;
                        }

                        conn.query(`insert into lang_detail (emp_id,lang_name,lang_read, lang_write, lang_speak) values (?,?,?,?,?)`, [id, lang[i], read, write, speak], (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }

            let techlang = req.body.techlang;
            let php = req.body.php;
            let mysql = req.body.mysql;
            let oracle = req.body.oracle;
            let laravel = req.body.laravel;

            if (techlang != undefined) {
                techlang = req.body.techlang  ;
                let techarr = [php, mysql, oracle, laravel]

                for (let i = 0; i < techlang.length; i++) {
                    conn.query(`insert into tech_detail (emp_id,tech_name,tech_level) values (?,?,?)`, [id, techlang, techarr], (err) => {
                        if (err) throw err;
                    })
                }
            }


            let ref = req.body.refname
            
            if (ref != undefined) {

                let refname = req.body.refname  ;
                let refcontact = req.body.refcontact  ;
                let refrelation = req.body.refrelation  ;

                for (let i = 0; i < refname.length; i++) {

                    if (refname[i] != "") {

                        conn.query(`insert into ref_detail (emp_id,ref_name,ref_contact,ref_relation)values (?,?,?,?)`, [id, refname[i], refcontact[i], refrelation[i]], (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }

            let preferedlocation = req.body.preferedlocation
            let noticeperiod = req.body.noticeperiod;
            let expecedCTC = req.body.expecedCTC;
            let currentCTC = req.body.currentCTC;
            let Department = req.body.Department;

            if (preferedlocation != "") {

                conn.query(`insert into pref_detail (emp_id,pref_location,notice_period,expacted_ctc,current_ctc,department)values (?,?,?,?,?,?);`, [id, preferedlocation, noticeperiod, expecedCTC, currentCTC, Department], (err) => {
                    if (err) throw err;
                })
            }
        } catch (error) {
            console.log("Error:" + error);
        }

    }
    sequentialQueries()
}

const updatejobFormData = (req, res) => {

    let id = req.params.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const desg = req.body.desg;
    const email = req.body.email
    const address = req.body.address;
    const address2 = req.body.address2
    const contact = req.body.contact;
    const city = req.body.city;
    const gender = req.body.gender;
    const state = req.body.state;
    const relationshipstatus = req.body.relationshipstatus;
    const zipcode = req.body.zipcode;
    const dateofbirth = req.body.dateofbirth;


    const updatebasic = () => {
        return new Promise((resolve, reject) => {
            conn.query(`update  basic_detail set first_name = ?,last_name = ?,desg = ?,email = ? ,contact = ?,gender=?,relation_status =?,add1=?,add2=?,city=?,state=?,zip_code=?,dob=? where emp_id = ?;`, [firstname, lastname, desg, email, contact, gender, relationshipstatus, address, address2, city, state, zipcode, dateofbirth, id], (error, results) => {
                if (error) {
                    return reject(error);
                }

                return resolve(id);
            });
        });
    };

    const updateFun = async () => {
        try {

            const id = await updatebasic();
           
           
                let nob = req.body.nob;
            let edu_id = req.body.edu_id;
            const passingyear = req.body.passingyear;
            const percentage = req.body.percentage;
            for (let i = 0; i < nob.length; i++) {
                if (edu_id[i] == "") {
                    if (nob[i] != "") {

                        conn.query(`insert into edu_detail (emp_id,nob,passing_yr,percentage) values (?,?,?,?)`, [id, nob[i], passingyear[i], percentage[i]], (err) => {
                            if (err) throw err;
                        })
                    }
                }
                else {
                    if (edu_id[i] != "") {
                        conn.query(`update edu_detail set nob=?,passing_yr=?,percentage=? where emp_id = ? and edu_id = ?`, [nob[i], passingyear[i], percentage[i], id, edu_id[i]], (err) => {
                            if (err) throw err;
                        })
                    }
                }
       
        }
            let work_id = req.body.work_id  
            let companyname = req.body.companyname  
            let designation = req.body.designation  ;
            let dt_from = req.body.dt_from  ;
            let dt_to = req.body.dt_to  ;
            for (let i = 0; i < companyname.length; i++) {
                if (work_id[i] == "") {
                    if (companyname[i] != "") {
                        conn.query(`insert into work_exp (emp_id,comp_name,desg,dt_from,dt_to) values (?,?,?,?,?)`, [id, companyname[i], designation[i], dt_from[i], dt_to[i]], (err) => {
                            if (err) throw err;
                        })
                    }
                }
                else {
                    if (work_id[i] != "") {
                        conn.query(`update work_exp set comp_name = ?,desg = ? ,dt_from = ?, dt_to =? where emp_id = ? and work_id = ? `, [companyname[i], designation[i], dt_from[i], dt_to[i], id, work_id[i]], (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }




            let lang = req.body.language
            if (lang != undefined) {
                langsplit = req.body.language  ;

                for (let i = 0; i < langsplit.length; i++) {

                    let lang_id = req.body.lang_id  

                    if (lang[i] != "") {
                        let read = req.body["read_" + langsplit[i]]
                        let write = req.body["write_" + langsplit[i]]
                        let speak = req.body["speak_" + langsplit[i]]
                        if (read == undefined) {
                            read = 0;
                        }
                        if (write == undefined) {
                            write = 0;
                        }
                        if (speak == undefined) {
                            speak = 0;
                        }

                        if (lang_id[i] == "") {

                            conn.query(`insert into lang_detail (emp_id,lang_name,lang_read, lang_write, lang_speak) values (?,?,?,?,?)`, [id, langsplit[i], read, write, speak], (err) => {
                                if (err) throw err;
                            })
                        }
                        else {
                            conn.query(`update lang_detail set lang_name = ?, lang_read = ?, lang_write=?,lang_speak=? where emp_id=? and lang_id = ?`, [langsplit[i], read, write, speak, id, lang_id[i]], (err) => {
                                if (err) throw err;
                            })
                        }

                    }
                }
            }







            let techlang = req.body.techlang  ;
            let php = req.body.php;
            let oracle = req.body.oracle;
            let mysql = req.body.mysql;
            let laravel = req.body.laravel;
            tech_id = req.body.tech_id  
            let techarr = [php, oracle, mysql, laravel]
            for (let i = 0; i < techlang.length; i++) {

                if (tech_id[i] == "") {
                    conn.query(`insert into tech_detail(emp_id,tech_name,tech_level) values (?,?,?)`, [id, techlang[i], techarr[i]], (err) => {
                        if (err) throw err;
                    })
                }
                else {
                    if (tech_id[i] != "") {
                        conn.query(`update tech_detail set tech_name = ?,tech_level = ? where emp_id = ? and tech_id = ?`, [techlang[i], techarr[i], id, tech_id[i]], (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }


            let refname = req.body.refname  ;
            let ref_id = req.body.ref_id  ;
            let refcontact = req.body.refcontact  ;
            let refrelation = req.body.refrelation  ;
            for (let i = 0; i < refname.length; i++) {

                if (ref_id[i] == "") {
                    if (refname[i] != "") {

                        conn.query(`insert into ref_detail (emp_id,ref_name,ref_contact,ref_relation)values (?,?,?,?)`, [id, refname[i], refcontact[i], refrelation[i]], (err) => {
                            if (err) throw err;
                        })

                    }
                }
                else {
                    if (ref_id[i] != "") {

                        conn.query(`update ref_detail set ref_name = ?,ref_contact = ?,ref_relation=? where emp_id = ? and ref_id = ?`, [refname[i], refcontact[i], refrelation[i], id, ref_id[i]], (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }

           
            let pref_id = req.body.pref_id;
            let preferedlocation = req.body.preferedlocation
            let noticeperiod = req.body.noticeperiod;
            let expecedCTC = req.body.expecedCTC;
            let currentCTC = req.body.currentCTC;
            let Department = req.body.Department;

            if (pref_id == "") {
                conn.query(`insert into pref_detail (emp_id,pref_location,notice_period,expacted_ctc,current_ctc,department)values ?,?,?,?,?,?`, [id, preferedlocation, noticeperiod, expecedCTC, currentCTC, Department], (err) => {
                    if (err) throw err;
                })
            }
            else {
                if (pref_id != "") {
                    conn.query(`update pref_detail set pref_location = ? , notice_period = ?, expacted_ctc = ?, current_ctc = ?, department = ? where emp_id = ?;`, [preferedlocation, noticeperiod, expecedCTC, currentCTC, Department, id], (err) => { if (err) throw err; })
                }
            }


        } catch (error) {
            console.log("update error" + error)
        }
    }

    updateFun()
}


module.exports = { handleJobform, displayJobFormData, createJobFormData, updatejobFormData }