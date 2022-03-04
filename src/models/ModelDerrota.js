const modalDerrota = document.querySelector("#opcao");

function Derrota() {
  modalDerrota.innerHTML = `
        <div id="derrot">
          <h1>Você Perdeu! Vamos Tentar de Novo.</h1>
          <button class="result">OK</button>
        </div>
    `;

  return modalDerrota;
}

export { Derrota };
