import fs from 'fs';

//Clase de superheroe
class SuperHeroe{
    constructor(id, nombreSuperHeroe,nombreReal,nombreSociedad,edad,planetaOrigen,debilidad,poder,habilidadEspecial,aliado,enemigo){
        this.id=id;
        this.nombreSuperHeroe=nombreSuperHeroe;
        this.nombreReal=nombreReal;
        this.nombreSociedad= nombreSociedad;
        this.edad=edad;
        this.planetaOrigen=planetaOrigen;
        this.debilidad=debilidad;
        this.poder=poder;
        this.habilidadEspecial=habilidadEspecial;
        this.aliado=aliado;
        this.enemigo=enemigo;
    }

}

//funcion para leer y ordenar los superheroes
export function leerSuperHeroes(ruta){
    console.log(ruta);
    const datos = fs.readFileSync(ruta,'utf8');
    const superHeroesArray = JSON.parse(datos);

    //convertit a instancias de super heroes 
    const superHeroes = superHeroesArray.map(
        hero => new SuperHeroe(hero.id, hero.nombreSuperHeroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //ordenar por nombre de super heroe 
    superHeroes.sort((a,b)=> a.nombreSuperHeroe.localeCompare(b.nombreSuperHeroe));
    
    return superHeroes;
}

//funcion para agregar superheroes 
export function agregarSuperHeroes(rutaOriginal, rutaNueva){
    const datosOriginales = fs.readFileSync(rutaOriginal,'utf8');
    const datosNuevos = fs.readFileSync(rutaNueva,'utf8');

    const superHeroesOriginales = JSON.parse(datosOriginales);
    const superHeroesNuevos = JSON.parse(datosNuevos);


//converti los datos nuevos de superheroes en instancia de SuperHeroe 
const instanciasNuevas = superHeroesNuevos.map(hero => new SuperHeroe(hero.id, hero.nombreSuperHeroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo));

//combinar listas 
const listaActualizada = [...superHeroesOriginales,...instanciasNuevas];

//guardar lista actualizada 
fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada,null,2),'utf8');
console.log('Lista de superheroes actualizada con exito');
}