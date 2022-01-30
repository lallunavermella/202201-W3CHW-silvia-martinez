/* eslint-disable no-unused-vars */

import Component from "./Component.js";
import PokeCardComponent from "./PokeCardComponent.js";
import { getPokemon, fetchPokemons } from "./fetchPokemon.js";
import ButtonComponent from "./ButtonComponent.js";

class PageComponent extends Component {
  pokemonsResponse;

  actionNextPage;

  actionPreviuosPage;

  constructor(
    parentElement,
    pokemonsResponse,
    actionNextPage,
    actionPreviuosPage
  ) {
    super(parentElement, "page");
    this.pokemonsResponse = pokemonsResponse;
    this.actionPreviuosPage = actionPreviuosPage;
    this.actionNextPage = actionNextPage;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <header class="header">
      <nav class="nav">
        <ul class="unlisted-list">
          <li><a href="index.html">Todos</a></li>
          <li> <img class="nav--title"src="pokemon-logo.svg" alt="logo Pokemon" /> </li>
          <li><a href="misPokemons.html"> Mis Pokemons</a></li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <div class="container">
        <div class="row pokecard">
        </div>
      </div>
      <section class="buttons">
      </section>
    </main>
    <footer>Pikachu</footer>`;

    this.renderPokeCards();
    this.renderButtons();
  }

  // eslint-disable-next-line class-methods-use-this
  renderPokeCards() {
    const parentElement = document.querySelector(".pokecard");

    this.pokemonsResponse.results.forEach(async (pokemon) => {
      const { name } = pokemon;

      const pokeCard = new PokeCardComponent(parentElement, "card", "div");
      const pokemonDetails = await getPokemon(pokemon.url);
      pokeCard.pokemonDetails = pokemonDetails;
      pokeCard.generateHTML();
    });
  }

  renderButtons() {
    const parentElement = document.querySelector(".buttons");
    const buttonPrevios = new ButtonComponent(
      parentElement,
      "fas fa-minus btn",
      this.actionPreviuosPage
    );

    const buttonNext = new ButtonComponent(
      parentElement,
      "fas fa-plus btn",
      this.actionNextPage
    );
  }
}

export default PageComponent;
