function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function checkPassword() {
    let password1 = document.getElementById("password1").value 
    let password2 = document.getElementById("password2").value 
    if (password1 != password2) {
        alert ("Las contraseñas no coinciden")

    } else {
        alert ("Las contraseñas coinciden")
    }
}