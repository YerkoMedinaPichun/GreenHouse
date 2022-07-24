export function funcionesFormulario() {
  const d = document;
  const $btnGuardar = d.getElementById("guardar");
  $btnGuardar.addEventListener("click", (e) => {
    e.preventDefault();

    validar();
  });
}

function validar() {
  let nombre, apellido, edad, telefono, email;
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  edad = document.getElementById("edad").value;
  telefono = document.getElementById("telefono").value;
  email = document.getElementById("email").value;

  let validaciones = [];
  //Nombre
  if (nombre.match(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/)) {
    if (document.getElementById("nombre").classList.contains("no-valido")) {
      document.getElementById("nombre").classList.remove("no-valido");
    }
    document.getElementById("nombre").classList.add("valido");
    validaciones[0] = true;
  } else {
    if (document.getElementById("nombre").classList.contains("valido")) {
      document.getElementById("nombre").classList.remove("valido");
    }
    document.getElementById("nombre").classList.add("no-valido");
    validaciones[0] = false;
  }

  //Apellido
  if (apellido.match(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/)) {
    if (document.getElementById("apellido").classList.contains("no-valido")) {
      document.getElementById("apellido").classList.remove("no-valido");
    }
    document.getElementById("apellido").classList.add("valido");
    validaciones[1] = true;
  } else {
    if (document.getElementById("apellido").classList.contains("valido")) {
      Id("apellido").classList.remove("valido");
    }
    document.getElementById("apellido").classList.add("no-valido");
    validaciones[1] = false;
  }

  if (edad > 18 && edad < 99) {
    if (document.getElementById("edad").classList.contains("no-valido")) {
      document.getElementById("edad").classList.remove("no-valido");
    }
    document.getElementById("edad").classList.add("valido");
    validaciones[2] = true;
  } else {
    if (document.getElementById("edad").classList.contains("valido")) {
      Id("edad").classList.remove("valido");
    }
    document.getElementById("edad").classList.add("no-valido");
    validaciones[2] = false;
  }

  if (telefono.match(/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/)) {
    if (document.getElementById("telefono").classList.contains("no-valido")) {
      document.getElementById("telefono").classList.remove("no-valido");
    }
    document.getElementById("telefono").classList.add("valido");
    validaciones[3] = true;
  } else {
    if (document.getElementById("telefono").classList.contains("valido")) {
      Id("telefono").classList.remove("valido");
    }
    document.getElementById("telefono").classList.add("no-valido");
    validaciones[3] = false;
  }

  if (
    email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    if (document.getElementById("email").classList.contains("no-valido")) {
      document.getElementById("email").classList.remove("no-valido");
    }
    document.getElementById("email").classList.add("valido");
    validaciones[4] = true;
  } else {
    if (document.getElementById("email").classList.contains("valido")) {
      Id("email").classList.remove("valido");
    }
    document.getElementById("email").classList.add("no-valido");
    validaciones[4] = false;
  }

  if (
    validaciones[0] === true &&
    validaciones[1] === true &&
    validaciones[2] === true &&
    validaciones[3] === true &&
    validaciones[4] === true
  ) {
    mensaje(nombre, apellido, telefono, email);
    document.getElementById("guardar").disabled = true;
    setTimeout(() => {
      document
        .querySelector("body")
        .removeChild(document.querySelector("body").firstChild);
      document.getElementById("guardar").disabled = false;
      location.reload();
    }, 5000);
  }
}
function mensaje(nombre, apellido, telefono, correo) {
  const $contenedorVentanaMensaje = document.createElement("DIV");
  const $contenedorMensaje = document.createElement("DIV");
  let $mensaje = document.createElement("P");
  $contenedorVentanaMensaje.classList.add("contenedor-ventana-mensaje");
  $contenedorMensaje.classList.add("contenedor-mensaje");
  $mensaje.classList.add("mensaje");
  $mensaje.textContent = `Gracias por cotizar con nosotros ${nombre} ${apellido}, uno de nuestros ejecutivos te llamará al ${telefono} y enviará un correo a ${correo}`;
  $contenedorMensaje.appendChild($mensaje);
  $contenedorVentanaMensaje.appendChild($contenedorMensaje);
  document
    .querySelector("body")
    .insertAdjacentElement("afterbegin", $contenedorVentanaMensaje);
}
