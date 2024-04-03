const { query } = require('express');
const { conn } = require('../connection/connection')
const bodyParser = require("body-parser");
bodyParser.urlencoded({ extended: true })

const handleJobform = (req, res) => {
    res.render('crud')
}

const displayJobFormData = async (req, res) => {
    id = req.params.id
    const queryselect = (str) => {
        return new Promise((resolve, reject) => {

            conn.query(str, [id], (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            });
        });
    };

    let basic = await queryselect(`select * from basic_detail where emp_id =? ;`);
    let edu = await queryselect(`select * from edu_detail where emp_id =? ;`)
    let ref = await queryselect(`select * from ref_detail where emp_id =? ;`);
    let pref = await queryselect(`select * from pref_detail where emp_id =? ;`);
    let exp = await queryselect(`select * from work_exp where emp_id =? ;`);
    let lang = await queryselect(`select * from lang_detail where emp_id =? `);
    let tech = await queryselect(`select * from tech_detail where emp_id =? `);

    res.status(200).render('crud', { "basic": basic, "ref": ref, "pref": pref, "edu": edu, "exp": exp, "tech": tech, "lang": lang });
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

    if (!(firstname && lastname && desg && email && address && contact && city && gender && state && relationshipstatus && zipcode && dateofbirth)) {
        res.status(404).send({ msg: "Field empty" });
    }
    else {
        const queryPromise1 = () => {
            return new Promise((resolve, reject) => {
                conn.query(`insert into basic_detail (first_name,last_name,desg,email,contact,gender,relation_status,add1,add2,city,state,zip_code,dob) values (?,?,?,?,?,?,?,?,?,?,?,?,?);`, [firstname, lastname, desg, email, contact, gender, relationshipstatus, address, address2, city, state, zipcode, dateofbirth], (error, results) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(results.insertId);
                });
            });
        }

        async function sequentialQueries() {

            const id = await queryPromise1();

            let nob = req.body.nob;
            for (let i = 0; i < nob.length; i++) {
                const board = req.body.nob[i];
                const passingyear = req.body.passingyear[i];
                const percentage = req.body.percentage[i];

                if (board != "" && passingyear != "" && percentage != "") {
                    conn.query(`insert into edu_detail (emp_id,nob,passing_yr,percentage) values (?,?,?,?);`, [id, board, passingyear, percentage], (err) => {
                        if (err) throw err;
                    })
                }
            }

            let companyname = req.body.companyname
            for (let i = 0; i < companyname.length; i++) {
                let designation = req.body.designation;
                let from = req.body.from;
                let to = req.body.to;
                if (companyname[i] != "") {
                    conn.query(`insert into work_exp (emp_id,comp_name,desg,dt_from,dt_to) values (?,?,?,?,?)`, [id, companyname[i], designation[i], from[i], to[i]], (err) => {
                        if (err) throw err;
                    })
                }
            }

            let refname = req.body.refname;
            let refcontact = req.body.refcontact;
            let refrelation = req.body.refrelation;
            for (let i = 0; i < refname.length; i++) {

                if (refname[i] != "" && refcontact[i] != "" && refrelation[i] != "") {
                    conn.query(`insert into ref_detail (emp_id,ref_name,ref_contact,ref_relation)values (?,?,?,?)`, [id, refname[i], refcontact[i], refrelation[i]], (err) => {
                        if (err) throw err;
                    })
                }
            }


            let lang = req.body.language
            if (lang != undefined) {
                for (let i = 0; i < lang.length; i++) {
                    let langarr = req.body.language[i]
                    if (langarr[i] != "" || langarr[i] != undefined) {

                        let read = req.body["read_" + langarr]
                        let write = req.body["write_" + langarr]
                        let speak = req.body["speak_" + langarr]
                        if (read == undefined) {
                            read = 0;
                        } if (write == undefined) {
                            write = 0;
                        } if (speak == undefined) {
                            speak = 0;
                        }

                        conn.query(`insert into lang_detail (emp_id,lang_name,lang_read, lang_write, lang_speak) values (?,?,?,?,?);`, [id, langarr, read, write, speak], (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }

            let techlang = req.body.techlang;
            let techknown;
            let php = req.body.php;
            let mysql = req.body.mysql;
            let laravel = req.body.laravel;
            let oracle = req.body.oracle;

            let techarr = [php, mysql, oracle, laravel]
            if (techlang != undefined) {
                for (let i = 0; i < req.body.techlang.length; i++) {
                    techlang = req.body.techlang[i]
                    techknown = techarr[i]
                    if (techlang[i] != undefined) {
                        conn.query(`insert into tech_detail (emp_id,tech_name,tech_level) values (?,?,?);`, [id, techlang, techknown], (err) => {
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

            if (preferedlocation != "" || preferedlocation == undefined) {
                conn.query(`insert into pref_detail (emp_id,pref_location,notice_period,expacted_ctc,current_ctc,department)values
                (?,?,?,?,?,?);`, [id, preferedlocation, noticeperiod, expecedCTC, currentCTC, Department], (err) => {
                    if (err) throw err;
                })
            }
        }
        sequentialQueries()
    }
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


        const id = await updatebasic();

        let preferedlocation = req.body.preferedlocation
        let noticeperiod = req.body.noticeperiod;
        let expecedCTC = req.body.expecedCTC;
        let currentCTC = req.body.currentCTC;
        let Department = req.body.Department;

        if (!(preferedlocation || noticeperiod || expecedCTC || currentCTC || Department)) {
            conn.query(`insert into pref_detail (emp_id,pref_location,notice_period,expacted_ctc,current_ctc,department)values
                    (?,?,?,?,?,?);`, [id, preferedlocation, noticeperiod, expecedCTC, currentCTC, Department], (err) => {
                if (err) throw err;
            })
        }

        conn.query(`update pref_detail set pref_location = ? , notice_period = ?, expacted_ctc = ?, current_ctc = ?, department = ? where emp_id = ?;`, [preferedlocation, noticeperiod, expecedCTC, currentCTC, Department, id], (err) => { if (err) throw err; })


        let refid = req.body.refid;
        refname = req.body.refname;
        let refcontact = req.body.refcontact;
        let refrelation = req.body.refrelation;
        for (let i = 0; i < refname.length; i++) {



            if (refid[i] == undefined) {
                if (!(refname[i])) {
                    conn.query(`insert into ref_detail (emp_id,ref_name,ref_contact,ref_relation)values (?,?,?,?)`, [id, refname[i], refcontact[i], refrelation[i]], (err) => {
                        if (err) throw err;
                    })
                }
            }
            else {
                conn.query(`update ref_detail set ref_name = ?,ref_contact = ?,ref_relation=? where emp_id = ? and ref_id = ?;`, [refname[i], refcontact[i], refrelation[i], id, refid[i]], (err) => {
                    if (err) throw err;
                })
            }
        }


        let nob = req.body.nob
        let eduid = req.body.eduid
        let passingyear = req.body.passingyear;
        let percentage = req.body.percentage;
        for (let i = 0; i < nob.length; i++) {

            if (!(eduid[i])) {
                if (nob[i] != "") {
                    conn.query(`insert into edu_detail (emp_id,nob,passing_yr,percentage) values (?,?,?,?);`, [id, nob[i], passingyear[i], percentage[i]], (err) => {
                        if (err) throw err;
                    })
                }
            }
            else {
                conn.query(`update edu_detail set nob=?,passing_yr=?,percentage=? where emp_id = ? and edu_id = ?;`, [nob[i], passingyear[i], percentage[i], id, eduid[i]], (err) => {
                    if (err) throw err;
                })
            }
        }

        let expid = req.body.expid
        let companyname = req.body.companyname
        let designation = req.body.designation;
        let from = req.body.from;
        let to = req.body.to;

        for (let i = 0; i < companyname.length; i++) {

            if (!(expid[i])) {
                if (companyname[i] != "") {
                    conn.query(`insert into work_exp (emp_id,comp_name,desg,dt_from,dt_to) values (?,?,?,?,?)`, [id, companyname[i], designation[i], from[i], to[i]], (err) => {
                        if (err) throw err;
                       
                    })
                }
            }
            if (companyname[i] != "") {
                conn.query(`update work_exp set comp_name = ?,desg = ? ,dt_from = ?, dt_to =? where emp_id = ? and work_id = ? `, [companyname[i], designation[i], from[i], to[i], id, expid[i]], (err) => {
                    if (err) throw err;
                   
                })
            }
        }


        let langid = req.body.langid
        let lang = req.body.language

        if (lang != undefined) {
            for (let i = 0; i < lang.length; i++) {
                let langarr = req.body.language[i]
                if (langarr[i] != "" || langarr[i] != undefined) {
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

                    if (langid == undefined ) {
                        if (lang[i] != undefined) {
                            conn.query(`insert into lang_detail (emp_id,lang_name,lang_read, lang_write, lang_speak) values (?,?,?,?,?);`, [id, langarr, read, write, speak], (err) => {
                                if (err) throw err;
                            })
                        } 
                        }
                        else{
                            conn.query(`update lang_detail set lang_name = ?, lang_read = ?, lang_write= ?,lang_speak= ? where emp_id=? and lang_id = ?`, [langarr, read, write, speak, id, langid[i]], (err) => {
                                if (err) throw err;
                            })
                        }
                   
                }
            }
        }

        let techid = req.body.techid
        
        let techlang = req.body.techlang
        let php = req.body.php;
        let oracle = req.body.oracle;
        let mysql = req.body.mysql;
        let laravel = req.body.laravel;
        let techarr = [php, oracle, mysql, laravel]
      
        if (techlang != undefined) {

            for (let i = 0; i < techlang.length; i++) {
                console.log(techid[i]);
            //   let techlangarr = req.body.techlang[i]
               
                if (techid[i] == undefined || techid[i] == "") 
                {
                    if(techlang[i] != undefined)
                    {
                    conn.query(`insert into tech_detail (emp_id,tech_name,tech_level) values (?,?,?);`,[id,techlang[i],techarr[i]], (err) => {
                        if (err) throw err;
                    })
                }
                }
                else 
                {
                if (techid[i] != undefined) {
                        conn.query(`update tech_detail set tech_name = ?,tech_level = ? where emp_id = ? and tech_id = ?`,[techlang[i],techarr[i],id,techid[i]], (err) => {
                        if (err) throw err;
                    })
                }}
            }
        }
    }
    updateFun()
}



module.exports = { handleJobform, displayJobFormData, createJobFormData, updatejobFormData }