import { db } from "../db/db.js";

class Player {
  constructor({ nome }) {
    this._id = Player.id();
    this._nome = nome;
    this._vitoria = 0;
    this._derrota = 0;
  }

  get nome() {
    return this._nome;
  }

  set nome(name) {
    return (this._nome = name);
  }

  static id() {
    let maxId = 0;

    db.dbPlayer.forEach((element) => {
      if (element._id > maxId) {
        maxId = element._id;
      }
    });

    return maxId + 1;
  }
}

export { Player };
