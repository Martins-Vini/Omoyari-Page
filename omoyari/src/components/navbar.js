function renderNavbar(){
    return (`
        <nav id="navbar">
            <a href="#home" class="logo">
                <img src="./src/assets/omoyariLogo.png" id="logoEmpresa" alt="Logo da empresa">
                <span id="nomeEmpresa">Omoyari</span>
            </a>

            <ul class="nav-links">
                <li><a href="#home" id="inicio">Início</a></li>
                <li><a href="#services" id="servicos">Serviços</a></li>
                <li><a href="#about" id="sobre-nos">Sobre nós</a></li>
            </ul>   

            <a href="#contact" id="contato">Fale conosco</a>
        </nav>
        `)
}

export {renderNavbar};