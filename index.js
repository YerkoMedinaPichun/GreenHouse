import { funcionesFormulario } from "./public/js/formulario.js";
import funcionesMenuHamburguer from "./public/js/menu_hamburguesa.js";
import { funcionesSliderCarrusel } from "./public/js/slider.js";
import { valorUf } from "./public/js/valor_uf.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  funcionesMenuHamburguer();
  funcionesSliderCarrusel();
  valorUf();
  funcionesFormulario();
});
