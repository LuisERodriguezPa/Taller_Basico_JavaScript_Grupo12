const prompt = require('prompt-sync')();
function retirarDinero(saldo, monto){
    if (monto > saldo){
        console.log("Fondos insuficiente")
    }else {
        saldo = saldo - monto;
        console.log("Nuevo saldo:",saldo)
    }
}
let saldo = Number(prompt("Ingrese el saldo: "));
let monto = Number(prompt("Ingrese el monto a retirar: "));
retirarDinero(saldo, monto)

