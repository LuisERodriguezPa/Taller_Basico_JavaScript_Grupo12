function contarPalabras(texto){
    let cantidad_palabras = texto.split(" ")
    return cantidad_palabras.length
}
let texto = "Hola mundo desde javascript"
console.log(contarPalabras(texto))
