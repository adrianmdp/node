let nombre = "Deadpool";
let real = "Wade Winston";

let a = nombre + ' ' + real;
let b = `${ nombre } ${ real }`;

console.log(a);

console.log(b);

console.log(a === b);

function getName() {
    return `${ b }`;
}

console.log(`El nombre es: ${ getName() }`);