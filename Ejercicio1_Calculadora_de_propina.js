const prompt = require('prompt-sync')();
function calcularPropina(total, porcentaje){
    let montoFinal = 0
    montoFinal = total + (total*porcentaje/100);
    return montoFinal;
}

let total = Number(prompt("Ingrese el total de la cuenta: "));
let porcentaje = Number(prompt("Ingrese el porcentaje de la propina: "));
console.log("El total a pagar con la propina es ",calcularPropina(total,porcentaje));
