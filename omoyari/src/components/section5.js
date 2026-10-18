function renderSection5() {
    return (`
        <section class="section5">
            <hr>
            <h1>Antes de criar, <strong class="destaque-texto">entendemos.</strong></h1>
            
            <div class="timeline-wrapper">
                <div class="timeline-line"></div>
                
                <div class="timeline-item bottom">
                    <div class="marker"></div>
                    <div class="content">
                        <h3>Entender</h3>
                        <p>O problema que existe</p>
                        <span class="timeline-emoji">🔍</span>
                    </div>
                </div>
                
                <div class="timeline-item top">
                    <div class="content">
                        <span class="timeline-emoji">🎯</span>
                        <h3>Planejar</h3>
                        <p>A solução que imaginamos</p>
                    </div>
                    <div class="marker"></div>
                </div>
                
                <div class="timeline-item bottom">
                    <div class="marker"></div>
                    <div class="content">
                        <h3>Desenvolver</h3>
                        <p>A tecnologia que construímos</p>
                        <span class="timeline-emoji">💻</span>
                    </div>
                </div>
                
                <div class="timeline-item top">
                    <div class="content">
                        <span class="timeline-emoji">🚀</span>
                        <h3>Evoluir</h3>
                        <p>O que podemos melhorar?</p>
                    </div>
                    <div class="marker"></div>
                </div>
            </div>
            <hr>
        </section>
    `);
}

export { renderSection5 };