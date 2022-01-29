import Component from "./Component.js";

describe("Given a Component function", () => {
  describe("When it's rendered", () => {
    test("Then it should render a div", () => {
      const parentElement = document.createElement("container");

      new Component(parentElement, "class");

      expect(parentElement.querySelector(".class")).not.toBeNull();
    });
  });
});
