class MeuHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="nostal2-header">
                <div class="logo">
                <img src="../img/LogomarcaPS2.png" alt="Logo do Nostal2">
                </div>
                <form class="header-search" role="search" action="#" method="get">
                    <div class="header-search-field">
                        <img src="../img/Lupa.png" alt="" aria-hidden="true" class="header-search-icon">
                        <input type="search" name="q" placeholder="Pesquise por jogos, consoles..." aria-label="Pesquisar no site">
                    </div>
                    <button type="submit">Buscar</button>
                </form>
                <nav>
                    <a href="home.html">Início</a>
                    <a href="local.html">Localização</a>
                    <a href="games.html">Jogos</a>
                    <a href="consoles.html">Consoles</a>
                    <a href="controles.html">Controles</a>
                    <a href="login.html">Sair</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('nostal2-header', MeuHeader);