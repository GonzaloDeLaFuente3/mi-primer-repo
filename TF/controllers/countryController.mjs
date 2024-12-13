// controllers/countryController.mjs
import { obtenerTodosLosPaises } from "../services/countryService.mjs";


export async function obtenerTodosLosPaisesController(req, res) {
try {
    const paises = await obtenerTodosLosPaises(); // Obtiene los países de la base de datos o servicio
    console.log(paises.length);
    res.render('dashboard', { title: 'Dashboard', paises }); // Renderiza la vista y pasa los datos
} catch (error) {
    console.error("Error al obtener los países:", error);
    res.status(500).send({ mensaje: "Error al cargar el dashboard" });
}
}