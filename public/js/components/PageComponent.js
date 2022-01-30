/* eslint-disable no-unused-vars */
import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";
import PokeCardComponent from "./PokeCardComponent.js";
import listPokemonProperties, { getPokemon } from "./fetchPokemon.js";

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "page");
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <header class="header">
      <nav class="nav">
        <ul class="unlisted-list">
          <li><a href="pokemons.html">Todos</a></li>
          <li><a href="misPokemons.html"> Mis Pokemons</a></li>
        </ul>
        <img class="nav--title"src="pokemon-logo.svg" alt="logo Pokemon" />
      </nav>
    </header>
    <main class="main">
      <div class="container">
        <div class="row">
        </div>
      </div>
      <button>Menos</button>
      <button>Mas</button>
    </main>
    <footer>Pikachu</footer>`;

    this.renderPokeCard();
  }

  // eslint-disable-next-line class-methods-use-this
  renderPokeCard() {
    const parentElement = document.querySelector(".row");

    listPokemonProperties.results.forEach(async (pokemon) => {
      const { name } = pokemon;
      const pokeCard = new PokeCardComponent(parentElement, "card", "div");
      const pokemonDetails = await getPokemon(pokemon.url);
      pokeCard.pokemonDetails = pokemonDetails;
      pokeCard.generateHTML();
    });
  }
}

export default PageComponent;
