let deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder: 'Regeneración',
    getNombre : function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`;
    }
}

console.log(deadpool.getNombre());

let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;

// Destructuración
let { nombre : nom, apellido : ape, poder : pod } = deadpool;

console.log(`${ nom } ${ ape } ${ pod }`);
console.log(nom, ape, pod);