let nextPokemons = "";
const pokeApi = "https://pokeapi.co/api/v2/pokemon/";

async function fetchPokemons() {
  const url = pokeApi;

  const pokemons = await fetch(url);
  const results = await pokemons.json();

  const pokemonArray = results;
  return pokemonArray;
}

const pokemonList = await fetchPokemons();
nextPokemons = pokemonList.next;

export async function getPokemon(url) {
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
}

export default pokemonList;
