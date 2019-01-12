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

let getEmpleado = async (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if(!empleadoDB) {
        throw new Error(`No existe el empleado ${ id }`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async (empleado) => {
    let salarioBD = salarios.find(salario => salario.id === empleado.id);

    if(!salarioBD) {
        throw new Error(`No existe un salario para  el empleado ${ empleado.nombre }`);
    } else {
        return {
            id : empleado.id,
            empleado : empleado.nombre,
            salario : salarioBD.salario
        };
    }
}

let getInformacion = async ( id ) => {

    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return `${empleado.nombre} tiene un salario de $${salario.salario}.`;
    
};

getInformacion(1)
    .then( mje =>  console.log(mje) )
    .catch( err => console.log(err) );