// controllers/countryController.mjs
import { obtenerTodosLosPaises, agregarPais } from "../services/countryService.mjs";

//obtener todos los paises de la bd y mostrarlo en la tabla
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

//agregar un pais 
export async function agregarPaisController(req, res) {
    try {
        const nuevoPais = {
            name: {
                common: req.body.name_common,
                official: req.body.name_official,
                nativeName: {
                    spa: {
                        official: req.body.name_official,
                        common: req.body.name_common
                    }
                }
            },
            capital: [req.body.capital],
            area: req.body.area,
            population: req.body.population,
            gini: { [req.body.gini]: req.body.gini }, // Asegúrate de que el campo gini se incluya
            timezones: [req.body.timezones],
            borders: req.body.borders ? req.body.borders.split(',').map(border => border.trim()) : [],
            creador: 'De La Fuente Gonzalo'
        };

        await agregarPais(nuevoPais);
        res.redirect('/api/countries');
    } catch (error) {
        console.error("Error al agregar el país:", error);
        res.status(500).send({ mensaje: "Error al agregar el país" });
    }
}