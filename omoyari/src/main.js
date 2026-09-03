import {renderNavbar} from "./components/navbar.js";
import {renderHeader} from "./components/header.js";
import {renderSection3} from "./components/section3.js";
import {renderSection4} from "./components/section4.js";
import {renderSection5} from "./components/section5.js";
import {renderSection6} from "./components/section6.js";
import {renderFooter} from "./components/footer.js";        

let mainPagina = window.document.getElementById("app");
import { efeitoParallax } from "./scripts/efeitoParallax.js";

efeitoParallax();

mainPagina.innerHTML = renderNavbar() + renderHeader() + renderSection3() + 
renderSection4() + renderSection5() + renderSection6() + renderFooter();
