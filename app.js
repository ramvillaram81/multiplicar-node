const argv=require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; // Los comandos estan es la posicon _

switch(comando){

    case 'listar':
        listarTabla(argv.base,argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base,argv.limite)
            .then(archivo=>console.log(`Archivo creado: `,colors.cyan(archivo)))
            .catch(e=>console.log(e));     
        break;

    default:
        console.log('COMANDO NO VALIDO'); break;
}


//let parametro=argv[2];
//let base=parametro.split('=')[1];

//let base='1';

