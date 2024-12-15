// controllers/countryController.mjs
import { obtenerTodosLosPaises, agregarPais, obtenerPaisPorId, actualizarPais } from "../services/countryService.mjs";

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

//obtener pais por id. Sirve para mostrar el pais seleccionado para su edicion 
export async function obtenerPaisPorIdController(req, res) {
    const { id } = req.params;
    const pais = await obtenerPaisPorId(id);

    if (pais) {
        res.render('editCountry', { title: 'Editar País', pais });
    } else {
        res.status(404).send({ mensaje: "País no encontrado" });
    }
}

//editar pais 
export async function editarPaisController(req, res) {
    try {
        const { id } = req.params;
        const {
            name_common,
            name_official,
            capital,
            area,
            population,
            gini,
            timezones,
            borders
        } = req.body;

        const datosActualizados = {
            name: {
                common: name_common,
                official: name_official,
                nativeName: {
                    spa: {
                        official: name_official,
                        common: name_common
                    }
                }
            },
            capital: capital.split(',').map(cap => cap.trim()),
            area,
            population,
            gini: { [gini]: gini },
            timezones: timezones.split(',').map(tz => tz.trim()),
            borders: borders ? borders.split(',').map(border => border.trim()) : []
        };

        const paisActualizado = await actualizarPais(id, datosActualizados);

        if (paisActualizado) {
            res.redirect('/api/countries');
        } else {
            res.status(404).send({ mensaje: "País no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar el país:", error);
        res.status(500).send({ mensaje: "Error al actualizar el país" });
    }
}