function retirarDinero(saldo, monto){
    if (monto > saldo){
        console.log("Fondos insuficiente")
    }else {
        saldo = saldo - monto;
        console.log("Nuevo saldo:",saldo)
    }
}
retirarDinero(500, 300)

