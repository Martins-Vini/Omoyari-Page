function renderHeader(){
   return(`
        <header id="home">
            <section>
                <h1>Tecnologia para quem <br><strong class="destaque">transforma</strong> o mundo</h1>
                <p>A Omoyari desenvolve soluções digitais para fortalecer organizações sociais, melhorar sua gestão e ampliar seu impacto.</p>
                <div class="header-buttons">
                    <a href="#about" class="btn btn-primary">Conheça a Omoyari</a>
                    <span class="divisor-ou">OU</span>
                    <a href="#contact" class="btn btn-secondary">Entre em contato</a>
                </div>
            </section>
            <section>
                <img id="img-celular" src="/assets/img-celular.png" alt="Imagem de uma pessoa segurando um celular com tela branca">
            </section>
        </header>
    `);
}

export { renderHeader };