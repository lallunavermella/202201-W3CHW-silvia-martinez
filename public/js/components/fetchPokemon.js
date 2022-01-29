async function fetchPokemons() {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const results = await pokemon.json();

  const pokemonArray = results;
  return pokemonArray;
}

const pokemonList = await fetchPokemons();
console.log(pokemonList.results);

export default pokemonList;
