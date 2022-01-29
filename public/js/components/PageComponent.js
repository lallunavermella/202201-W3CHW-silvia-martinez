import Component from "./Component.js";

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "page");
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<body>
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
          <div class="card">
            <div class="card__image"></div>
            <div class="card__text">
              <h2 class="card__text--title">Nombre:</h2>
              <p class="card__text--abilities">Habilidad:</p>
              <p class="card__text--velocidad">Velocidad</p>
              <p class="card__text--peso">Peso</p>
              <button class="button button--details">detalles</button>
              <button class="button button--add">mi pokemon</button>
            </div>
          </div>
          <div class="card">
            <div class="card__image"></div>
            <div class="card__text">
              <h2 class="card__text--title">Nombre:</h2>
              <p class="card__text--abilities">Habilidad:</p>
              <p class="card__text--velocidad">Velocidad</p>
              <p class="card__text--peso">Peso</p>
            </div>
          </div>
          <div class="card">
            <div class="card__image"></div>
            <div class="card__text">
              <h2 class="card__text--title">Nombre:</h2>
              <p class="card__text--abilities">Habilidad:</p>
              <p class="card__text--velocidad">Velocidad</p>
              <p class="card__text--peso">Peso</p>
            </div>
          </div>
        </div>
      </div>
      <button>Menos</button>
      <button>Mas</button>
    </main>
    <footer>Pikachu</footer>
  </body>`;
  }
}

export default PageComponent;
