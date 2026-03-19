function buscarProducto(nombre2, inventario){
    
    for (let i in inventario){
            
        if (nombre2 == inventario[i].nombre){
            
            return inventario[i]["nombre"] 
        }
    }
    return null
   
}
const inventario = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Zapatos", precio: 50 }
]

console.log(buscarProducto("Camisa",inventario));
