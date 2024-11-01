const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Grupo-04:grupo04@cursadanodejs.ls9ii.mongodb.net/Node-js',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}
)
.then(()=> console.log('Conexion exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));


//esquema para los superheroes
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type:String , required:true},
    nombreReal:{type:String, required:true} ,
    edad : {type:Number, min:0},
    planetaOrigen: {type: String, default:'Desconocido'},
    debilidad : String,
    poder: [String],
    aliado:[String],
    enemigo: [String ],
    createdAt: {type:Date, default: Date.now},
    creador: { type: String, default: 'De La Fuente Gonzalo' }
    }, { collection: 'Grupo-04' });// Aquí defino la coleccion del grupo 

const SuperHero = mongoose.model('SuperHero', superheroSchema);


//funcion para insertar un nuevo superheroe 
async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe:'Goku',
        nombreReal:'Kakarotto',
        edad:43,
        planetaOrigen: 'Planeta Vegeta',
        debilidad: 'Inocencia y confianza excesiva',
        poder: ['Super Saiyan',
        'Kamehameha',
        'Volar',
        'Teletransportación'],
        aliado: ['Vegeta',
        'Gohan',
        'Piccolo'],
        enemigo: ['Freezer',
        'Cell',
        'Majin Buu']
    });
    await hero.save();
    console.log('Superheroe insertado', hero);
}

insertSuperHero();

//actualizar superheroe
async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        {nombreSuperHeroe: nombreSuperHeroe},
        {$set:{edad:50}}
    );
    console.log('Resultado de la actualizacion:', result);
    

}

updateSuperHero('Goku');

//eliminar superheroe de la coleccion 
async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({nombreSuperHeroe:nombreSuperHeroe});
    console.log('Superheroe eliminado:', result);

    
}

deleteSuperHero('Goku');


//funcion para buscar superheroes segun su planeta de origen 
async function findSuperHeroes() {
    const heroes = await SuperHero.find({planetaOrigen: 'Tierra'});
    console.log('Superheroes encontrados:', heroes);
    console.log('Cantidad de superhéroes encontrados:', heroes.length);
}

findSuperHeroes();