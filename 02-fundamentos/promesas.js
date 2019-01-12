let empleados = [
    {
        nombre : "Adrian",
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
    }
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if(!empleadoDB) {
            reject(`No existe el empleado ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioBD = salarios.find(salario => salario.id === empleado.id);

        if(!salarioBD) {
            reject(`No existe un salario para  el empleado ${ empleado.nombre }`);
        } else {
            resolve({
                empleado : empleado.nombre,
                salario : salarioBD.salario
            });
        }
    });
}


getEmpleado(3).then(empleado => {
    console.log(`Empleado en BD`, empleado);

    getSalario(empleado).then(asalariado => {
        console.log(`El emeplado ${ asalariado.empleado } tiene un salario de ${ asalariado.salario }`)
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
});