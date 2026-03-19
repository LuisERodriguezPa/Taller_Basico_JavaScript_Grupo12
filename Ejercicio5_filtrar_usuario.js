function filtrarUsuario(usuario, edadMinima){
    let usuario_cumplen_edad = []
    for (let i in usuario){
        if (usuario[i].edad >= edadMinima){
            usuario_cumplen_edad.push(usuario[i])
        }
    }
    return usuario_cumplen_edad
}

