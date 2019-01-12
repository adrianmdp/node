
let { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'asd';

crearArchivo(base)
    .then( archivo => console.log( archivo ))
    .catch( err => console.log( err ) );