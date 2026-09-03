function renderFooter(){
    return(`
        <footer>
            <aside>
                <hr>
                <h1>Tem um desafio? Vamos transformá-lo em <strong class="destaque">solução.</strong></h1>
                <p>A Omoyari acredita que boas ideias podem se tornar grandes impactos quando encontram a tecnologia certa.</p>
                <p><strong>Copyright © 2026-2027 Omoyari. Todos os direitos reservados.</strong></p>
            </aside>
            <aside id="formulario">
                <h1>Envie seu recado para nós.</h1>
                <form>
                        <label>Insira seu e-mail:</label>
                        <input id="email" type="email" placeholder="Seu e-mail" />
                        <label>Insira sua mensagem:</label>
                        <input id="msg" type="text" placeholder="Sua mensagem" />
                        <button id="btn-enviar" type="submit">Enviar</button>
                </form>
            </aside>
        </footer>
        `);
}

export {renderFooter}