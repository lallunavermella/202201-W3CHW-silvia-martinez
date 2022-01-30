let nextPage = null;
let previousPage = null;

const urlPokemonApi = "https://pokeapi.co/api/v2/pokemon/";

export async function fetchPokemons() {
  const response = await fetch(urlPokemonApi);
  const result = await response.json();

  nextPage = result.next;
  previousPage = result.previous;

  return result;
}

export async function fetchPokemonsNextPage() {
  const response = await fetch(nextPage);
  const result = await response.json();

  nextPage = result.next;
  previousPage = result.previous;

  return result;
}

export async function fetchPokemonsPreviousPage() {
  const response = await fetch(previousPage);
  const result = await response.json();

  nextPage = result.next;
  previousPage = result.previous;

  return result;
}

export async function getPokemon(url) {
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
}
