import { obtenerTodosUsuarios } from "../share/callAPI.js";
import SessionStorageHelper from "../storage/SessionStorage.js";

let usuarios = []

obtenerTodosUsuarios()
  .then((res) => {
    usuarios = res;
  })
  .catch((error) => {
    usuarios = [];
  })
  .finally(() => {
    SessionStorageHelper.setItem("usuarios", usuarios);
  });

const formElement = document.getElementById("loginForm");
const button = document.getElementById("btnLogin");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const title = document.getElementsByClassName("form_title")[0];
const emailLabel = document.getElementsByClassName("form_label")[0];
const passwordLabel = document.getElementsByClassName("form_label")[1];
const texto = document.getElementById("texto");

const id = SessionStorageHelper.getItem("id");
if (id) {
  title.textContent = "Ya has iniciado sesión";
  button.textContent = "Salir";
  emailInput.disabled = true;
  passwordInput.disabled = true;
  emailLabel.style.display = "none";
  passwordLabel.style.display = "none";
  emailInput.style.display = "none";
  passwordInput.style.display = "none";
  texto.style.display = "none";
} else {
  title.textContent = "Iniciar Sesión";
  button.textContent = "Ingresar";
  emailInput.disabled = false;
  passwordInput.disabled = false;
  emailLabel.style.display = "block";
  passwordLabel.style.display = "block";
  emailInput.style.display = "block";
  passwordInput.style.display = "block";
  texto.style.display = "block";
}

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = SessionStorageHelper.getItem("id");
  if (id) logout();
  else login();
});

function login() {
  const usuarios = SessionStorageHelper.getItem("usuarios");

  const email = emailInput.value;
  const password = passwordInput.value;

  if (usuarios.length === 0) {
    alert("No hay usuarios registrados.");
    return;
  }

  usuarios.forEach((usuario) => {
    if (usuario.correo === email && usuario["contraseña"] === password) {
      alert("Bienvenido, " + usuario.nombre);
      SessionStorageHelper.setItem("id", usuario.id);

      emailInput.value = "";
      passwordInput.value = "";

      button.textContent = "Cerrar Sesión";

      if (usuario.rol === "admin") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "user.html";
      }
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
}

function logout() {
  SessionStorageHelper.clear();
  button.textContent = "Ingresar";
  window.location.href = "login.html";
}
