const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar.'
                })
                .option('l',{
                    alias: 'list',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola.'
                })
                .check((argv, options)=>{
                    console.log('Yargs:',argv);
                    console.log('Options:',options);
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;