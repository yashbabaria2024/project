
const {conn} = require('../connection/connection')


const handlefetchCrud = (req, res) => {
    res.render('task12');
}

const handleBasicDetail =  (req, res) => {
    id = req.params.id;
    let basic = `select first_name as firstname,last_name as lastname,desg,email,contact,gender,relation_status as relationshipstatus, add1 as address, add2 as address2, city, state,zip_code as zipcode, dob as dateofbirth from basic_detail where emp_id = '${id}';`
    conn.query(basic, (err, result) => {
        if (err) throw err;
        res.json(result);
    })

}

const handleEduDetail = (req, res) => {
    id = req.params.id;
    let edu = `select edu_id,nob,passing_yr as passingyear, percentage from edu_detail where emp_id = '${id}';`
    conn.query(edu, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

const handleexpdetail = (req, res) => {
    id = req.params.id;
    let exp = `select work_id,comp_name as companyname, desg as designation, dt_from, dt_to from work_exp where emp_id = '${id}';`
    conn.query(exp, (err, result) => {
        if (err) throw err;
        res.json(result);
    })

}

const handlelangdetail = (req, res) => {
    id = req.params.id;
    lang = `select lang_id, lang_name as lang, lang_read as read_lang, lang_write as write_lang , lang_speak as speak_lang from lang_detail where emp_id = '${id}'`
    conn.query(lang, (err, result) => {
        if (err) throw err;
        res.json(result);
    })

}

const handlerefdetail = (req, res) => {
    id = req.params.id;
    let ref = `select ref_id,ref_name as refname, ref_contact as refcontact, ref_relation as refrelation from ref_detail where emp_id = '${id}';`
    conn.query(ref, (err, result) => {
        if (err) throw err;
        res.json(result);
    })

}

const handleprefdetail = (req, res) => {
    id = req.params.id;
    let pref = `select pref_id,pref_location as preferedlocation, notice_period as noticeperiod, expacted_ctc as expecedCTC, current_ctc as currentCTC, department as Department from pref_detail where emp_id = '${id}';`
    conn.query(pref, (err, result) => {
        if (err) throw err;
        res.json(result);
    })

}

const handletechdetail =  (req, res) => {
    id = req.params.id
    tech = `select tech_id, tech_name as techlang, tech_level from tech_detail where emp_id = '${id}'`
    conn.query(tech, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
}

const handleuser =  (req, res) => {
    id = req.params.id;
    res.render('task12')
}

const createuser = (req, res) => {

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

    const query1 = `insert into basic_detail (first_name,last_name,desg,email,contact,gender,relation_status,add1,add2,city,state,zip_code,dob) values ('${firstname}','${lastname}','${desg}','${email}','${contact}','${gender}','${relationshipstatus}','${address}','${address2}','${city}','${state}','${zipcode}','${dateofbirth}')`

    const queryPromise1 = () => {
        return new Promise((resolve, reject) => {
            conn.query(query1, (error, results) => {
                if (error) {
                    return reject(error);
                }
          
                return resolve(results.insertId);
            });
        });
    };

    queryPromise1()
    async function sequentialQueries() {
        try {
            const id = await queryPromise1();
            let nob = req.body.nob.split(',');
            const passingyear = req.body.passingyear.split(',');
            const percentage = req.body.percentage.split(',');

            for (let i = 0; i < nob.length; i++) {


                if (nob[i] != "" && passingyear[i] != "" && percentage[i] != "") {
                    const edu = `insert into edu_detail (emp_id,nob,passing_yr,percentage) values ('${id}','${nob[i]}','${passingyear[i]}','${percentage[i]}');`
       
                    conn.query(edu, (err) => {
                        if (err) throw err;
                    })
                }
            }

            let companyname = req.body.companyname.split(',')
            let designation = req.body.designation.split(',');
            let from = req.body.from.split(',');
            let to = req.body.to.split(',');
    
            for (let i = 0; i < companyname.length; i++) {

                {
                    if (companyname[i] != "") {
                        let query3 = `insert into work_exp (emp_id,comp_name,desg,dt_from,dt_to) values ('${id}','${companyname[i]}','${designation[i]}','${from[i]}','${to[i]}')`;
                       
                        conn.query(query3, (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }

            let lang = req.body.lang.split(',')

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
                    let query6 = `insert into lang_detail (emp_id,lang_name,lang_read, lang_write, lang_speak) values ('${id}','${lang[i]}','${read}','${write}','${speak}');`

                    conn.query(query6, (err) => {
                        if (err) throw err;
                    })
                }
            }

            let techlang = req.body.techlang.split(',');

            let query7;
            let php = req.body.php;
            let mysql = req.body.mysql;
            let oracle = req.body.oracle;
            let laravel = req.body.laravel;

            let techarr = [php, mysql, oracle, laravel]

           
            for (let i = 0; i < techlang.length; i++) {

                query7 = `insert into tech_detail (emp_id,tech_name,tech_level) values ('${id}','${techlang[i]}','${techarr[i]}');`

                conn.query(`${query7}`, (err) => {
                    if (err) throw err;
                })
            }

            let refname = req.body.refname.split(',');
            let refcontact = req.body.refcontact.split(',');
            let refrelation = req.body.refrelation.split(',');
            for (let i = 0; i < refname.length; i++) {



                if (refname != "" || refcontact != "" && refrelation != "") {
                    let query4 = `insert into ref_detail (emp_id,ref_name,ref_contact,ref_relation)values('${id}','${refname[i]}','${refcontact[i]}','${refrelation[i]}')`;

                    conn.query(query4, (err) => {
                        if (err) throw err;
                    })
                }
            }


            let preferedlocation = req.body.preferedlocation
            let noticeperiod = req.body.noticeperiod;
            let expecedCTC = req.body.expecedCTC;
            let currentCTC = req.body.currentCTC;
            let Department = req.body.Department;

            if (preferedlocation != "") {
                let query5 = `insert into pref_detail (emp_id,pref_location,notice_period,expacted_ctc,current_ctc,department)values('${id}','${preferedlocation}','${noticeperiod}','${expecedCTC}','${currentCTC}','${Department}');`
              
                conn.query(query5, (err) => {
                    if (err) throw err;
                })
            }

        } catch (error) {

        }
    }
    sequentialQueries()
}

const updateuser = (req, res) => {

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

    let query1 = `update  basic_detail set first_name = '${firstname}',last_name = '${lastname}',desg = '${desg}',email = '${email}' ,contact = '${contact}',gender='${gender}',relation_status ='${relationshipstatus}',add1='${address}',add2='${address2}',city='${city}',state='${state}',zip_code='${zipcode}',dob='${dateofbirth}' where emp_id = ${id};`


    const updatebasic = () => {
        return new Promise((resolve, reject) => {
            conn.query(query1, (error, results) => {
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
            let pref_id = req.body.pref_id;
           
            let preferedlocation = req.body.preferedlocation
            let noticeperiod = req.body.noticeperiod;
            let expecedCTC = req.body.expecedCTC;
            let currentCTC = req.body.currentCTC;
            let Department = req.body.Department;
           
            if (pref_id == "") {
                let query5 = `insert into pref_detail (emp_id,pref_location,notice_period,expacted_ctc,current_ctc,department)values('${id}','${preferedlocation}','${noticeperiod}','${expecedCTC}','${currentCTC}','${Department}');`
                
                conn.query(query5, (err) => {
                    if (err) throw err;
                })
            }
            else {
                if (pref_id != "") {
                    let query2 = `update pref_detail set pref_location = '${preferedlocation}' , notice_period = '${noticeperiod}', expacted_ctc = '${expecedCTC}', current_ctc = '${currentCTC}', department = '${Department}' where emp_id = '${id}';`
                   
                    conn.query(query2, (err) => { if (err) throw err; })
                }
            }




            let refname = req.body.refname.split(',');
            let ref_id = req.body.ref_id.split(',');

            let refcontact = req.body.refcontact.split(',');
            let refrelation = req.body.refrelation.split(',');
            for (let i = 0; i < refname.length; i++) {
              
                if (ref_id[i] == "") {
                    if (refname[i] != "") {
                        let query4 = `insert into ref_detail (emp_id,ref_name,ref_contact,ref_relation)values('${id}','${refname}','${refcontact[i]}','${refrelation[i]}')`;
                       
                        conn.query(query4, (err) => {
                            if (err) throw err;
                        })
                    }
                }
                else {
                    if (ref_id[i] != "") {
                        let query4 = `update ref_detail set ref_name = '${refname[i]}',ref_contact = '${refcontact[i]}',ref_relation='${refrelation[i]}' where emp_id = ${id} and ref_id = ${ref_id[i]}`;
                      
                        conn.query(query4, (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }


            nob = req.body.nob.split(',');
            let edu_id = req.body.edu_id.split(',')
            const passingyear = req.body.passingyear.split(',');
            const percentage = req.body.percentage.split(',');
            for (let i = 0; i < nob.length; i++) {
                if (edu_id[i] == "") {
                    if (nob[i] != "") {
                        const edui = `insert into edu_detail (emp_id,nob,passing_yr,percentage) values ('${id}','${nob[i]}','${passingyear[i]}','${percentage[i]}');`
                        conn.query(edui, (err) => {
                            if (err) throw err;
                        })
                    }
                }
                else {
                    if (edu_id[i] != "") {
                        const edu = `update edu_detail set nob='${nob[i]}',passing_yr='${passingyear[i]}',percentage='${percentage[i]}' where emp_id = ${id} and edu_id = ${edu_id[i]};`

                        conn.query(edu, (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }

            let work_id = req.body.work_id.split(',')
            let companyname = req.body.companyname.split(',')
            let designation = req.body.designation.split(',');
            let dt_from = req.body.dt_from.split(',');
            let dt_to = req.body.dt_to.split(',');
            for (let i = 0; i < companyname.length; i++) {
                if (work_id[i] == "") {
                    if (companyname[i] != "") {
                        let query3i = `insert into work_exp (emp_id,comp_name,desg,dt_from,dt_to) values ('${id}','${companyname[i]}','${designation[i]}','${dt_from[i]}','${dt_to[i]}')`;
                        conn.query(query3i, (err) => {
                            if (err) throw err;
                        })
                    }
                }
                else {
                    if (work_id[i] != "") {
                        let query3 = `update work_exp set comp_name = '${companyname[i]}',desg = '${designation[i]}' ,dt_from = '${dt_from[i]}', dt_to ='${dt_to[i]}' where emp_id = '${id}' and work_id = '${work_id[i]}' `;
                        conn.query(query3, (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }

            let lang_id = req.body.lang_id.split(',')
            let lang = req.body.lang.split(',')
            for (let i = 0; i < lang.length; i++) {
                if (lang[i] != "") {
                    let read = req.body["read_" + lang[i]]
                    let write = req.body["write_" + lang[i]]
                    let speak = req.body["speak_" + lang[i]]
                    if (read == "") {
                        read = 0;
                    }
                    if (write == "") {
                        write = 0;
                    }
                    if (speak == "") {
                        speak = 0;
                    }

                    if (lang_id[i] == "") {
                        let query6i = `insert into lang_detail (emp_id,lang_name,lang_read, lang_write, lang_speak) values ('${id}','${lang[i]}','${read}','${write}','${speak}');`
                        conn.query(query6i, (err) => {
                            if (err) throw err;
                        })
                    }
                    else {
                        let query6 = `update lang_detail set lang_name = '${lang[i]}', lang_read = '${read}', lang_write='${write}',lang_speak='${speak}' where emp_id=${id} and lang_id = ${lang_id[i]}`
                        conn.query(query6, (err) => {
                            if (err) throw err;
                        })
                    }

                }
            }


            let techlang = req.body.techlang.split(',');
            let php = req.body.php;
            let oracle = req.body.oracle;
            let mysql = req.body.mysql;
            let laravel = req.body.laravel;
            tech_id = req.body.tech_id.split(',')
            let techarr = [php, oracle, mysql, laravel]
            for (let i = 0; i < techlang.length; i++) {

                if (tech_id[i] == "") {
                    let query7i = `insert into tech_detail (emp_id,tech_name,tech_level) values ('${id}','${techlang[i]}','${techarr[i]}');`

                    conn.query(query7i, (err) => {
                        if (err) throw err;
                    })
                }
                else {
                    if (tech_id[i] != "") {

                        let query7 = `update tech_detail set tech_name = '${techlang[i]}',tech_level = '${techarr[i]}' where emp_id = '${id}' and tech_id = '${tech_id[i]}'`
                        conn.query(query7, (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }



        } catch (error) {
            console.log("update error" + error)
        }
    }

    updateFun()
}


module.exports = {
    handlefetchCrud,
handleBasicDetail,
handleEduDetail,
handleexpdetail,
handlelangdetail,
handlerefdetail,
handleprefdetail,
handletechdetail,
handleuser,
createuser,
updateuser
}