function renderSection8() {
    const fundadores = [
        { nome: "Vinícius Martins", cargo: "CEO & Co-Fundador", ig: "#", li: "#", mail: "viniciusmartinsdepaivadev@gmail.com" },
        { nome: "Leticia Uchôa", cargo: "CTO & Co-Fundador", ig: "#", li: "#", mail: "mailto:contato@omoyari.com" },
        { nome: "Daniel Dias", cargo: "Programador Back-End e Q.A", ig: "#", li: "#", mail: "mailto:contato@omoyari.com" },
        { nome: "Mirela Amarante", cargo: "Programadora Front-End e Designer", ig: "#", li: "#", mail: "mailto:contato@omoyari.com" },
        { nome: "Nicollas Trindade", cargo: "Programador Full-Stack e Q.A", ig: "#", li: "#", mail: "mailto:contato@omoyari.com" },
        { nome: "Miguel Silva Duarte", cargo: "Marketing e Edição", ig: "#", li: "#", mail: "mailto:contato@omoyari.com" },
        { nome: "Caio Henrique", cargo: "Marketing e Edição", ig: "#", li: "#", mail: "mailto:contato@omoyari.com" },
        { nome: "Sofia Santos", cargo: "Diretora de Design e Produção", ig: "#", li: "#", mail: "mailto:contato@omoyari.com" },
        { nome: "Elisa Fernandes", cargo: "Pesquisa e Q.A", ig: "#", li: "#", mail: "mailto:contato@omoyari.com" },
        { nome: "Stefanny Gonçalves", cargo: "Pesquisa e Q.A", ig: "#", li: "#", mail: "mailto:contato@omoyari.com" }
    ];

    return (`
        <section class="section8" id="fundadores">
            <aside class="intro-content">
                <hr class="linha-titulo">
                <h1>Quem faz acontecer</h1>
                <p>Conheça as mentes e corações por trás da Omoyari que transformam desafios em impacto real.</p>
            </aside>

            <div class="carrossel-wrapper">
                <button class="nav-btn prev-btn" id="btn-prev" aria-label="Anterior">
                    <i class="ph ph-caret-left"></i>
                </button>

                <div class="carrossel-track-container">
                    <div class="carrossel-track" id="carrossel-fundadores">
                        ${fundadores.map((f, index) => `
                            <div class="card-fundador ${index === 1 ? 'active' : ''}" data-index="${index}">
                                <div class="avatar-container">
                                    <i class="ph ph-user"></i>
                                </div>
                                <h2>${f.nome}</h2>
                                <span class="cargo-fundador">${f.cargo}</span>
                                <div class="redes-sociais">
                                    <a href="${f.li}" target="_blank" aria-label="LinkedIn"><i class="ph ph-linkedin-logo"></i></a>
                                    <a href="${f.ig}" target="_blank" aria-label="Instagram"><i class="ph ph-instagram-logo"></i></a>
                                    <a href="${f.mail}" aria-label="E-mail"><i class="ph ph-envelope-simple"></i></a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button class="nav-btn next-btn" id="btn-next" aria-label="Próximo">
                    <i class="ph ph-caret-right"></i>
                </button>
            </div>
        </section>
    `);
}

function initCarrosselFundadores() {
    const track = document.getElementById('carrossel-fundadores');
    if (!track) return;

    const cards = Array.from(track.children);
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    let currentIndex = 1; // Começa no segundo card para deixar centralizado

    function updateCarrossel() {
        if (!cards.length) return;

        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        const cardWidth = cards[0].offsetWidth + 24; // Largura do card + gap do SCSS
        const containerWidth = track.parentElement.offsetWidth;
        const offset = (containerWidth / 2) - (cardWidth / 2) - (currentIndex * cardWidth);

        track.style.transform = `translateX(${offset}px)`;
    }

    // Eventos de clique nos botões de navegação
    prevBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrossel();
        }
    });

    nextBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarrossel();
        }
    });

    // Permite clicar diretamente em qualquer card para centralizá-lo
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            updateCarrossel();
        });
    });

    // Recalcula o alinhamento ao redimensionar a janela
    window.addEventListener('resize', updateCarrossel);

    // Executa a primeira centralização
    requestAnimationFrame(updateCarrossel);
}

export { renderSection8, initCarrosselFundadores };