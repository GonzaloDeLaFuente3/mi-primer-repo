// services/CountryService.mjs
import axios from 'axios';
import { countryRepository } from '../repositories/CountryRepository.mjs';

const apiUrl = 'https://restcountries.com/v3.1/all';

// Consumo y devuelvo los países
async function getCountries() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de países:', error);
    throw error;
  }
}

// Filtro los países
function filterSpanishSpeakingCountries(countries) {
  return countries.filter(country => country.languages && country.languages.spa === 'Spanish');
}

// Proceso los países para luego guardar en la base de datos
// Selecciono los campos de interés
function processCountries(countries) {
  return countries.map(country => {
    const {
      name,
      independent,
      status,
      unMember,
      currencies,
      capital,
      region,
      subregion,
      latlng,
      landlocked,
      borders,
      area,
      flag,
      maps,
      population,
      gini,
      fifa,
      timezones,
      continents,
      flags,
      startOfWeek,
      capitalInfo
    } = country;

    return {
      name: {
        common: name.common,
        official: name.official,
        nativeName: {
          spa: {
            official: name.nativeName.spa.official,
            common: name.nativeName.spa.common
          }
        }
      },
      independent,
      status,
      unMember,
      currencies,
      capital,
      region,
      subregion,
      languages: {
        spa: 'Spanish'
      },
      latlng,
      landlocked,
      borders,
      area,
      flag,
      maps,
      population,
      gini: gini ? gini : {}, // Asegúrate de que el campo gini se incluya
      fifa,
      timezones,
      continents,
      flags,
      startOfWeek,
      capitalInfo,
      creador: 'De La Fuente Gonzalo' // Añade el campo creador
    };
  });
}

// Guardo en la base de datos
async function saveCountriesToDB(countries) {
  try {
    await countryRepository.crear(countries);
    console.log('Países guardados en la base de datos');
  } catch (error) {
    console.error('Error al guardar los países en la base de datos:', error);
    throw error;
  }
}

// Utilizo todas las funciones y guardo en la base de datos
export async function fetchAndStoreCountries() {
  const countries = await getCountries();
  const spanishSpeakingCountries = filterSpanishSpeakingCountries(countries);
  const processedCountries = processCountries(spanishSpeakingCountries);
  await saveCountriesToDB(processedCountries);
}

//--------------------------------------------------------------------------------------------------------------------------//
// Obtener todos los países
export async function obtenerTodosLosPaises() {
  return await countryRepository.obtenerTodos();
}
