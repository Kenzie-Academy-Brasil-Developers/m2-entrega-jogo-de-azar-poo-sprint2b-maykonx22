const modalRegra = document.querySelector("#regras");

function Regra() {
  modalRegra.innerHTML = `
        <div id="container-Regras">
          <h1>Regras do Jogo</h1>
          <div id="regra-geral">
            <div id="img-regras">
              <img src="src/img/pc-papel.png" alt="" />
              <img src="src/img/pc-pedra.png" alt="" />
              <img src="src/img/pc-tesoura.png" alt="" />
            </div>
            <div id="titulo-regras">
              <p>Papel</p>
              <p>Pedra</p>
              <p>Tesoura</p>
            </div>
            <ul>
              <li>Papel Ganha de Pedra.</li>
              <li>Pedra Ganha de Tesoura.</li>
              <li>Tesoura Ganha de Papel.</li>
            </ul>
            <button id="regra-bnt">Entendi</button>
          </div>
        </div>
    `;

  return modalRegra;
}

export { Regra };
