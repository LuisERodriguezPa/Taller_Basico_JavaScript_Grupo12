const prompt = require('prompt-sync')();
function contarPalabras(texto){
    let cantidad_palabras = texto.split(" ")
    return cantidad_palabras.length
}
let texto = prompt("Ingrese el estring: ");
console.log(contarPalabras(texto))
