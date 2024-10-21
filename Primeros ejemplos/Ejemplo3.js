const fs = require('fs');
// Escribir en un archivo
const data = 'Este es un texto de ejemplo. \n' ;
fs.writeFile('ejemplo.txt', data, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido guardado.') ;
    // Leer el archivo recién creado
    fs.readFile('ejemplo.txt', 'utf8', (err, content) => {
        if (err) throw err;
        console. log( 'Contenido del archivo:');
        console. log(content) ;
}) ;
}) ;