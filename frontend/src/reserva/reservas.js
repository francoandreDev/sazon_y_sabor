import SessionStorageHelper from "../storage/SessionStorage.js";
import {
  actualizarMesa,
  crearComentario,
  obtenerTodosComentarios,
  obtenerTodosMesas,
  obtenerTodosReservas,
  obtenerUnaMesa,
  obtenerUnUsuario,
  reservarMesa,
} from "../share/callAPI.js";

import Fecha from "../libs/Fecha.js";

const id = SessionStorageHelper.getItem("id");
if (!id) window.location.href = "login.html";

const mesasContainer = document.getElementById("mesasContainer");
const formulario = document.getElementById("reservaForm");
const comentarioFormulario = document.getElementById("comentarioForm");
const comentariosContainer = document.getElementById("comentariosContainer");

let reservas = [];
let mesas = [];
let mesa = null;
let comentarios = [];

obtenerTodosMesas()
  .then((res) => {
    mesas = res;

    renderMesas();
    obtenerTodosReservas()
      .then((re) => {
        reservas = re;

        seleccionarMesa();
        enviarFormularioReserva();
      })
      .catch((error) => {
        reservas = [];
        console.error("Error al obtener las reservas:", error);
      })
      .finally(() => {
        SessionStorageHelper.setItem("reservas", reservas);
      });
  })
  .catch((error) => {
    mesas = [];
  })
  .finally(() => {
    SessionStorageHelper.setItem("mesas", mesas);
  });

obtenerTodosComentarios()
  .then((res) => {
    comentarios = res;
    renderComentarios();
    enviarFormularioComentario();
  })
  .catch((error) => {
    comentarios = [];
  })
  .finally(() => {
    SessionStorageHelper.setItem("comentarios", comentarios);
  });

function renderMesas() {
  mesas.forEach((mesa) => {
    // Crea el div principal para cada mesa
    const mesaDiv = document.createElement("div");
    mesaDiv.className = "mesa m-3";
    mesaDiv.setAttribute("data-mesa", `Mesa ${mesa.id}`);
    mesaDiv.setAttribute("data-capacidad", mesa.capacidad);

    // Crea el div del icono de la mesa
    const iconDiv = document.createElement("div");
    iconDiv.className =
      `mesa-icon mesa-${mesa.estado ? "blue" : "gray"} text-white rounded-circle d-flex align-items-center justify-content-center`;
    iconDiv.style.width = "80px";
    iconDiv.style.height = "80px";
    iconDiv.style.cursor = "pointer";
    iconDiv.textContent = mesa.id;

    // Crea el div del estado
    const estadoDiv = document.createElement("div");
    estadoDiv.className = "estado";
    estadoDiv.textContent = mesa.estado ? "Libre" : "Ocupada";

    // Agrega los elementos al div de la mesa
    mesaDiv.appendChild(iconDiv);
    mesaDiv.appendChild(estadoDiv);

    // Agrega el div de la mesa al contenedor principal
    mesasContainer.appendChild(mesaDiv);
  });
}

function seleccionarMesa() {
  mesasContainer.querySelectorAll("[data-mesa]").forEach((mesaContainer) => {
    mesaContainer.addEventListener("click", () => {
      const mesaId = mesaContainer.querySelector(".mesa-icon").textContent;
      const mesaSeleccionada = document.getElementById("mesaSeleccionada");
      const capacidadMesa = document.getElementById("capacidadMesa");

      obtenerUnaMesa(mesaId)
        .then((res) => {
          mesa = res;
          if (!mesa.estado) return;
          mesaSeleccionada.value = mesa.id;
          capacidadMesa.value = mesa.capacidad;
        })
        .catch((error) => {
          mesa = null;
          mesaSeleccionada.value = "";
          capacidadMesa.value = "";
        });
    });
  });
}

function enviarFormularioReserva() {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (mesa == null) return;
    if (!mesa.estado) return;
    if (document.getElementById("capacidadMesa").value == "") return;
    if (document.getElementById("fechaReserva").value == "") return;
    if (document.getElementById("horaReserva").value == "") return;
    const personasReserva = document.getElementById("capacidadMesa").value;
    const fechaReserva =
      document.getElementById("fechaReserva").value +
      "T" +
      document.getElementById("horaReserva").value;
    const mesaBody = {
      estado: false,
    };
    const reservaBody = {
      personas: personasReserva,
      fecha: fechaReserva,
      estado: "Pendiente",
      idUsuario: id,
      idMesa: mesa.id,
    };
    actualizarMesa(mesa.id, mesaBody)
      .then((res) => {
        mesa = res;
        reservarMesa(reservaBody)
          .then((re) => {
            window.location.href = "reserva.html";
          })
          .catch((error) => {
            console.error("Error al reservar la mesa:", error);
          });
      })
      .catch((error) => {
        mesa = null;
      });
  });
}

function enviarFormularioComentario() {
  comentarioFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const comentario = document.getElementById("mensaje").value;
    if (comentario == "") return;
    const comentarioBody = {
      contenido: comentario,
      fecha: new Date().toISOString(),
      idUsuario: id,
    };
    crearComentario(comentarioBody)
      .then((res) => {
        window.location.href = "reserva.html";
      })
      .catch((error) => {
        console.error("Error al crear el comentario:", error);
      });
  });
}

function renderComentarios() {
  comentarios.forEach((comentario) => {
    // Crea el div principal para el comentario
    const colDiv = document.createElement("div");
    colDiv.className = `comentario mb-3 ${id === comentario.idUsuario ? "text-end" : "text-start"}`;

    // Crea el div con el contenido del comentario
    const cardDiv = document.createElement("div");
    cardDiv.className = "card shadow-sm p-3"; // Tarjeta con sombra y padding

    // Crea el título con el nombre del usuario
    const usuarioH5 = document.createElement("h5");
    usuarioH5.className = "card-title fw-bold";
    obtenerUnUsuario(comentario.idUsuario)
      .then((res) => {
        usuarioH5.textContent = res.nombre + " ~ " + res.rol;
      })
      .catch((error) => {
        usuarioH5.textContent = "Desconocido";
      });

    // Crea el párrafo con el texto del comentario
    const comentarioP = document.createElement("p");
    comentarioP.className = "card-text text-muted";
    comentarioP.textContent =
      comentario.contenido + " - " + Fecha.formatearFecha(comentario.fecha);

    // Agrega los elementos al div de la tarjeta
    cardDiv.appendChild(usuarioH5);
    cardDiv.appendChild(comentarioP);

    // Agrega la tarjeta al div principal de columna
    colDiv.appendChild(cardDiv);

    // Agrega la columna al contenedor principal
    comentariosContainer.appendChild(colDiv);
  });
}
