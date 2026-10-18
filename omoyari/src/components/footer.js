function renderFooter(){
    return(`
        <footer id="contact">
            <aside class="footer-info">
                <hr class="linha-titulo-left">
                <h1>Tem um desafio? Vamos transformá-lo em <strong class="destaque">solução.</strong></h1>
                <p class="descricao">A Omoyari acredita que boas ideias podem se tornar grandes impactos quando encontram a tecnologia certa.</p>
                <p class="copyright"><strong>Copyright © 2026-2027 Omoyari. Todos os direitos reservados.</strong></p>
            </aside>
            <aside id="formulario">
                <h1>Envie seu recado para nós.</h1>
                <form action="https://formspree.io/f/mppqnoob" method="POST">
                    <label for="email">Insira seu e-mail:</label>
                    <input id="email" name="email" type="email" placeholder="Seu e-mail" required />
                    
                    <label for="msg">Insira sua mensagem:</label>
                    <textarea id="msg" name="msg" placeholder="Sua mensagem" rows="5" required></textarea>
                    
                    <button id="btn-enviar" type="submit">Enviar</button>
                </form>
            </aside>
        </footer>
    `);
}

export { renderFooter };