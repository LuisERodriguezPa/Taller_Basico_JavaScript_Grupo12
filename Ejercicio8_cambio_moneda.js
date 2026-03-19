function convertirMoneda(monto, monedaDestino){
    if (monedaDestino == "usd"){
        let dolares = monto / 3700;
        console.log(monto,"Pesos son ",dolares.toFixed(2),"Dolares")
    }else if(monedaDestino == "eur"){
        let euros = monto / 4200;
        console.log(monto,"Pesos son ",euros.toFixed(2),"euros")
    }
}

convertirMoneda(100000, "eur");