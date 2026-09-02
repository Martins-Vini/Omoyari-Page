import {renderNavbar} from "./components/navbar.js";

let mainPagina = window.document.getElementById("app");

function mensagemDireta(){
  return ("Página da Omoyari")
};

mainPagina.innerHTML = renderNavbar();
