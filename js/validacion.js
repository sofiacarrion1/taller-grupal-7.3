
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}


function showAlertError(message) {
    var alertDanger = document.getElementById("alert-danger");
    alertDanger.querySelector('p').textContent = message;
    alertDanger.classList.add("show");
}


function hideAlerts() {
    document.getElementById("alert-success").classList.remove("show");
    document.getElementById("alert-danger").classList.remove("show");
}

document.getElementById('regBtn').addEventListener('click', function() {
    
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var terminos = document.getElementById('terminos').checked;

    
    hideAlerts();

    
    if (!terminos) {
        showAlertError('Debes aceptar los términos y condiciones del servicio.');
        return; 
    }

   
    if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError('Todos los campos son obligatorios.');
        return;
    }

    if (password1 !== password2) {
        showAlertError('Las contraseñas no coinciden.');
        return;
    }

    
    showAlertSuccess();

   
});
