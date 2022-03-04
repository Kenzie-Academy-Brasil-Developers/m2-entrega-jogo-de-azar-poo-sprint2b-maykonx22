const modalVitoria = document.querySelector("#opcao");

function Vitoria() {
  modalVitoria.innerHTML = `
        <div id="parabens">
          <h1>Parabéns você Ganhou</h1>
          <button class="result">OK</button>
        </div>
    `;

  return modalVitoria;
}

export { Vitoria };
