// repositories/CountryRepository.js
import Country from '../models/Country.mjs';
import IRepository from "./IRepository.mjs";


//------------------------------------------------------------------------------------------------------------------------------//
class CountryRepository extends IRepository {

  async crear(datosPais) {
    return await Country.create(datosPais);
  }

  async obtenerTodos() {
    return await Country.find({});
  }

}

export const countryRepository = new CountryRepository();





