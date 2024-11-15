//definimos las rutas necesarias para cada operacion del controlador 
import express from 'express';

import { obtenerSuperheroesMayoresDe30Controller,obtenerSuperheroePorIdController,obtenerTodosLosSuperheroesController,buscarSuperheroesPorAtributoController,crearSuperheroeController, actualizarSuperheroeController, eliminarSuperheroeController, eliminarSuperheroePorNombreController } from '../controllers/superheroesController.mjs';




const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor',buscarSuperheroesPorAtributoController);
router.get('/heroes/edad/mayores30',obtenerSuperheroesMayoresDe30Controller);
// Endpoint POST para crear un superhéroe
router.post('/crearSuperHeroe', crearSuperheroeController);

// Endpoint PUT para actualizar un superhéroe
router.put('/actualizarSuperHeroe/:id', actualizarSuperheroeController);
// Endpoint DELETE para eliminar un superhéroe
router.delete('/eliminarSuperHeroe/:id', eliminarSuperheroeController);
// Endpoint DELETE para eliminar un superhéroe por nombre
router.delete('/eliminarSuperHeroe/nombre/:nombre', eliminarSuperheroePorNombreController);

export default router;
