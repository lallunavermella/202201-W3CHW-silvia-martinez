/* eslint-disable no-unused-vars */
import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";

class PokeCardComponent extends Component {
  pokemonDetails;

  name;

  generateHTML() {
    this.element.innerHTML = `
            <div class="card__image">
            <img src="${this.pokemonDetails.sprites.other["official-artwork"].front_default}"/></div>
            <div class="card__text">
              <h2 class="card__text--title">Nombre: ${this.pokemonDetails.name}</h2>
              <p class="card__text--abilities">HP: ${this.pokemonDetails.stats[0].base_stat}</p>
              <p class="card__text--velocidad">Experiencia: ${this.pokemonDetails.base_experience}</p>
              <p class="card__text--peso">Peso: ${this.pokemonDetails.weight}</p>
            <div class="button__container"></div>
            </div>`;
  }
}
export default PokeCardComponent;
