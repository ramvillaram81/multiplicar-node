const argv=require('yargs')
            .command('listar','Imprime en consola la tabla de multiplicar',{
                base:{
                    demand:true,
                    alias:'b'
                },
                limite:{
                    alias:'l',
                    default:10
                }
            })
            .command('crear','Crea un archivo de multimplicar con un limite',{
                base:{
                    demand:true,
                    alias:'b'
                },
                limite:{
                    alias:'l',
                    default:10
                }
            })
            .help()
            .argv;

module.exports={
    argv
}