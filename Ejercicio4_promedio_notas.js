function calcularPromedio(notas){
    let suma = 0
    let promedio = 0
    for (let i in notas){
        suma = suma + notas[i]
    }
    promedio = suma/notas.length
    return promedio.toFixed(2)
}
let notas = [2,3,4,5,6,7]
console.log("El promedio es ",calcularPromedio(notas))