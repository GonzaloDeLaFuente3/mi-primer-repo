import express from 'express';

const app = express();
const PORT = 3000;

//ruta get con parametros de ruta 
//http://localhost:3000/user/123
app.get('/user/:id',(req,res)=>{
    const userId = req.params.id;
    console.log(`ID del usuario recibido es: ${userId}`);
    res.send(`Perfil del usuario con ID: ${userId}`);

});

//ruta get con parametro de consulta, solicitud: http://localhost:3000/profile?edad=30
app.get('/profile',(req,res)=>{
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);

});

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})