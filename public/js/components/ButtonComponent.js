import Component from "./Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, action, text) {
    super(parentElement, className, "i");

    this.text = text;

    this.addListeners(action);
  }

  generateHTML() {
    this.element.innerHTML = `${this.text}`;
  }

  addListeners(action) {
    this.element.addEventListener("click", action);
  }
}

export default ButtonComponent;
