import Component from "./Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, action) {
    super(parentElement, className, "i");

    this.addListeners(action);
  }

  addListeners(action) {
    this.element.addEventListener("click", action);
  }
}

export default ButtonComponent;
