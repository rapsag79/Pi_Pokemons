const axios = require("axios");
const { Pokemon } = require("../../db");
const infoCleaner = require("../../utils/infoCleaner");
const { API } = process.env;

const getAllPokemons = async () => {
  const pokemonsDB = await Pokemon.findAll();
  const response = await axios.get(`${API}`);
  const pokemonsApi = response.data.results.map(pokemon => ({
    name: pokemon.name,
    url: pokemon.url
  }));

  return [...pokemonsDB, ...pokemonsApi];
};

const getPokemonByName = async (name) => {
  const response = await axios.get(`${API}/${name}`);
  return infoCleaner(response.data);
};

const getPokemonById = async (id, source) => {
  const pokemon = source === "api" ? (await axios.get(`${API}/${id}`)).data : await Pokemon.findByPk(id)

  return infoCleaner(pokemon);
};

const createPokemonsBD = async ({ nombre, imagen, vida, ataque, defensa, velocidad, altura, peso }) => {
  return await Pokemon.create({ nombre, imagen, vida, ataque, defensa, velocidad, altura, peso });
};

module.exports = { getAllPokemons, getPokemonById, getPokemonByName, createPokemonsBD };











// const getPokemonById = async (id, sourse) => {
//   const pokemon = sourse === "api" ? (await axios.get(`${API}/${id}`)).data : await Pokemon.findByPk(id)

//   return pokemon
// }