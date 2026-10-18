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
            <section class="section-carousel">
                <div class="hero-carousel-wrapper">
                    <!-- Badge flutuante com o ícone de nó/laço da marca -->
                    <div class="floating-badge">
                        <i class="ph ph-infinity icone-laco-omoyari"></i>
                        <span>Inovação com Propósito</span>
                    </div>

                    <div class="hero-carousel">
                        <div class="carousel-track" id="header-carousel-track">
                            <!-- Imagem 1: Equipe e Inovação -->
                            <div class="carousel-slide active">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80" alt="Equipe colaborando em inovação digital">
                            </div>
                            <!-- Imagem 2: Análise e Estratégia -->
                            <div class="carousel-slide">
                                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" alt="Tecnologia aplicada e análise estratégica">
                            </div>
                            <!-- Imagem 3: Transformação Social -->
                            <div class="carousel-slide">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" alt="Transformação digital para organizações sociais">
                            </div>
                            <!-- Imagem 4: Programação e Desenvolvimento -->
                            <div class="carousel-slide">
                                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80" alt="Desenvolvimento de software com propósito">
                            </div>
                            <!-- Imagem 5: Design de Interface & UX -->
                            <div class="carousel-slide">
                                <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=900&q=80" alt="Design de interfaces acessíveis e intuitivas">
                            </div>
                            <!-- Imagem 6: Reunião e Parcerias de Impacto -->
                            <div class="carousel-slide">
                                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80" alt="Parcerias e soluções de impacto">
                            </div>
                        </div>
                        
                        <!-- Botões de Navegação -->
                        <button class="carousel-btn prev-btn" id="header-prev" aria-label="Anterior">
                            <i class="ph ph-caret-left"></i>
                        </button>
                        <button class="carousel-btn next-btn" id="header-next" aria-label="Próximo">
                            <i class="ph ph-caret-right"></i>
                        </button>

                        <!-- Indicadores (6 Dots) -->
                        <div class="carousel-dots" id="header-dots">
                            <span class="dot active" data-slide="0"></span>
                            <span class="dot" data-slide="1"></span>
                            <span class="dot" data-slide="2"></span>
                            <span class="dot" data-slide="3"></span>
                            <span class="dot" data-slide="4"></span>
                            <span class="dot" data-slide="5"></span>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    `);
}

function initHeaderCarousel() {
    const track = document.getElementById('header-carousel-track');
    if (!track) return;

    const slides = Array.from(track.children);
    const nextBtn = document.getElementById('header-next');
    const prevBtn = document.getElementById('header-prev');
    const dots = Array.from(document.querySelectorAll('#header-dots .dot'));
    let currentSlide = 0;
    let slideInterval;

    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        updateSlide(next);
    }

    function prevSlide() {
        let prev = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(prev);
    }

    nextBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
        resetTimer();
    });

    prevBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
        resetTimer();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateSlide(i);
            resetTimer();
        });
    });

    function startTimer() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    startTimer();
}

export { renderHeader, initHeaderCarousel };