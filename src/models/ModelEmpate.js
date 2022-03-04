const modalEmpate = document.querySelector("#opcao");

function Empate() {
  modalEmpate.innerHTML = `
        <div id="empate">
          <h1>Você Empatou! Vamos Tentar de Novo.</h1>
          <button class="result">OK</button>
        </div>
    `;

  return modalEmpate;
}

export { Empate };
