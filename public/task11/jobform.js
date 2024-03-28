function MainFun(id) {
    let nm = document.getElementById(`${id.id}`).value
    var regex = /^[a-zA-Z ]{2,30}$/
    if (nm == "") {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    }
    else if (!nm.match(regex)) {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter valid " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    }
}

function contactFun(id) {
    let nm = document.getElementById(`${id.id}`).value

    var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (nm == "") {

        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false

    }
    else if (!nm.match(regex)) {

        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter valid " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    }
}


function emptyInput(id) {
    let nm = document.getElementById(`${id.id}`).value
    if (nm == "") {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    }
}

function selectInput(id) {
    let nm = document.getElementById(`${id.id}`).value
    if (nm == "" || nm == "select") {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please Select " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    }
   
}


function emailFun(id) {
    let nm = document.getElementById(`${id.id}`).value
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (nm == "") {

        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false

    }
    else if (!nm.match(regex)) {

        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter valid " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    }
}

function dateFun(id) {
      let nm = document.getElementById(`${id.id}`).value
   var regex = /^\d{4}-\d{2}-\d{2}$/;;
    if (nm == "") {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false

    }
    else if (!nm.match(regex)) {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter valid formate" + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    }

}

function percentageFun(id) {
   
    let nm = document.getElementById(`${id.id}`).value

    if (nm == "") {  
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false

    }
    else if ((nm >= 35 && nm <= 100) == false) {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter valid formate" + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    }
}

function passingyr(id) {

    let nm = document.getElementById(`${id.id}`).value

    if (nm == "") {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false

    }
    else if ((nm >= 1990 && nm <= 2024) == false) {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter valid formate" + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    }
}

function zipcodeFun() {
   let validregex = /^[1-9][0-9]{5}$/;
    let zipcode = document.myform.zipcode.value
    if (zipcode == "") {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback")
        error.textContent = "Please enter Zipcode"
        document.getElementById("id_zipcode").setAttribute("class", "form-control is-invalid")
        document.getElementById("id_zipcode").focus()
        document.getElementById("id_zipcode").after(error);
        flag = false
    }
    else if (!zipcode.match(validregex)) {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback")
        error.textContent = "Please enter valid Zipcode"
        document.getElementById("id_zipcode").setAttribute("class", "form-control is-invalid")
        document.getElementById("id_zipcode").focus()
        document.getElementById("id_zipcode").after(error);
        flag = false
    }

}

// education Detail

function educationDetailFun() {
    let ssc = document.getElementById("id_sscnob").value
    let hsc = document.getElementById("id_hscnob").value
    let becourse = document.getElementById("id_becoursename").value
    let mecourse = document.getElementById("id_mecoursename").value

    let sscpyr = document.getElementById("id_sscpassingyear").value
    let hscpyr = document.getElementById("id_hscpassingyear").value
    let bepyr = document.getElementById("id_bepassingyear").value
    let mepyr = document.getElementById("id_mepassingyear").value

    let sscpr = document.getElementById("id_sscpercentage").value
    let hscpr = document.getElementById("id_hscpercentage").value
    let bepr = document.getElementById("id_bepercentage").value
    let mepr = document.getElementById("id_mepercentage").value

    if (ssc != "") {
        passingyr(id_sscpassingyear)
        percentageFun(id_sscpercentage)
    }
    if (sscpyr != "") {
        selectInput(id_sscnob)
        percentageFun(id_sscpercentage)
    }
    if (sscpr != "") {
        selectInput(id_sscnob)
        passingyr(id_sscpassingyear)
    }

    if (hsc != "") {
        passingyr(id_hscpassingyear)
        percentageFun(id_hscpercentage)
    }
    if (hscpyr != "") {
        selectInput(id_hscnob)
        percentageFun(id_hscpercentage)
    }
    if (hscpr != "") {
        selectInput(id_hscnob)
        passingyr(id_hscpassingyear)
    }

    if (becourse != "") {
        percentageFun(id_bepercentage)
        passingyr(id_bepassingyear)
    }
    if (bepyr != "") {
        selectInput(id_becoursename)
        percentageFun(id_bepercentage)
    }
    if (bepr != "") {
        selectInput(id_becoursename)
        passingyr(id_bepassingyear)
    }

    if (mecourse != "") {
        percentageFun(id_mepercentage)
        passingyr(id_mepassingyear)
    }
    if (mepyr != "") {
        selectInput(id_mecoursename)
        percentageFun(id_mepercentage)
    }
    if (mepr != "") {
        selectInput(id_mecoursename)
        passingyr(id_mepassingyear)
    }

}

// Work Experience

function workexpFun() {
    let comp1 = document.getElementById("id_companyname1").value
    let comp2 = document.getElementById("id_companyname2").value
    let comp3 = document.getElementById("id_companyname3").value

    let designation1 = document.getElementById("id_desg1").value
    let designation2 = document.getElementById("id_desg2").value
    let designation3 = document.getElementById("id_desg3").value

    let from1 = document.getElementById("id_from1").value
    let from2 = document.getElementById("id_from2").value
    let from3 = document.getElementById("id_from3").value

    let to1 = document.getElementById("id_to1").value
    let to2 = document.getElementById("id_to2").value
    let to3 = document.getElementById("id_to3").value

    if (comp1 != "") {
        emptyInput(id_desg1)
        dateFun(id_from1)
        dateFun(id_to1)

    }
    if (comp2 != "") {
        emptyInput(id_desg2)
        dateFun(id_from2)
        dateFun(id_to2)

    }
    if (comp3 != "") {
        emptyInput(id_desg3)
        dateFun(id_from3)
        dateFun(id_to3)
    }

    if (designation1 != "") {
        emptyInput(id_companyname1)
        dateFun(id_from1)
        dateFun(id_to1)
    }
    if (designation2 != "") {
        emptyInput(id_companyname2)
        dateFun(id_from2)
        dateFun(id_to2)
    }
    if (designation3 != "") {
        emptyInput(id_companyname3)
        dateFun(id_from3)
        dateFun(id_to3)
    }

    if (from1 != "") {
        emptyInput(id_desg1)
        emptyInput(id_companyname1)
        dateFun(id_to1)
    }

    if (from2 != "") {
        emptyInput(id_desg2)
        emptyInput(id_companyname2)
        dateFun(id_to2)
    }

    if (from3 != "") {
        emptyInput(id_desg3)
        emptyInput(id_companyname3)
        dateFun(id_to3)
    }

    if (to1 != "") {
        emptyInput(id_desg1)
        emptyInput(id_companyname1)
        dateFun(id_from1)
    }

    if (to2 != "") {
        emptyInput(id_desg2)
        emptyInput(id_companyname2)
        dateFun(id_from2)
    }

    if (to3 != "") {
        emptyInput(id_desg3)
        emptyInput(id_companyname3)
        dateFun(id_from3)
    }

}


function checkvalue(lang, error, name) {
    let arr = []
    if (lang.checked) {
        name.forEach(element => {

            if (element.checked) {
                arr.push(element)
            }
            if (arr.length === 0) {
                error.innerHTML = "Please select any one skill"
                flag = false
            }
            else {
                error.innerHTML = " "
                flag = true
            }
        })
    }

}

function refFun() {

    ref1 = document.querySelector("#id_refname1").value
    ref2 = document.querySelector("#id_refname2").value
    ref3 = document.querySelector("#id_refname3").value

    refnum1 = document.querySelector("#id_refContact1").value
    refnum2 = document.querySelector("#id_refContact2").value
    refnum3 = document.querySelector("#id_refContact3").value

    refrel1 = document.querySelector("#id_refrelation1").value
    refrel2 = document.querySelector("#id_refrelation2").value
    refrel3 = document.querySelector("#id_refrelation3").value

    if (ref1 != "") {
        contactFun(id_refContact1)
        MainFun(id_refrelation1)
    }
    if (ref2 != "") {
        contactFun(id_refContact2)
        MainFun(id_refrelation2)
    }
    if (ref3 != "") {
        contactFun(id_refContact3)
        MainFun(id_refrelation3)
    }

    if (refnum1 != "") {
        MainFun(id_refname1)
        MainFun(id_refrelation1)
    }
    if (refnum2 != "") {
        MainFun(id_refname2)
        MainFun(id_refrelation2)
    }
    if (refnum3 != "") {
        MainFun(id_refname3)
        MainFun(id_refrelation3)
    }

    if (refrel1 != "") {
        contactFun(id_refContact1)
        MainFun(id_refname1)
    }
    if (refrel2 != "") {
        contactFun(id_refContact2)
        MainFun(id_refname2)
    }
    if (refrel3 != "") {
        contactFun(id_refContact3)
        MainFun(id_refname3)
    }
}






// function techknown() {
//     document.querySelector('#id_PHP').addEventListener("change", () => {
//         event.currentTarget.checked

//         if (event.currentTarget.checked) {
//             document.querySelector("#id_BeginerPHP").disabled = false;
//             document.querySelector("#id_MideatorPHP").disabled = false;
//             document.querySelector("#id_ExpertPHP").disabled = false;
//         }
//         else {
//             document.querySelector("#id_BeginerPHP").disabled = true;
//             document.querySelector("#id_MideatorPHP").disabled = true;
//             document.querySelector("#id_ExpertPHP").disabled = true;
//             document.querySelector("#id_BeginerPHP").checked = false
//             document.querySelector("#id_MideatorPHP").checked = false
//             document.querySelector("#id_ExpertPHP").checked = false
//         }
//     })

//     document.querySelector('#id_Mysql').addEventListener("change", () => {
//         event.currentTarget.checked

//         if (event.currentTarget.checked) {
//             document.querySelector("#id_BeginerMysql").disabled = false;
//             document.querySelector("#id_MideatorMysql").disabled = false;
//             document.querySelector("#id_ExpertMysql").disabled = false;
//         }
//         else {
//             document.querySelector("#id_BeginerMysql").disabled = true;
//             document.querySelector("#id_MideatorMysql").disabled = true;
//             document.querySelector("#id_ExpertMysql").disabled = true;
//             document.querySelector("#id_BeginerMysql").checked = false
//             document.querySelector("#id_MideatorMysql").checked = false
//             document.querySelector("#id_ExpertMysql").checked = false
//         }
//     })

//     document.querySelector('#id_laravel').addEventListener("change", () => {
//         event.currentTarget.checked

//         if (event.currentTarget.checked) {
//             document.querySelector("#id_BeginerLaravel").disabled = false;
//             document.querySelector("#id_MideatorLaravel").disabled = false;
//             document.querySelector("#id_ExpertLaravel").disabled = false;
//         }
//         else {
//             document.querySelector("#id_BeginerLaravel").disabled = true;
//             document.querySelector("#id_MideatorLaravel").disabled = true;
//             document.querySelector("#id_ExpertLaravel").disabled = true;
//             document.querySelector("#id_BeginerLaravel").checked = false
//             document.querySelector("#id_MideatorLaravel").checked = false
//             document.querySelector("#id_ExpertLaravel").checked = false
//         }
//     })

//     document.querySelector('#id_Oracle').addEventListener("change", () => {
//         event.currentTarget.checked

//         if (event.currentTarget.checked) {
//             document.querySelector("#id_BeginerOracle").disabled = false;
//             document.querySelector("#id_MideatorOracle").disabled = false;
//             document.querySelector("#id_ExpertOracle").disabled = false;
//         }
//         else {
//             document.querySelector("#id_BeginerOracle").disabled = true;
//             document.querySelector("#id_MideatorOracle").disabled = true;
//             document.querySelector("#id_ExpertOracle").disabled = true;
//             document.querySelector("#id_BeginerOracle").checked = false
//             document.querySelector("#id_MideatorOracle").checked = false
//             document.querySelector("#id_ExpertOracle").checked = false
//         }
//     })
// }

// techknown()







function add2Fun() {
    let add2 = document.getElementById("id_address2").value
    if (add2 != "") {
        document.getElementById("id_address2").setAttribute("class", "form-control is-valid")
    }
}

function lang() {
    let langhindi = document.querySelectorAll('.langknownhindi')
   
    let langguj = document.querySelectorAll('.langknownguj')
    let langeng = document.querySelectorAll('.langknownenglish')
    let hindiid = document.getElementById('id_hindi')
    let engid = document.getElementById('id_english')
    let gujid = document.getElementById('id_gujarati')

 const a = () => langhindi.forEach(ele => {
        if(ele.checked == true && hindiid.checked == true)
        {langvalid()}
        return true
    });

    const b = () => langguj.forEach(ele => {
        if(ele.checked == true && gujid.checked == true)
      {langvalid()}
      return true
    });

    const c = () =>  langeng.forEach(ele => {
        if(ele.checked == true && engid.checked == true)
        {langvalid()}
        return true
        });

  
   return false
}

function langvalid() {

    let hindiid = document.getElementById('id_hindi')
    let hindiknown = document.querySelectorAll('.langknownhindi')
    let engid = document.getElementById('id_english')
    let engknown = document.querySelectorAll('.langknownenglish')
    let gujid = document.getElementById('id_gujarati')
    let gujknown = document.querySelectorAll('.langknownguj')
    console.log(hindiknown);
    console.log(gujknown);
    console.log(engknown);
    let error1 = document.getElementById("id_language1")
    let error2 = document.getElementById("id_language2")
    let error3 = document.getElementById("id_language3")

    let phpid = document.getElementById('id_PHP')
    let phpknown = document.getElementsByName('php[]')
    let mysqlid = document.getElementById('id_Mysql')
    let mysqlknown = document.getElementsByName('mysql[]')
    let laravelid = document.getElementById('id_laravel')
    let laravelknown = document.getElementsByName('laravel[]')
    let oracleid = document.getElementById('id_Oracle')
    let oracleknown = document.getElementsByName('oracle[]')
    let error4 = document.getElementById("id_tech1")
    let error5 = document.getElementById("id_tech2")
    let error6 = document.getElementById("id_tech3")
    let error7 = document.getElementById("id_tech4")


    if (hindiid.checked == true) {
        checkvalue(hindiid, error1, hindiknown)

    }
    if (gujid.checked == true) {
        checkvalue(gujid, error3, gujknown)
    }
    if (engid.checked == true) {
        checkvalue(engid, error2, engknown)
    }
    if (phpid.checked == true) {
        checkvalue(phpid, error4, phpknown)
    }
    if (mysqlid.checked == true) {
        checkvalue(mysqlid, error5, mysqlknown)
    }
    if (laravelid.checked == true) {
        checkvalue(laravelid, error6, laravelknown)
    }
    if (oracleid.checked == true) {
        checkvalue(oracleid, error7, oracleknown)

    }
   return true
}


let flag
function validationFun() {

let arr = ["id_firstname", "id_lastname", "id_currentCTC", "id_expecedCTC", "id_designation", "id_email", "id_address", "id_contact", "id_city", "id_zipcode", "id_dateofbirth", "id_sscnob", "id_hscnob", "id_sscpassingyear", "id_hscpassingyear", "id_bepassingyear", "id_mepassingyear", "id_sscpercentage", "id_hscpercentage", , "id_bepercentage", "id_mepercentage", "id_becoursename", "id_desg1", "id_desg2", "id_desg3", "id_from1", "id_from2", "id_from3", "id_to1", "id_to2", "id_to3", "id_refContact1", "id_refContact2", "id_refContact3", "id_refrelation1", "id_refrelation2", "id_refrelation3", "id_noticeperiod", "id_department", "id_pref_location", "id_relationshipstatus", "id_state", "id_companyname1", "id_companyname2", "id_companyname3", "id_refname1", "id_refname2", "id_refname3", "id_mecoursename"];
   
arr.forEach(element => {
    console.log(document.querySelector("#" + element).value);
    if (document.querySelector("#" + element).value != "" ) {
        let rt = document.querySelector("#" + element).setAttribute("class", "form-control is-valid")

    }
});

let span = document.querySelectorAll('span')
for (let i = 0; i < span.length; i++) {
    span[i].remove()
}


// lang()
MainFun(id_firstname)
MainFun(id_lastname)
MainFun(id_designation)
MainFun(id_city)
emailFun(id_email)
emptyInput(id_address)
emptyInput(id_currentCTC)
emptyInput(id_expecedCTC)
emptyInput(id_noticeperiod)
contactFun(id_contact)
zipcodeFun()
dateFun(id_dateofbirth)
educationDetailFun()
add2Fun()
workexpFun()
refFun()
selectInput(id_department)
selectInput(id_state)
selectInput(id_pref_location)
selectInput(id_relationshipstatus)

    if (flag == false) {
        console.log(flag, ":::::::::::::");
        return false;
    }

}







 

