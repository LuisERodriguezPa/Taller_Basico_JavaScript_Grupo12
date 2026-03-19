function filtrarUsuario(usuario, edadMinima){
    let usuario_cumplen_edad = []
    for (let i in usuario){
        if (usuario[i].edad >= edadMinima){
            usuario_cumplen_edad.push(usuario[i].nombre)
        }
    }
    return usuario_cumplen_edad
}
let usuarios = [
    {nombre: "Ana", edad: 25},
    {nombre: "Luis", edad:18},
    {nombre:"lucas", edad:20},
    {nombre:"Julian", edad: 19}
]
console.log(filtrarUsuario(usuarios, 20))
