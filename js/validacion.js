function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



function comprobarClave() {
    let clave1 = document.getElementById("password1").value
    let clave2 = document.getElementById("password2").value

    if ( password1 == password2) {
        if ( == password2) {
       alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo")
    } else {
       alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo")
    }
}}