function passwordFun(id,id2) {
    
   let psw = document.getElementById(`${id.id}`).value
     let cpsw = document.getElementById(`${id2.id}`).value


    if (psw.length < 8  ) {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Your Password Length should be 8 " 
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id2.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id2.id}`).after(error);
        flag = false

    }
    else if (psw != cpsw) {
        let error = document.createElement("span");
        error.setAttribute("class", "invalid-feedback");
        error.setAttribute("id", "remove")
        error.textContent = "Your Password or Confirm Password not match"
        document.getElementById(`${id2.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id.id}`).setAttribute("class", "form-control is-invalid")
        document.getElementById(`${id2.id}`).after(error);
       flag = false
    }
    else
    {
        flag = true
    }
}




let flag
function valid()
{
 
    arr = ["id_password","id_cpassword"]
    arr.forEach(element => {
        
        if (document.querySelector("#" + element).value != "") {
            let rt = document.querySelector("#" + element).setAttribute("class", "form-control is-valid")

        }
    });


    let span = document.querySelectorAll('span')
    for (let i = 0; i < span.length; i++) {
        span[i].remove()
    }

    passwordFun(id_password,id_cpassword);
    
    if(flag == false)
    {
        console.log(false);
        return false 
    }
}


