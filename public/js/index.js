/* eslint-disable no-unused-vars */
import PageComponent from "./components/PageComponent.js";
import {
  fetchPokemons,
  fetchPokemonsNextPage,
  fetchPokemonsPreviousPage,
} from "./components/fetchPokemon.js";

const parentElement = document.querySelector("body");

let actionPreviuosPage;
const actionNextPage = async () => {
  const nextPage = await fetchPokemonsNextPage();
  parentElement.innerHTML = "";
  const page = new PageComponent(
    parentElement,
    nextPage,
    actionNextPage,
    actionPreviuosPage
  );
};

actionPreviuosPage = async () => {
  const previousPage = await fetchPokemonsPreviousPage();
  parentElement.innerHTML = "";
  const page = new PageComponent(
    parentElement,
    previousPage,
    actionNextPage,
    actionPreviuosPage
  );
};

const responsePage = await fetchPokemons();
const page = new PageComponent(
  parentElement,
  responsePage,
  actionNextPage,
  actionPreviuosPage
);

export default page;
