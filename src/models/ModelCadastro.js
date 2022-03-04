const modalCadastro = document.querySelector("#cadastro-player");

function Cadastro() {
  modalCadastro.innerHTML = `
        <div id="container-Cad">
          <h1>Jogo Jokenpô</h1>
          <div>
            <label>Nome do Player: </label>
            <input name="nome" id="nome" type="text" />
            <button id="jogar">Jogar</button>
          </div>
        </div>
    `;

  return modalCadastro;
}

export { Cadastro };
