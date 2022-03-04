import { Cadastro } from "./models/ModelCadastro.js";
import { PlayerControler } from "./controller/Player.js";
import { Regra } from "./models/ModelRegra.js";
import { Vitoria } from "./models/ModelVitoria.js";
import { Derrota } from "./models/ModelDerrota.js";
import { Empate } from "./models/ModelEmpate.js";

Cadastro();

const modalRegra = document.querySelector("#regras");
const modalCadastro = document.querySelector("#cadastro-player");

//Verificação de Vitoria / Derrota
const verificVic = document.querySelector("#vitoria");
const verificDer = document.querySelector("#derrota");

//Restart
const Contador = document.querySelector("#Contador");

const playerImg = document.querySelector("#player");
const spanPlayer = document.createElement("span");

const botao = document.querySelector("#jogar");
const lista = [];

Contador;

botao.addEventListener("click", (event) => {
  const nome = document.querySelector("#nome");
  const data = {};

  if (lista.length < 1) {
    for (let i = 0; i < lista.length + 1; i++) {
      const { name, value } = nome;
      data[name] = value;
    }
    lista.push(PlayerControler.PlayerCadastro(data));
  }

  modalCadastro.id = "block-none";
  modalCadastro.remove();

  spanPlayer.innerText = lista[0][0]._nome;

  verificVic.innerText = lista[0][0]._vitoria;
  verificDer.innerText = lista[0][0]._derrota;
});

Regra();
const regraBnt = document.querySelector("#regra-bnt");
regraBnt.addEventListener("click", () => {
  modalRegra.remove();
});

const opcao = document.querySelector("#opcao");

const nomeImg = {
  1: "Pedra",
  2: "Papel",
  3: "Tesoura",
};

const imagens = {
  1: "src/img/player-pedra.png",
  2: "src/img/player-papel.png",
  3: "src/img/player-tesoura.png",
};

const jogadasPc = [
  "src/img/pc-pedra.png",
  "src/img/pc-papel.png",
  "src/img/pc-tesoura.png",
];

function escolha() {
  for (let i = 1; i <= 3; i++) {
    const img = document.createElement("img");
    img.src = imagens[i];
    img.id = i;
    img.alt = nomeImg[i];
    opcao.appendChild(img);
  }
}
escolha();

const pcImg = document.querySelector("#computador");

const spanPc = document.createElement("span");

spanPc.innerText = "Computador";
pcImg.appendChild(spanPc);

playerImg.appendChild(spanPlayer);

opcao.addEventListener("click", (event) => {
  const evento = event.target;

  if (evento.id == 1 || evento.id == 2 || evento.id == 3) {
    const pc = Math.floor(Math.random() * jogadasPc.length + 1);

    console.log("pc - " + pc + " / " + "Player - " + evento.id);

    pcImg.innerHTML = "";
    playerImg.innerHTML = "";

    const imgPc = document.createElement("img");

    imgPc.src = jogadasPc[pc - 1];

    pcImg.appendChild(spanPc);
    pcImg.appendChild(imgPc);

    const imgPlayer = document.createElement("img");
    imgPlayer.src = imagens[evento.id];

    spanPlayer.innerText = lista[0][0]._nome;

    playerImg.appendChild(spanPlayer);
    playerImg.appendChild(imgPlayer);

    verificacao(evento.id, pc);
  }
});

function verificacao(player, pc) {
  if (Number(player) === 1 && pc === 3) {
    verificVic.innerText = lista[0][0]._vitoria += 1;
    Vitoria();
    resParabens();
  }
  if (Number(player) === 2 && pc === 1) {
    verificVic.innerText = lista[0][0]._vitoria += 1;
    Vitoria();
    resParabens();
  }
  if (Number(player) === 3 && pc === 2) {
    verificVic.innerText = lista[0][0]._vitoria += 1;
    Vitoria();
    resParabens();
  }

  // PC
  if (pc === 1 && Number(player) === 3) {
    console.log("Pedra Ganhou - PC");
    verificDer.innerText = lista[0][0]._derrota += 1;
    Derrota();
    resDerrota();
  }
  if (pc === 2 && Number(player) === 1) {
    console.log(" Ganhou - PC");
    verificDer.innerText = lista[0][0]._derrota += 1;
    Derrota();
    resDerrota();
  }
  if (pc === 3 && Number(player) === 2) {
    console.log("Tesoura Ganhou - PC");
    verificDer.innerText = lista[0][0]._derrota += 1;
    Derrota();
    resDerrota();
  }

  if (pc === Number(player)) {
    console.log("Empatou!");
    verificVic.innerText = lista[0][0]._vitoria;
    verificDer.innerText = lista[0][0]._derrota;
    Empate();
    resEmpate();
  }
}

function resParabens() {
  const parabens = document.querySelector("#parabens");

  const resultado = document.querySelector(".result");
  resultado.addEventListener("click", (event) => {
    parabens.remove();
    escolha();
  });
}

function resDerrota() {
  const derrot = document.querySelector("#derrot");

  const resultado = document.querySelector(".result");
  resultado.addEventListener("click", (event) => {
    derrot.remove();
    escolha();
  });
}

function resEmpate() {
  const empate = document.querySelector("#empate");

  const resultado = document.querySelector(".result");
  resultado.addEventListener("click", (event) => {
    empate.remove();
    escolha();
  });
}
