import path from 'path';

//definimos una rita de archivo de ejemplo 
const filePath = './data/example.txt';

//obtenemos el directorio base 
const dirName = path.dirname(filePath);
console.log('Directorio base: ', dirName);

//obtenemos el nombre del archivo sin extension 
const baseName = path.basename(filePath,'.txt');
console.log('Nombre del archivo: ', baseName);

//obtener la extension del archivo 
const extName = path.extname(filePath);
console.log('Entension del archivo es: ', extName);

//Crear una ruta unida 
const newPath = path.join('/user','docs','newFile.txt');
console.log('Nueva ruta :', newPath);