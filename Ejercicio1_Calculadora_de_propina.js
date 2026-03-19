function calcularPropina(total, porcentaje){
    let montoFinal = 0
    montoFinal = total + (total*porcentaje/100);
    return montoFinal;
}

let total = 2000
let porcentaje = 20
console.log("El total a pagar con la propina es "+calcularPropina(total,porcentaje));
