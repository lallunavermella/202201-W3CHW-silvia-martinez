import Component from "./Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, action) {
    super(parentElement, className, "button");

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
