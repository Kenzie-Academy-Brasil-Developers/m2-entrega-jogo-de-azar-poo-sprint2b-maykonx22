import { Player } from "../models/Player.js";
import { db } from "../db/db.js";

class PlayerControler {
  static PlayerCadastro(Cadastro) {
    const newPlayer = new Player(Cadastro);
    db.dbPlayer.push(newPlayer);

    return db.dbPlayer;
  }
}

export { PlayerControler };
