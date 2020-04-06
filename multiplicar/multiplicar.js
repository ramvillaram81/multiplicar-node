const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite=10) => {

    return new Promise( (resolve, reject) => {

        if(!Number(base)){
            reject(`No es un número: ${base}`);
            return;
        }

        let data='';

        for(let i=0; i<=limite; i++){
            data+=`${i}*${base}=${i*base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
            resolve(`tabla-${base}-al-${limite}.txt`);

        });

    });

}

let listarTabla = (base,limite=10)=>{

    console.log('=========='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('=========='.green);

    for(let i=0; i<=limite; i++){
        console.log(`${i}*${base}=${i*base}`);
    }

}


module.exports={
    crearArchivo,
    listarTabla
}
