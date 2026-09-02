import {renderNavbar} from "./components/navbar.js";
import {renderHeader} from "./components/header.js";
import {renderSection3} from "./components/section3.js";

let mainPagina = window.document.getElementById("app");
import { efeitoParallax } from "./scripts/efeitoParallax.js";

efeitoParallax();

mainPagina.innerHTML = renderNavbar() + renderHeader() + renderSection3();
