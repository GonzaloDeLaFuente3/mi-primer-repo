import { obtenerSuperheroePorId, buscarSuperheroesPorAtributo, obtenerSuperheroeMayoresDe30 } from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from "../views/responseView.mjs";

export function obtenerSuperheroePorIdController(req,res){
    const {id} = req.params;
    const superheroe = obtenerSuperheroePorId(parseInt(id));

    if(superheroe){
        res.send(renderizarSuperheroe(superheroe));
    }else{
        res.status(404).send({mesnaje: "Superheroe no encontrado"});
    }
}

export function buscarSuperheroesPorAtributoController(req,res){
    const {atributo, valor}= req.params;
    // console.log(atributo,valor);
    const superheroes = buscarSuperheroesPorAtributo(atributo,valor);
    // console.log(superheroes);

    if(superheroes.length >0){
        // console.log("entra al if");
        res.send(renderizarListaSuperheroes(superheroes));

    }else{
        // console.log("entra al else");
        res.status(404).send({mesnaje: "No se encontraron superheroes con ese atributo"});
    }
}

export function obtenerSuperheroeMayoresDe30Controller(req,res){
    const superheroes = obtenerSuperheroeMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
}

