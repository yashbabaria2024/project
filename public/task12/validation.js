document.getElementById('edudetail').style.display = "none"
document.getElementById('langknown').style.display = "none"
document.getElementById('techknown').style.display = "none"
document.getElementById('refdetail').style.display = "none"
document.getElementById('prefdetail').style.display = "none"
document.getElementById('expdetail').style.display = "none"

let count = 0;

function next() {
    let flag = validationFun()

    if (flag != false) {
        count++
       switch (count) {
            case 0:
                document.getElementById('edudetail').style.display = "none"
                document.getElementById('basicdetail').style.display = "block"
                break;

            case 1:
                document.getElementById('basicdetail').style.display = "none"
                document.getElementById('edudetail').style.display = "block"
                break;

            case 2:
                document.getElementById('edudetail').style.display = "none"
                document.getElementById('expdetail').style.display = "block"
                break;

            case 3:
                document.getElementById('expdetail').style.display = "none"
                document.getElementById('langknown').style.display = "block"
                break;
            case 4:
                document.getElementById('langknown').style.display = "none"
                document.getElementById('techknown').style.display = "block"
                break;

            case 5:
                document.getElementById('techknown').style.display = "none"
                document.getElementById('refdetail').style.display = "block"
                break;

            case 6:
                document.getElementById('refdetail').style.display = "none"
                document.getElementById('prefdetail').style.display = "block"
                break;
        }
       
    }
}

function prev() {
    let flag = validationFun()

    if (flag != false) {
        count--
        switch (count) {
            case 0:
                console.log(count);
                document.getElementById('edudetail').style.display = "none"
                document.getElementById('basicdetail').style.display = "block"
                break;

            case 1:
                console.log(count);
                document.getElementById('expdetail').style.display = "none"
                document.getElementById('edudetail').style.display = "block"
                break;

            case 2:
                console.log(count);
                document.getElementById('langknown').style.display = "none"
                document.getElementById('expdetail').style.display = "block"
                break;
            case 3:

                document.getElementById('techknown').style.display = "none"
                document.getElementById('langknown').style.display = "block"
                break;

            case 4:
                document.getElementById('refdetail').style.display = "none"
                document.getElementById('techknown').style.display = "block"
                break;

            case 5:
                document.getElementById('prefdetail').style.display = "none"
                document.getElementById('refdetail').style.display = "block"
                break;
        }
        
    }
}


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
    else
    {
        flag = true
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

function add2Fun() {
    let add2 = document.getElementById("id_address2").value
    if (add2 != "") {
        document.getElementById("id_address2").setAttribute("class", "form-control ")
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




let flag

function validationFun() {

    let arr = ["id_firstname", "id_lastname", "id_designation", "id_email", "id_address", "id_contact", "id_city", "id_zipcode", "id_dateofbirth", "id_sscnob", "id_hscnob", "id_sscpassingyear", "id_hscpassingyear", "id_bepassingyear", "id_mepassingyear", "id_sscpercentage", "id_hscpercentage", , "id_bepercentage", "id_mepercentage", "id_becoursename", "id_desg1", "id_desg2", "id_desg3", "id_from1", "id_from2", "id_from3", "id_to1", "id_to2", "id_to3", "id_refContact1", "id_refContact2", "id_refContact3", "id_refrelation1", "id_refrelation2", "id_refrelation3", "id_relationshipstatus", "id_state", "id_companyname1", "id_companyname2", "id_companyname3", "id_refname1", "id_refname2", "id_refname3", "id_mecoursename"];

    arr.forEach(element => {
        
        if (document.querySelector("#" + element).value != "") {
            let rt = document.querySelector("#" + element).setAttribute("class", "form-control")

        }
    });

    let span = document.querySelectorAll('span')
    for (let i = 0; i < span.length; i++) {
        span[i].remove()
    }

  

    MainFun(id_firstname)
    MainFun(id_lastname)
    MainFun(id_designation)
    MainFun(id_city)
    emailFun(id_email)
    emptyInput(id_address)
    contactFun(id_contact)
    zipcodeFun()
    selectInput(id_state)
    dateFun(id_dateofbirth)
    educationDetailFun()
    add2Fun()
    workexpFun()
    refFun()
    selectInput(id_relationshipstatus)
    console.log(flag);
    if (flag == false) {
      
        return false;
    }
    else
    {
        return true
    }
    
   
}










