/* eslint-disable no-unused-vars */
import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";

class PokeCardComponent extends Component {
  name;

  constructor(parentElement, className, htmlTag, name) {
    super(parentElement, className, htmlTag);

    this.name = name;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
                
            <div class="card__image"></div>
            <div class="card__text">
              <h2 class="card__text--title">Nombre: ${this.name}</h2>
              <p class="card__text--abilities">Habilidad:${this.infoArray}</p>
              <p class="card__text--velocidad">Velocidad${this.infoArray}</p>
              <p class="card__text--peso">Peso</p>
            </div>`;
  }
}
export default PokeCardComponent;
