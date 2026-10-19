function renderSectionDepoimentos() {
    return (`
        <section class="section-depoimentos" id="depoimentos">
            <div class="overlay-parallax"></div>
            <aside>
                <hr class="linha-titulo">
                <h1>O que dizem sobre nós</h1>
                <p>Histórias reais de organizações e parceiros que transformaram sua gestão e impacto com a Omoyari.</p>
            </aside>
            <div class="cards-container">
                <div class="card-depoimento">
                    <span class="aspas">“</span>
                    <p>O Omoyari otimizou todos os nossos processos internos. A plataforma é intuitiva e permitiu que a nossa ONG aumentasse em 40% a captação de recursos.</p>
                    <div class="autor-info">
                        <div class="avatar-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23a73535"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                        </div>
                        <div>
                            <h3>Mariana Silva</h3>
                            <span>Diretora Executiva, Instituto Transformar</span>
                        </div>
                    </div>
                </div>

                <div class="card-depoimento">
                    <span class="aspas">“</span>
                    <p>Tecnologia de ponta aliada a um propósito genuíno. A equipe nos atendeu com uma atenção humanizada impecável do início ao fim do projeto.</p>
                    <div class="autor-info">
                        <div class="avatar-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23a73535"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                        </div>
                        <div>
                            <h3>Carlos Eduardo</h3>
                            <span>Coordenador de Tecnologia, Ação Social</span>
                        </div>
                    </div>
                </div>

                <div class="card-depoimento">
                    <span class="aspas">“</span>
                    <p>Conseguimos organizar nossas bases de dados e mensurar o impacto das nossas ações em tempo real. Uma parceria indispensável para nós!</p>
                    <div class="autor-info">
                        <div class="avatar-placeholder">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23a73535"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                        </div>
                        <div>
                            <h3>Fernanda Costa</h3>
                            <span>Fundadora, Projeto Futuro</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `);
}

export { renderSectionDepoimentos };