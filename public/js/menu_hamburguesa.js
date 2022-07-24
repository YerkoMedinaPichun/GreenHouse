export default function funcionesMenuHamburguer() {
  const d = document;
  /*
  Detecta en que tamaño de pantalla se encuentra el usuario
    (menor a 768px) (de 768px a 1023px) (de 1024px en adelante)
  */
  configuracionInicial(d, "contenedor-boton-menu", "menu");

  /*
    Funcion del menu de hamburguesa
  */
  hamburguerMenu(d, "boton-menu", "menu", "enlace");

  /*Detecta si se agranda o encoje la pantalla, si es menor a 768px
    muestra el menu de hamburguesa, si es superior muestra una barra de navegación normal
  */
  resize(d, "contenedor-boton-menu", "boton-menu", "menu");
}

function hamburguerMenu(d, botonMenu, menu, menuLink) {
  d.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      if (
        e.target.matches(`#${botonMenu}`) ||
        e.target.matches(".boton-menu--icono")
      ) {
        d.getElementById(botonMenu).classList.toggle("boton-menu--encendido");
        d.getElementById(menu).classList.toggle("menu--encendido");
      }

      if (e.target.matches(`.${menuLink}`)) {
        d.getElementById(botonMenu).classList.remove("boton-menu--encendido");
        d.getElementById(menu).classList.remove("menu--encendido");
      }
    }
  });
}

function resize(d, contenedorBtnMenu, botonMenu, menu) {
  window.addEventListener("resize", (e) => {
    if (window.innerWidth >= 768) {
      if (!d.getElementById(botonMenu).classList.contains("ocultar")) {
        d.querySelector(`.${contenedorBtnMenu}`).classList.add("ocultar");
      }
      if (!d.getElementById(menu).classList.contains("menu--encendido")) {
        d.getElementById(menu).classList.add("menu--encendido");
      }
    }
    if (window.innerWidth < 768) {
      if (
        d.querySelector(`.${contenedorBtnMenu}`).classList.contains("ocultar")
      ) {
        d.querySelector(`.${contenedorBtnMenu}`).classList.remove("ocultar");
      }
      /*
        Si el contenedorBtnMenu No tiene la clase "boton-menu--encendido" entonces,
        quiere decir que el contenedorBtnMenu está apagado, por lo tanto, si está apagado, compruebo si el menu está encendido. Si el contenedorBtnMenu está apagado y el menu está encendido, entonces "apago el menu"
      */
      if (
        !d.getElementById(botonMenu).classList.contains("boton-menu--encendido")
      ) {
        if (d.getElementById(menu).classList.contains("menu--encendido")) {
          d.getElementById(menu).classList.remove("menu--encendido");
        }
      }
      /*
        Si el menu tiene la clase "menu--encendido" entonces,
        quiere decir que el menu está visible, por lo tanto, si está encendido, compruebo si el contenedorBtnMenu está apagado. Si el menu está encendido y el btnMenu está apagado, entonces "enciendo el botonMenu"
      */

      if (d.getElementById(menu).classList.contains("menu--encendido")) {
        if (
          !d.getElementById(botonMenu).classList.add("boton-menu--encendido")
        ) {
          d.getElementById(botonMenu).classList.add("boton-menu--encendido");
        }
      }
    }
  });
}

function configuracionInicial(d, contenedorBtnMenu, menu) {
  if (window.innerWidth >= 768) {
    if (
      !d.querySelector(`.${contenedorBtnMenu}`).classList.contains("ocultar")
    ) {
      d.querySelector(`.${contenedorBtnMenu}`).classList.add("ocultar");
    }

    /*
        Si el dispositivo es mayor a 768px y no posee la clase "menu--encendido", entonces se la agregamos
      */
    if (!d.getElementById(menu).classList.contains("menu--encendido")) {
      d.getElementById(menu).classList.add("menu--encendido");
    }
  }
  if (window.innerWidth < 768) {
    if (d.getElementById(menu).classList.contains("menu--encendido")) {
      if (
        d.querySelector(`.${contenedorBtnMenu}`).classList.contains("ocultar")
      ) {
        d.querySelector(`.${contenedorBtnMenu}`).classList.remove("ocultar");
      }
    }
  }
}
