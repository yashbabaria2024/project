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


let flag
function validation()
{
    let arr = ["id_firstname", "id_lastname", "id_designation", "id_email", "id_address", "id_contact", "id_city", "id_zipcode", "id_dateofbirth"];

    arr.forEach(element => {
        
        if (document.querySelector("#" + element).value != "") {
            let rt = document.querySelector("#" + element).setAttribute("class", "form-control is-valid")

        }
    });


    let span = document.querySelectorAll('span')
    for (let i = 0; i < span.length; i++) {
        span[i].remove()
    }

    flag = true

    MainFun(id_firstname)
    MainFun(id_lastname)
    MainFun(id_address)
    MainFun(id_city)
    MainFun(id_designation)
    contactFun(id_contact)
    emailFun(id_email)
    selectInput(id_state)
    selectInput(id_relationshipstatus)
    dateFun(id_dateofbirth)
    zipcodeFun(id_zipcode)

    if(flag == false)
    {
        console.log(false);
        return false;
    }
}