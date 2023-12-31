import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAlan = new Mago("Alanzoka", 4, "Fogo", 4, 1);
const magaRethe = new Mago("Maethe", 6, "Gelo", 5, 7);
const arquEllie = new Arqueiro("Ellie", 7, 8);
const arqueArmago = new ArqueiroMago("Boquinha de Esgoto", 9, 4, "Ar", 10, 9);
const guerreiroFlin = new Guerreiro("Flin", 6);

const personagens = [
  magoAlan,
  magaRethe,
  arquEllie,
  arqueArmago,
  guerreiroFlin,
];

new PersonagemView(personagens).render();
