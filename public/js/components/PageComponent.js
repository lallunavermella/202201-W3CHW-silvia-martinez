/* eslint-disable no-unused-vars */
import Component from "./Component.js";
import PokeCardComponent from "./PokeCardComponent.js";

const pokemons = [];
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
          <li><a href="detalle.html"> Pokemon detalles</a></li>
        </ul>
        <img src="pokemon-logo.svg" alt="logo Pokemon" />
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
    pokemons.forEach((pokemon) => {
      const pokeCard = new PokeCardComponent(
        parentElement,
        "card",
        "div",
        pokemons
      );
    });
  }
}

export default PageComponent;
