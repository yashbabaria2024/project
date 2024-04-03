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

            conn.query(str, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            });
        });
    };

    let basic = await queryselect(`select * from basic_detail where emp_id = '${id}';`);
    let edu = await queryselect(`select * from edu_detail where emp_id = '${id}';`)
    let ref = await queryselect(`select * from ref_detail where emp_id = '${id}';`);
    let pref = await queryselect(`select * from pref_detail where emp_id = '${id}';`);
    let exp = await queryselect(`select * from work_exp where emp_id = '${id}';`);
    let lang = await queryselect(`select * from lang_detail where emp_id = '${id}'`);
    let tech = await queryselect(`select * from tech_detail where emp_id = '${id}'`);

    // console.log(lang);
    res.status(200).render('crud', { "basic": basic, "ref": ref, "pref": pref, "edu": edu, "exp": exp, "tech": tech, "lang": lang });
}

const createJobFormData = (req, res) => {

    // console.log("post data");
    // console.log(req.body);
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
    }
    async function sequentialQueries() {
        try {
            const id = await queryPromise1();
            let nob = req.body.nob;
            // console.log(nob);
            for (let i = 0; i < nob.length; i++) {
                nob = req.body.nob[i];
                const passingyear = req.body.passingyear[i];
                const percentage = req.body.percentage[i];

                if (nob != "" && passingyear != "" && percentage != "") {
                    const edu = `insert into edu_detail (emp_id,nob,passing_yr,percentage) values ('${id}','${nob}','${passingyear}','${percentage}');`

                    conn.query(edu, (err) => {
                        if (err) throw err;
                    })
                }
            }

            let companyname = req.body.companyname
            let designation = req.body.designation;
            let from = req.body.from;
            let to = req.body.to;
            // console.log(companyname);

            for (let i = 0; i < companyname.length; i++) {

                {
                    if (companyname[i] != "") {
                        let query3 = `insert into work_exp (emp_id,comp_name,desg,dt_from,dt_to) values ('${id}','${companyname[i]}','${designation[i]}','${from[i]}','${to[i]}')`;
                        // console.log(query3);
                        conn.query(query3, (err) => {
                            if (err) throw err;
                        })
                    }
                }
            }

            let refname = req.body.refname;
            for (let i = 0; i < refname.length; i++) {
                refname = req.body.refname[i];
                let refcontact = req.body.refcontact[i];
                let refrelation = req.body.refrelation[i];

                if (refname != "" || refcontact != "" && refrelation != "") {
                    let query4 = `insert into ref_detail (emp_id,ref_name,ref_contact,ref_relation)values('${id}','${refname}','${refcontact}','${refrelation}')`;

                    conn.query(query4, (err) => {
                        if (err) throw err;
                    })
                }
            }

           
           let lang = req.body.language;
         if(lang != undefined || lang == "")
         {
            for (let i = 0; i < lang.length; i++) {
               console.log(lang,length);
                let langarr = req.body.language[i]
                if (langarr[i] != "" || langarr[i] != undefined) {
                    let read = req.body["read_" + langarr[i]]
                    console.log(read);
                    let write = req.body["write_" + langarr[i]]
                    let speak = req.body["speak_" + langarr[i]]
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
        }

            let preferedlocation = req.body.preferedlocation
            let noticeperiod = req.body.noticeperiod;
            let expecedCTC = req.body.expecedCTC;
            let currentCTC = req.body.currentCTC;
            let Department = req.body.Department;

            if (preferedlocation != "" || preferedlocation == undefined) {
                let query5 = `insert into pref_detail (emp_id,pref_location,notice_period,expacted_ctc,current_ctc,department)values('${id}','${preferedlocation}','${noticeperiod}','${expecedCTC}','${currentCTC}','${Department}');`
                conn.query(query5, (err) => {
                    if (err) throw err;
                })
            }

            let techlang;
            let techknown;
            let query7;
            let php = req.body.php;
            let mysql = req.body.mysql;
            let laravel = req.body.laravel;
            let oracle = req.body.oracle;
          
            let techarr = [php, mysql, oracle,laravel ]
         if(req.body.techlang != undefined || req.body.techlang != "")
         {
            for (let i = 0; i < req.body.techlang.length; i++) {
                techlang = req.body.techlang[i]

                for (let i = 0; i < techarr.length; i++) {
                    break
                 }
                console.log(req.body.techlang.length);
                techknown = techarr[i]
               
               
                if(techlang[i] != undefined )
                {
                query7 = `insert into tech_detail (emp_id,tech_name,tech_level) values ('${id}','${techlang}','${techknown}');`
                conn.query(`${query7}`, (err) => {
                    if (err) throw err;
                })
            }
            }
        }
        } catch (error) {
            console.log("insert error" + error)
        }
    }
    sequentialQueries()
}

const updatejobFormData = () => {
    (req, res) => {

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

        const query1 = `update  basic_detail set first_name = '${firstname}',last_name = '${lastname}',desg = '${desg}',email = '${email}' ,contact = '${contact}',gender='${gender}',relation_status ='${relationshipstatus}',add1='${address}',add2='${address2}',city='${city}',state='${state}',zip_code='${zipcode}',dob='${dateofbirth}' where emp_id = ${id};`


        const updatebasic = () => {
            return new Promise((resolve, reject) => {
                conn.query(query1, (error, results) => {
                    if (error) {
                        return reject(error);
                    }
                    // console.log(id);
                    return resolve(id);
                });
            });
        };

        const updateFun = async () => {
            try {

                const id = await updatebasic();

                let preferedlocation = req.body.preferedlocation
                let noticeperiod = req.body.noticeperiod;
                let expecedCTC = req.body.expecedCTC;
                let currentCTC = req.body.currentCTC;
                let Department = req.body.Department;

                let query2 = `update pref_detail set pref_location = '${preferedlocation}' , notice_period = '${noticeperiod}', expacted_ctc = '${expecedCTC}', current_ctc = '${currentCTC}', department = '${Department}' where emp_id = '${id}';`

                conn.query(query2, (err) => { if (err) throw err; })


                // let refname = req.body.refname;
                for (let i = 0; i < req.body.refname.length; i++) {
                    let refid = req.body.refid[i];
                    refname = req.body.refname[i];
                    let refcontact = req.body.refcontact[i];
                    let refrelation = req.body.refrelation[i];


                    if (req.body.refid[i] == undefined) {
                        if (refname != "") {
                            let query4 = `insert into ref_detail (emp_id,ref_name,ref_contact,ref_relation)values('${id}','${refname}','${refcontact}','${refrelation}')`;
                            // console.log(query4);
                            conn.query(query4, (err) => {
                                if (err) throw err;
                            })
                        }
                    }
                    else {
                        let query4 = `update ref_detail set ref_name = '${refname}',ref_contact = '${refcontact}',ref_relation='${refrelation}' where emp_id = ${id} and ref_id = ${refid}`;

                        conn.query(query4, (err) => {
                            if (err) throw err;
                        })
                    }
                }


                for (let i = 0; i < req.body.nob.length; i++) {
                    nob = req.body.nob[i];
                    let eduid = req.body.eduid[i]
                    const passingyear = req.body.passingyear[i];
                    const percentage = req.body.percentage[i];

                    if (req.body.eduid[i] == undefined) {
                        if (nob != "") {
                            const edui = `insert into edu_detail (emp_id,nob,passing_yr,percentage) values ('${id}','${nob}','${passingyear}','${percentage}');`
                            conn.query(edui, (err) => {
                                if (err) throw err;
                            })
                        }
                    }
                    else {
                        const edu = `update edu_detail set nob='${nob}',passing_yr='${passingyear}',percentage='${percentage}' where emp_id = ${id} and edu_id = ${eduid};`

                        conn.query(edu, (err) => {
                            if (err) throw err;
                        })
                    }
                }

                let expid = req.body.expid

                for (let i = 0; i < req.body.companyname.length; i++) {

                    let companyname = req.body.companyname
                    let designation = req.body.designation;
                    let from = req.body.from;
                    let to = req.body.to;

                    if (req.body.expid[i] == undefined) {
                        if (companyname[i] != "") {
                            let query3i = `insert into work_exp (emp_id,comp_name,desg,dt_from,dt_to) values ('${id}','${companyname[i]}','${designation[i]}','${from[i]}','${to[i]}')`;
                            conn.query(query3i, (err) => {
                                if (err) throw err;
                            })
                        }
                    }
                    if (companyname[i] != "") {
                        let query3 = `update work_exp set comp_name = '${companyname[i]}',desg = '${designation[i]}' ,dt_from = '${from[i]}', dt_to ='${to[i]}' where emp_id = '${id}' and work_id = '${expid[i]}' `;
                        conn.query(query3, (err) => {
                            if (err) throw err;
                        })


                    }
                }

                let langid = req.body.languageid
                let lang = req.body.language
                let query6


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

                        if (langid[i] == undefined) {
                            let query6i = `insert into lang_detail (emp_id,lang_name,lang_read, lang_write, lang_speak) values ('${id}','${lang[i]}','${read}','${write}','${speak}');`
                            conn.query(query6i, (err) => {
                                if (err) throw err;
                            })
                        }
                        else {
                            query6 = `update lang_detail set lang_name = '${lang[i]}', lang_read = '${read}', lang_write='${write}',lang_speak='${speak}' where emp_id=${id} and lang_id = ${langid[i]}`
                            conn.query(query6, (err) => {
                                if (err) throw err;
                            })
                        }

                    }
                }


                let techlang;
                let techknown;

                let php = req.body.php;
                let oracle = req.body.oracle;
                let mysql = req.body.mysql;
                let laravel = req.body.laravel;

                // console.log(req.body.techlang.length);
                let techarr = [php, oracle, mysql, laravel]
                // console.log(techarr);
                for (let i = 0; i < req.body.techlang.length; i++) {

                    techlang = req.body.techlang[i]
                    techid = req.body.techid[i]
                    techknown = techarr[i]

                    if (techid == undefined) {
                        let query7i = `insert into tech_detail (emp_id,tech_name,tech_level) values ('${id}','${techlang}','${techknown}');`
                        conn.query(query7i, (err) => {
                            if (err) throw err;
                        })
                    }
                    else if (techknown != undefined) {
                        let query7 = `update tech_detail set tech_name = '${techlang}',tech_level = '${techknown}' where emp_id = '${id}' and tech_id = '${techid}'`
                        conn.query(query7, (err) => {
                            if (err) throw err;
                        })
                    }


                }



            } catch (error) {
                console.log("update error" + error)
            }
        }

        updateFun()
    }
}


module.exports = { handleJobform, displayJobFormData, createJobFormData, updatejobFormData }