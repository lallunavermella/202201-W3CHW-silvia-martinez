import PokeCardComponent from "./PokeCardComponent.js";

describe("Given a PokeCardComponent", () => {
  describe("When instantiated", () => {
    test("Then is should be a div ", () => {
      const parentElement = document.createElement("container");

      // eslint-disable-next-line no-unused-vars
      const PokeCard = new PokeCardComponent(parentElement, "card", "div");

      expect(parentElement.querySelector(".card")).not.toBeNull();
    });
  });
});
