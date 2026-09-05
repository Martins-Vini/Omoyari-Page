function renderSection6() {
    return (`
        <section class="section6">
            <div class="titulos-secao">
                <p class="subtitulo">Projetos</p>
                <h2>Do propósito à prática.</h2>
            </div>
            
            <div class="projeto-destaque">
                <video class="video-fundo" autoplay loop muted playsinline>
                    <source src="/assets/videoEye.mp4" type="video/mp4">
                </video>
                <div class="overlay"></div>
                
                <div class="projeto-conteudo">
                    <div class="texto-projeto">
                        <h3>CIVVO</h3>
                        <h4>Gestão que potencializa o impacto social.</h4>
                        <p>Uma solução web desenvolvida para auxiliar organizações sociais na gestão de recursos, projetos, voluntários e informações.</p>
                        <a href="https://civvoprojeto.vercel.app" class="btn-visitar" target="_blank">Visitar</a>
                    </div>
                    <div class="imagem-projeto">
                        <img src="/assets/civvo_logo.png" alt="Logo CIVVO">
                    </div>
                </div>
            </div>
            
            <hr>
        </section>
    `);
}

export { renderSection6 };