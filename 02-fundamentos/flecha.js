//let saludar = (a) => a;

let saludar = () => 'Hola mundo';

console.log(saludar('Hola Mundo'));

let saludar2 = nombre => {
    return `Hola ${ nombre }`;
}
let saludar3 = nombre => `Hola ${ nombre }`;

console.log(saludar2('Adrian'));
console.log(saludar3('Jorge'));