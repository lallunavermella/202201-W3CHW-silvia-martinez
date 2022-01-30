/* eslint-disable no-unused-vars */
let nextPokemons = "";
const pokeApi = "https://pokeapi.co/api/v2/pokemon/";

async function fetchPokemons() {
  const url = pokeApi;

  const pokemons = await fetch(url);
  const results = await pokemons.json();

  const pokemonArray = results;
  return pokemonArray;
}

export const pokemonList = await fetchPokemons();
export default nextPokemons = pokemonList.next;

export async function getPokemon(url) {
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
}
