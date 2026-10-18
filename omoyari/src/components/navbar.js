function renderNavbar(){
    return (`
        <nav id="navbar">
            <a href="#home" class="logo">
                <img src="/assets/omoyariLogo.png" id="logoEmpresa" alt="Logo da empresa">
                <span id="nomeEmpresa">Omoyari</span>
            </a>

            <div class="menu-toggle" onclick="document.getElementById('menu-mobile-conteudo').classList.toggle('ativo')">
                <i class="ph ph-list"></i>
            </div>

            <div id="menu-mobile-conteudo" class="conteudo-nav">
                <ul class="nav-links">
                    <li><a href="#home" id="inicio" onclick="document.getElementById('menu-mobile-conteudo').classList.remove('ativo')">Início</a></li>
                    <li><a href="#services" id="servicos" onclick="document.getElementById('menu-mobile-conteudo').classList.remove('ativo')">Serviços</a></li>
                    <li><a href="#about" id="sobre-nos" onclick="document.getElementById('menu-mobile-conteudo').classList.remove('ativo')">Sobre nós</a></li>
                </ul>   
                <a href="#contact" id="contato" class="btn btn-navbar" onclick="document.getElementById('menu-mobile-conteudo').classList.remove('ativo')">Fale conosco</a>
            </div>
        </nav>
    `);
}

export { renderNavbar };