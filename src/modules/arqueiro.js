import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
  static tipo = "Arqueiro";
  static descricao =
    "A flecha deixa de pertencer ao arqueiro, quando abandona o arco!";
  destreza;

  constructor(nome, destreza) {
    super(nome);
    this.destreza = destreza;
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return "Dominador de Fechas";
    }
    return super.obterInsignia();
  }
}
