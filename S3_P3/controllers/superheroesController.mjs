//gestionar las solicitudes HTTP , llamando a los servidores correspondientes y utilizando las vistas para presentar los datos 


import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, obtenerTodosLosSuperheroes, crearSuperheroe, actualizarSuperheroe, eliminarSuperheroe, eliminarSuperheroePorNombre } from "../services/superheroesService.mjs";

import { renderizarListaSuperheroes, renderizarSuperheroe } from "../views/responseView.mjs";

export async function obtenerSuperheroePorIdController(req,res){
    const {id} = req.params;
    const superheroe = await obtenerSuperheroePorId(id);

    if(superheroe){
        res.send(renderizarSuperheroe(superheroe));
    }else{
        res.status(404).send({mensaje:"Superheroe no encontrado"});
    }
}

export async function obtenerTodosLosSuperheroesController(req,res){
    const superheroes = await obtenerTodosLosSuperheroes();
    console.log(superheroes.length)
    res.send(renderizarListaSuperheroes(superheroes));
}

export async function buscarSuperheroesPorAtributoController(req,res){
    const {atributo, valor} = req.params;
    const superheroes = await buscarSuperheroesPorAtributo(atributo,valor);

    if(superheroes.length > 0){
        res.send(renderizarListaSuperheroes(superheroes));
    }else{
        res.status(404).send({mensaje: "No se encontraron superheroes con ese atributo"})
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req,res) {
    console.log("entramos al controlador de mayores de 30")
    const superheroes = await obtenerSuperheroesMayoresDe30();
    console.log(superheroes)
    res.send(renderizarListaSuperheroes(superheroes));
}

export async function crearSuperheroeController(req,res){
    try {
        const nuevoSuperheroe = await crearSuperheroe(req.body);
        res.status(201).send(renderizarSuperheroe(nuevoSuperheroe));
    } catch (error) {
        res.status(500).send({ mensaje: "Error al crear el superhéroe", error });
    }
}

export async function actualizarSuperheroeController(req,res){
    try {
        const { id } = req.params;
        const datosActualizados = req.body;
        const superheroeActualizado = await actualizarSuperheroe(id, datosActualizados);

        if (superheroeActualizado) {
            res.send(renderizarSuperheroe(superheroeActualizado));
        } else {
            res.status(404).send({ mensaje: "Superhéroe no encontrado" });
        }
    } catch (error) {
        res.status(500).send({ mensaje: "Error al actualizar el superhéroe", error });
    }
}

export async function eliminarSuperheroeController(req, res) {
    try {
        const { id } = req.params;
        const superheroeEliminado = await eliminarSuperheroe(id);

        if (superheroeEliminado) {
            res.send(renderizarSuperheroe(superheroeEliminado));
        } else {
            res.status(404).send({ mensaje: "Superhéroe no encontrado" });
        }
    } catch (error) {
        res.status(500).send({ mensaje: "Error al eliminar el superhéroe", error });
    }
}

export async function eliminarSuperheroePorNombreController(req, res) {
    try {
        const { nombre } = req.params;
        const superheroeEliminado = await eliminarSuperheroePorNombre(nombre);

        if (superheroeEliminado) {
            res.send(renderizarSuperheroe(superheroeEliminado));
        } else {
            res.status(404).send({ mensaje: "Superhéroe no encontrado" });
        }
    } catch (error) {
        res.status(500).send({ mensaje: "Error al eliminar el superhéroe", error });
    }
}