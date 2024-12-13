// routes/countryRoutes.mjs
import express from 'express';
import * as countryService from '../services/countryService.mjs';
import { obtenerTodosLosPaisesController } from '../controllers/countryController.mjs';

const router = express.Router();

//pagina de index
router.get('/index', (req, res) => {
    res.render('index', {title:'Inicio'});
  });

// Ruta para iniciar el proceso de obtención y almacenamiento de países
router.get('/fetch-countries', async (req, res) => {
  try {
    await countryService.fetchAndStoreCountries();
    res.send('Países hispanohablantes almacenados correctamente');
  } catch (error) {
    res.status(500).send('Error al almacenar los países');
  }
});

//mostrar la tabla con los piases en la base de datos 
router.get('/countries', obtenerTodosLosPaisesController);


export default router;


