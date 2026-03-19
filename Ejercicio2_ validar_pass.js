function validarContrasena(contrasena){
    if (contrasena.length >= 8 && /\d/.test(contrasena) && /[A-Z]/.test(contrasena)){
        return true
    }
    else {
        return false
    }
}
console.log(validarContrasena("h5ola mundo 8 "))
