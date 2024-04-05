
function MainFun(id) {
    let nm = document.getElementById(`${id.id}`).value
    let regex = /^[a-zA-Z ]{2,30}$/
    if (nm == "") {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false
    } else if (!nm.match(regex)) {
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

    let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
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
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
   let regex = /^\d{4}-\d{2}-\d{2}$/;;
    if (nm == "") {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Please enter " + id.name
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).focus()
        document.getElementById(`${id.id}`).after(error);
        flag = false

    } else if (!nm.match(regex)) {
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
        selectInput(id_sscnob)
        passingyr(id_sscpassingyear)
        percentageFun(id_sscpercentage)
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

        passingyr(id_hscpassingyear)
        percentageFun(id_hscpercentage)
        selectInput(id_hscnob)
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
        percentageFun(id_bepercentage)
        passingyr(id_bepassingyear)
        selectInput(id_becoursename) 
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

    if (comp1 != "" ) {
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


// function checkvalue(lang, error, name) {
//     if (lang.checked) {
//         let arr = []
//         name.forEach(element => {

//             if (element.checked) {
//                 arr.push(element)
//             }
//             if (arr.length === 0) {
//                 error.innerHTML = "Please select any one skill"
//                 flag = false
//             }
//             else {
//                 error.innerHTML = " "
//                 flag = true
//             }
//         })
       
//     } 
// }

// function checklang(name, error, lang) {
//     let arr = []
 
//     name.forEach(element => {
//         if (element.checked) {
           
//             if (!lang.checked)
//            {
//             error.innerHTML = "Please select skill"
//             flag = false
//            }
//            else {
//             error.innerHTML = " " 
            
//         }
//         } 
//     })
//     if(flag != false)
//     {
//         flag = true
//     }   
// }


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


function prefFun(){

    let current_ctc = document.getElementById('id_currentCTC').value
    let expectedctc = document.getElementById('id_expecedCTC').value
    let noticeperiod = document.getElementById('id_noticeperiod').value
    let preflocation = document.getElementById('id_pref_location').value


    if(current_ctc != ""){
        emptyInput(id_expecedCTC)
        emptyInput(id_noticeperiod)
        selectInput(id_department)
        selectInput(id_pref_location)
    }
    if(expectedctc != ""){
        emptyInput(id_currentCTC)
        emptyInput(id_noticeperiod)
        selectInput(id_department)
        selectInput(id_pref_location)
    }
    if(noticeperiod != ""){
        emptyInput(id_currentCTC)
        emptyInput(id_expecedCTC)
        selectInput(id_department)
        selectInput(id_pref_location)
    }
    if(preflocation != "select"){
        emptyInput(id_currentCTC)
        emptyInput(id_expecedCTC)
        selectInput(id_department)
        emptyInput(id_noticeperiod)
    }
}


let flag

const error4 = document.getElementById('id_tech1')
const error5 = document.getElementById('id_tech2')
const error6 = document.getElementById('id_tech3')
const error7 = document.getElementById('id_tech4')
const language = document.querySelectorAll('.language')
    const hindiknown = document.querySelectorAll('.langknownhindi')
    const error1 = document.getElementById('id_language1')

        const englishknown = document.querySelectorAll('.langknownenglish')
          
    const error2 = document.getElementById('id_language2')
const error3 = document.getElementById('id_language3')
const gujknown = document.querySelectorAll('.langknownguj')

const phpknown = document.getElementsByName('php[]')
const mysqlknown = document.getElementsByName('mysql[]')
const oracleknown = document.getElementsByName('oracle[]')
const laravelknown = document.getElementsByName('laravel[]')

let tech = document.querySelectorAll('.tech_valid')

function validationFun() {

let arr = ["id_firstname", "id_lastname", "id_currentCTC", "id_expecedCTC", "id_designation", "id_email", "id_address", "id_contact", "id_city", "id_zipcode", "id_dateofbirth", "id_sscnob", "id_hscnob", "id_sscpassingyear", "id_hscpassingyear", "id_bepassingyear", "id_mepassingyear", "id_sscpercentage", "id_hscpercentage", , "id_bepercentage", "id_mepercentage", "id_becoursename", "id_desg1", "id_desg2", "id_desg3", "id_from1", "id_from2", "id_from3", "id_to1", "id_to2", "id_to3", "id_refContact1", "id_refContact2", "id_refContact3", "id_refrelation1", "id_refrelation2", "id_refrelation3", "id_noticeperiod", "id_department", "id_pref_location", "id_relationshipstatus", "id_state", "id_companyname1", "id_companyname2", "id_companyname3", "id_refname1", "id_refname2", "id_refname3", "id_mecoursename"];
   
arr.forEach(element => {
   
    if (document.querySelector("#" + element).value != "" ) {
       document.querySelector("#" + element).setAttribute("class", "form-control")
    }
});

let span = document.querySelectorAll('span')
for (let i = 0; i < span.length; i++) {
    span[i].remove()
}
flag = true
    MainFun(id_firstname)   
    MainFun(id_lastname)
    MainFun(id_designation)
    MainFun(id_city)
    emailFun(id_email)
    emptyInput(id_address)
    contactFun(id_contact)
    zipcodeFun()
    dateFun(id_dateofbirth)
    educationDetailFun()
    workexpFun()
    refFun()
    selectInput(id_state)
    selectInput(id_relationshipstatus)
    prefFun()

 
// checkvalue(language[0],error1,hindiknown)
// checkvalue(language[1],error2,englishknown)
// checkvalue(language[2],error3,gujknown)
// checkvalue(tech[0],error4,phpknown)
// checkvalue(tech[1],error5,mysqlknown)
// checkvalue(tech[2],error6,oracleknown)
// checkvalue(tech[3],error7,laravelknown)

// checklang(hindiknown,error1,language[0])
// checklang(englishknown,error2,language[1])
// checklang(gujknown,error3,language[2])
// checklang(phpknown,error4,tech[0])
// checklang(mysqlknown,error5,tech[1])
// checklang(oracleknown,error6,tech[2])
// checklang(laravelknown,error7,tech[3])


console.log(flag);

    if (flag == false)
     {

        return false;
    }
   
       
    
}








 


