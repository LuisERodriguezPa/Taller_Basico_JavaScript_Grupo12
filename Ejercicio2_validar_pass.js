const prompt = require('prompt-sync')();
function validarContrasena(contrasena){
    if (contrasena.length >= 8 && /\d/.test(contrasena) && /[A-Z]/.test(contrasena)){
        return true
    }
    else {
        return false
    }
}
let contrasena = prompt("Ingrese la contraseña: ")
console.log(validarContrasena(contrasena))
