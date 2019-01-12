let empleados = [
    {
        nomobre : "Adrian",
        id : 1
    },{
        nombre : "Ludmila",
        id : 2
    },{
        nombre : "Mailen",
        id : 3
    },{
        nombre : "Valentina",
        id : 4
    },{
        nombre : "Agostina",
        id : 5
    }
];

let salarios = [
    {
        id : 1,
        salario : 1000 
    },{
        id : 2,
        salario : 3000 
    },{
        id : 3,
        salario : 2000 
    },{
        id : 4,
        salario : 6000 
    },{
        id : 5,
        salario : 5000 
    }
];

let getEmpleado = (id, callback) => {

    /*let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    });*/

    // Esto es la simplificacion de lo comentado arriba
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if( !empleadoDB ) {
        callback(`No existe el empleado ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}


let getSalario = (empleado, callback) => {

    if(empleado) {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if( !salarioDB ) {
            callback(`No existe el salario para el emeplado ${ empleado.id}`);
        } else {
            let retorno = {
                nombre : empleado.nombre,
                salario : salarioDB.salario
            }
            callback(null, retorno);
        }
    } else {
        callback(`El usuario proporcionado es erroneo`);
    }

    
}


getEmpleado(2, (err, empleado) => {
        if( err ) {
            return console.log(err);
        } 
        console.log(empleado);

        getSalario(empleado, (err, asalariado) => {

            if(err) {
                return console.log(err);
            }
        
            console.log(asalariado);
        
        });
});


