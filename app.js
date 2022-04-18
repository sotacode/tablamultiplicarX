const {crearTablaMultiplicar} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const colors = require('colors');

console.clear();

//console.log(argv);

crearTablaMultiplicar(argv.b, argv.l)
.then( nombreArchivo => console.log(nombreArchivo.rainbow," creado con exito."))
.catch( err => console.log(err));


