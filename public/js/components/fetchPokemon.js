/* eslint-disable no-unused-vars */
const nextPokemons = "";
const pokeApi = "https://pokeapi.co/api/v2/pokemon/";

async function fetchPokemons() {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const results = await pokemons.json();

  const pokemonArray = results;
  return pokemonArray;
}

const pokemonList = await fetchPokemons();
/* export default nextPokemons = pokemonList.next; */

export async function getPokemon(url) {
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
}

export default pokemonList;
