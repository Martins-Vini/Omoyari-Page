function renderSection7() {
    return (`
        <section class="section7" id="depoimentos">
            <aside class="intro-content">
                <hr class="linha-titulo">
                <h1>O que dizem sobre nós</h1>
                <p>Histórias reais de organizações e parceiros que transformaram sua gestão e impacto com a Omoyari.</p>
            </aside>

            <div class="depoimentos-container">
                <div class="card-depoimento">
                    <div class="aspas-quote">“</div>
                    <p class="texto-depoimento">A Omoyari otimizou todos os nossos processos internos. A plataforma é intuitiva e permitiu que a nossa ONG aumentasse em 40% a captação de recursos.</p>
                    <div class="autor-info">
                        <div class="autor-avatar">
                            <i class="ph ph-user"></i>
                        </div>
                        <div>
                            <h3>Mariana Silva</h3>
                            <span>Diretora Executiva, Instituto Transformar</span>
                        </div>
                    </div>
                </div>

                <div class="card-depoimento destaque">
                    <div class="aspas-quote">“</div>
                    <p class="texto-depoimento">Tecnologia de ponta aliada a um propósito genuíno. A equipe nos atendeu com uma atenção humanizada impecável do início ao fim do projeto.</p>
                    <div class="autor-info">
                        <div class="autor-avatar">
                            <i class="ph ph-user-gear"></i>
                        </div>
                        <div>
                            <h3>Carlos Eduardo</h3>
                            <span>Coordenador de Tecnologia, Ação Social</span>
                        </div>
                    </div>
                </div>

                <div class="card-depoimento">
                    <div class="aspas-quote">“</div>
                    <p class="texto-depoimento">Conseguimos organizar nossas bases de dados e mensurar o impacto das nossas ações em tempo real. Uma parceria indispensável para nós!</p>
                    <div class="autor-info">
                        <div class="autor-avatar">
                            <i class="ph ph-user-check"></i>
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

export { renderSection7 };