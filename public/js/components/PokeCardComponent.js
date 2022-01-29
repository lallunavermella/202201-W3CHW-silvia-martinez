import Component from "./Component.js";

class PokeCardComponent extends Component {
  infoArray;

  constructor(parentElement, className, htmlTag) {
    super(parentElement, className, htmlTag);

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
                
            <div class="card__image"></div>
            <div class="card__text">
              <h2 class="card__text--title">Nombre: ${this.infoArray}</h2>
              <p class="card__text--abilities">Habilidad:${this.infoArray}</p>
              <p class="card__text--velocidad">Velocidad${this.infoArray}</p>
              <p class="card__text--peso">Peso</p>
              <button class="button button--details">detalles</button>
              <button class="button button--add">mi pokemon</button>
            </div>`;
  }
}
export default PokeCardComponent;
