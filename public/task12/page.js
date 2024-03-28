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
        count++
    }
}

function prev() {
    let flag = validationFun()

    if (flag != false) {
        switch (count) {
            case 0:
                document.getElementById('edudetail').style.display = "none"
                document.getElementById('basicdetail').style.display = "block"
                break;

            case 1:
                document.getElementById('expdetail').style.display = "none"
                document.getElementById('edudetail').style.display = "block"
                break;

            case 2:
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
        count--
    }
}