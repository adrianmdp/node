let getUserById = (id, callback) => {

    let user = {
        nombre : "Adrian",
        id // Cuando el valor es igual a la clave no hace falta especificarlo.
    }

    if(id === 20) {
        callback(`El usuario con id: ${ id } no existe en la base de datos` );
    } else {
        callback(null, user);
    }
}

getUserById(0, (err, user) => {

    if(err) {
        return console.log(err);
    }
    console.log("Usuario de base de datos", user);
});