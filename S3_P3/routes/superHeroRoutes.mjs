//definimos las rutas necesarias para cada operacion del controlador 
import express from 'express';

import { obtenerSuperheroesMayoresDe30Controller,obtenerSuperheroePorIdController,obtenerTodosLosSuperheroesController,buscarSuperheroesPorAtributoController,crearSuperheroeController, actualizarSuperheroeController, eliminarSuperheroeController, eliminarSuperheroePorNombreController } from '../controllers/superheroesController.mjs';


// Importa las validaciones desde el middleware
import { 
    crearSuperheroeValidationRules, 
    actualizarSuperheroeValidationRules 
  } from '../middlewares/validationRules.mjs';  // Asegúrate de que la ruta sea correcta
  import { validar } from '../middlewares/validationRules.mjs'; // Importa el middleware de validación de errores


const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor',buscarSuperheroesPorAtributoController);
router.get('/heroes/edad/mayores30',obtenerSuperheroesMayoresDe30Controller);

// Endpoint POST para crear un superhéroe
router.post('/crearSuperHeroe',crearSuperheroeValidationRules(),  // Valida los campos antes de procesar
validar,  // Middleware que maneja los errores de validación
crearSuperheroeController);


// Endpoint PUT para actualizar un superhéroe
router.put('/actualizarSuperHeroe/:id', crearSuperheroeValidationRules(),  // Valida los campos antes de procesar
validar,  // Middleware que maneja los errores de validación
actualizarSuperheroeController);


// Endpoint DELETE para eliminar un superhéroe
router.delete('/eliminarSuperHeroe/:id', eliminarSuperheroeController);


// Endpoint DELETE para eliminar un superhéroe por nombre
router.delete('/eliminarSuperHeroe/nombre/:nombre', eliminarSuperheroePorNombreController);



export default router;
