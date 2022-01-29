import PageComponent from "./components/PageComponent.js";

const parentElement = document.querySelector("body");
const page = new PageComponent(parentElement, "page");

export default page;
