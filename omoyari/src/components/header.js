function renderHeader(){
   return(`
        <header>
            <section>
                <h1>Tecnologia para quem <br><strong class="destaque">transforma</strong> o mundo</h1>
                <p>A Omoyari desenvolve soluções digitais para fortalecer organizações sociais, melhorar sua gestão e ampliar seu impacto.</p>
                <div>
                    <button>Conheça a Omoyari</button>
                    <p>OU</p>
                    <a href="#contato">Entre em contato</a>
                </div>
            </section>
            <section>
                <img id="img-celular" src="/src/assets/img-celular.png" alt="Imagem de uma pessoa segurando um celular com tela branca">
            </section>
        </header>
    
    `);
}

export {renderHeader};