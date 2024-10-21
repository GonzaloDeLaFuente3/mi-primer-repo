const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const method = req.method;

    //rutas y metodos 
    if(pathName ==='/' && method==='GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Acerca de nosotros\n');

    }else if(pathName==='/data' && method==='POST'){
        let body = '';
        //recolecctamos los datos enviados en el cuerpo de la solicitud 
        req.on('data', chunk =>{
            body += chunk.toString();
        });


        // una vez recibido todos los datos procesamos la inf
        req.on('end',()=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(`Datos recibidos: ${body}\n`);

        });

    }else{
        res.statusCode = 404;
        res.end('Ruta no encontrada\n');
    }
});

server.listen(port, hostname, ()=>{
    console.log(`El servidor se esta ejecuytando en http://${hostname}:${port}/`);
});

