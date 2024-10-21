import { leerSuperHeroes, agregarSuperHeroes} from'./utils.mjs';

 //leer y mostrar la lista de super heroes ordenado 
// const superHeroesOriginales = leerSuperHeroes('./superHeroes.txt');
// const superHeroesAgregado = 

// console.log('Superheroes ordenados:');
// console.log(superHeroes);

const heroesOriginales = './superHeroes.txt';
const heroesAgregados = './agregarSuperHeroes.txt';

//agregar nuevos superheroes 
agregarSuperHeroes(heroesOriginales,heroesAgregados);

//leer y mostrar la lista actualizadda de superheroes y ademas de forma ordenada
const superheroe = leerSuperHeroes(heroesOriginales);
console.log('Todos los superheroes ordenados:');
console.log(superheroe);