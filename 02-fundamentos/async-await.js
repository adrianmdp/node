/**
 * 
 */

let getNombre = async() => {

    setTimeout(() => {
        return "Adrián";
    }, 3000);
        

   
}

let getNombre2 = () => {
    
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            resolve('Adrián');
        }, 3000);
    });
   
}

let saludo = async() => {
    let nombre = await getNombre2();
        
    return nombre;

}

saludo().then(nombre => {
    console.log(`El nombre devuelto es ${nombre}`);
    
});

// getNombre2().then( nombre => {
//     console.log(nombre);
// })
// .catch( err => {
//     console.log( err );
// });
