function renderSection8() {
    const fundadores = [
        { nome: "Vinícius Martins", cargo: "CEO & Co-Fundador", ig: "https://www.instagram.com/vini__poet/" },
        { nome: "Leticia Uchôa", cargo: "CTO & Co-Fundador", ig: "https://www.instagram.com/wttuchoa/" },
        { nome: "Daniel Dias", cargo: "Programador Back-End e Q.A", ig: "https://www.instagram.com/daniels.dias6/" },
        { nome: "Mirela Amarante", cargo: "Programadora Front-End e Designer", ig: "https://www.instagram.com/_bybunnyx/" },
        { nome: "Nicollas Trindade", cargo: "Programador Full-Stack e Q.A", ig: "https://www.instagram.com/tr_nickk/" },
        { nome: "Miguel Silva Duarte", cargo: "Marketing e Edição", ig: "https://www.instagram.com/migs_duarte102/" },
        { nome: "Caio Henrique", cargo: "Marketing e Edição", ig: "https://www.instagram.com/cai0h_enrique/" },
        { nome: "Sofia Santos", cargo: "Diretora de Design e Produção", ig: "https://www.instagram.com/sofia_cheryy/" },
        { nome: "Elisa Fernandes", cargo: "Pesquisa e Q.A", ig: "https://www.instagram.com/elisa_fsantos/" },
        { nome: "Stefanny Gonçalves", cargo: "Pesquisa e Q.A", ig: "https://www.instagram.com/e.stereg/" }
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M165.66 202.34a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128l74.35 74.34a8 8 0 0 1 0 11.32Z"/></svg>
                </button>

                <div class="carrossel-track-container">
                    <div class="carrossel-track" id="carrossel-fundadores">
                        ${fundadores.map((f, index) => `
                            <div class="card-fundador ${index === 1 ? 'active' : ''}" data-index="${index}">
                                <div class="avatar-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256" fill="currentColor"><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a87.86 87.86 0 0 1-56.91-20.89c1.64-18.73 22.09-27.11 56.91-27.11s55.27 8.38 56.91 27.11A87.86 87.86 0 0 1 128 216Zm0-64a40 40 0 1 1 40-40 40 40 0 0 1-40 40Z"/></svg>
                                </div>
                                <h2>${f.nome}</h2>
                                <span class="cargo-fundador">${f.cargo}</span>
                                <div class="redes-sociais">
                                    <a href="${f.ig}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M128 80a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40.05 40.05 0 0 1-40 40H80a40.05 40.05 0 0 1-40-40V80a40.05 40.05 0 0 1 40-40h96a40.05 40.05 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z"/></svg>
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button class="nav-btn next-btn" id="btn-next" aria-label="Próximo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M181.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L158.34 128 90.34 59.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"/></svg>
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
    let currentIndex = 1;

    function updateCarrossel() {
        if (!cards.length) return;

        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        const cardWidth = cards[0].offsetWidth + 24;
        const containerWidth = track.parentElement.offsetWidth;
        const offset = (containerWidth / 2) - (cardWidth / 2) - (currentIndex * cardWidth);

        track.style.transform = `translateX(${offset}px)`;
    }

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

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
            updateCarrossel();
        });
    });

    window.addEventListener('resize', updateCarrossel);
    requestAnimationFrame(updateCarrossel);
}

export { renderSection8, initCarrosselFundadores };