import Component from "./Component.js";

class PageComponentMisPokemons extends Component {
  cards = [];

  constructor(parentElement) {
    super(parentElement, "page");
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
        <button>Menos</button>
        <button>Mas</button>
      </section>
    </main>
    <footer>Pikachu</footer>`;

    this.renderPokeCard();
  }

  // eslint-disable-next-line class-methods-use-this
  renderPokeCard() {}
}

export default PageComponentMisPokemons;
