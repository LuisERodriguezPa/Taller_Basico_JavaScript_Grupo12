const prompt = require('prompt-sync')();
function convertirMoneda(monto, monedaDestino){
    if (monedaDestino == "usd"){
        let dolares = monto / 3700;
        console.log(monto,"Pesos son ",dolares.toFixed(2),"Dolares")
    }else if(monedaDestino == "eur"){
        let euros = monto / 4200;
        console.log(monto,"Pesos son ",euros.toFixed(2),"euros")
    }
}
let monto = Number(prompt("Ingrese el monto en pesos colombianos: "))
let moneda = prompt("Ingrese la moneda a convertir usd o eur: ")
convertirMoneda(monto, moneda);