import fs from 'fs';

//leer el archivo de manera asincronica 
fs.readFile('./data/example.txt', 'utf8', (err,data)=>{
    if(err) throw err;
    console.log('Contenido del archivo: ',data);
}) ;

// escribir en un archivo nuevo 
fs.writeFile('./data/newFile.txt', 'Contenido nuevo', (err)=>{
    if (err) throw err;
    console.log('El archivo fue creado y escrito ');
})


// Para renombrar un archivo 
fs.rename('./data/newFile.txt','./data/renamedFile.txt',(err)=>{
    if(err) throw err;
    console.log('El archivo fue renombrado');
})