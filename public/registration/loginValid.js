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


function emptyFun(id) {
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


    let flag 
function validation()
{
    let arr = ["id_username", "id_password"];

    arr.forEach(element => {
        
        if (document.querySelector("#" + element).value != "") {
            let rt = document.querySelector("#" + element).setAttribute("class", "form-control")

        }
    });


    let span = document.querySelectorAll('span')
    for (let i = 0; i < span.length; i++) {
        span[i].remove()
    } 
    flag = true 
    emailFun(id_username)
    emptyFun(id_password)
    
    if(flag == false)
    {
        console.log(false);
        return false;
    }
  
}