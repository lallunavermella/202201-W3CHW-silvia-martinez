/* eslint-disable no-unused-vars */
import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";

function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
class PokeCardComponent extends Component {
  pokemonDetails;

  name;

  generateHTML() {
    this.element.innerHTML = `
            <div class="card__image">
            <img src="${
              this.pokemonDetails.sprites.other["official-artwork"]
                .front_default
            }"/></div>
            <div class="card__text">
              <h2 class="card__text--title">Nombre: ${upperCaseFirstLetter(
                this.pokemonDetails.name
              )}</h2>
              <p class="card__text--abilities">HP: ${
                this.pokemonDetails.stats[0].base_stat
              }</p>
              <p class="card__text--velocidad">Experiencia: ${
                this.pokemonDetails.base_experience
              }</p>
              <p class="card__text--peso">Peso: ${
                this.pokemonDetails.weight
              }</p>
            <div class="button__container"></div>
            </div>
            <div class="card__overlay">
                <ul class="list-unstyled">
                  <li>Id: ${this.pokemonDetails.id}</li>
                  <li>Tipo: ${this.pokemonDetails.types[0].type.name}</li>
                  <li>Habilidad: ${
                    this.pokemonDetails.abilities[0].ability.name
                  }</li>
                  <li>Altura: ${this.pokemonDetails.height}</li>
                  <li>Peso: ${this.pokemonDetails.weight}</li>
                </ul>
                <div class="card__action">
                  `;
    this.renderButton();
  }

  renderButton() {
    const button = new ButtonComponent(
      this.element,
      "card__action btn fas fa-heart ",
      () => this.addMyPokemon()
    );
  }

  addMyPokemon() {
    this.generateHTML();
  }
}
export default PokeCardComponent;
