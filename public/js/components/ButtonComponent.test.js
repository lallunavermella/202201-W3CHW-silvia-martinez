/* eslint-disable no-new */
import ButtonComponent from "./ButtonComponent.js";

describe("Given a ButtonComponent", () => {
  describe("When instantiated", () => {
    test("Then is should be a button ", () => {
      const parentElement = document.createElement("container");

      new ButtonComponent(parentElement);

      expect(parentElement.querySelector("i")).not.toBeNull();
    });
  });
  describe("When click", () => {
    test("Then do an action", () => {
      const parentElement = document.createElement("div");
      const action = jest.fn();
      const button = new ButtonComponent(parentElement, "button", action);

      button.element.click();

      expect(action).toBeCalled();
    });
  });
});
