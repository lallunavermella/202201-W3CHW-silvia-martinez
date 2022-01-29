async function fetchPokemons() {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const results = await pokemons.json();

  const pokemonArray = results;
  return pokemonArray;
}

const pokemonList = await fetchPokemons();

export async function getPokemon(url) {
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
}

export default pokemonList;
