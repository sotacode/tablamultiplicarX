const fs = require('fs');
const colors = require('colors');

const crearTablaMultiplicar = async (base = 5, listar = false)=>{
    try {
        let salida=`${"======================".green}
    Tabla del ${base}
${"======================".green}\n`;
        for (let i = 1; i < 11; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar) console.log(salida);
        fs.writeFileSync(`./out/tabladel${base}.txt`,salida);
        return `tabladel${base}.txt`;
    } catch (err) {
        throw err;   
    }
}

module.exports =  {
    crearTablaMultiplicar
}