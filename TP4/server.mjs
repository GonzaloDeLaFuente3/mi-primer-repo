import express from 'express';
import { obtenerSuperheroeMayoresDe30Controller, buscarSuperheroesPorAtributoController, obtenerSuperheroePorIdController } from './controllers/superheroesController.mjs';

const app = express();
const PORT = 3005;

//rutas 
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayorA30',obtenerSuperheroeMayoresDe30Controller);

//levantamos le servidor en el puerto 3005
app
.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})