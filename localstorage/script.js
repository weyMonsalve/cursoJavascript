// Función para guardar el nombre en LocalStorage

function guardarNombre() {
    let nombre = document.getElementById("nombre").value;
    if (nombre.trim() !== "") {
        localStorage.setItem("usuario", nombre);
        mostarMensaje();
    } else {
        alert("Por favor, ingrese un nombre valido.");
    }
}

// Función para mostrar el nombre guardado
function mostarMensaje() {
    let nombreGuardado = localStorage.getItem("usuario");
    if (nombreGuardado) {
        document.getElementById("mensaje").innerText = `¡Bienvenido, ${nombreGuardado}!`;
    }
}

// Llamamos a la función al cargar la página para mostrar el nombre si ya está guardado
document.addEventListener("DOMContentLoaded", mostrarMensaje);



function guardarCorreo() {
    let correo = document.getElementById("correo").value;

    // Expresión regular para validar el formato de correo
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo.trim() === "") {
        alert("Por favor, ingrese una dirección de correo.");
    } else if (!regexCorreo.test(correo)) {
        alert("Por favor, ingrese una dirección de correo válida.");
    } else {
        localStorage.setItem("correo", correo);
        mostrarMensaje();
    }
}

function mostrarMensaje() {
    let correoGuardado = localStorage.getItem("correo");
    let mensajeElemento = document.getElementById("mensaje");

    if (correoGuardado && mensajeElemento) {
        mensajeElemento.innerText = `¡Bienvenido, ${correoGuardado}!`;
    }
}

// Esperar a que la página cargue antes de ejecutar la función
document.addEventListener("DOMContentLoaded", mostrarMensaje);