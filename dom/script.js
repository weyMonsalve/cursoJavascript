document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let edad = document.getElementById("edad").value.trim();

        let errorNombre = document.getElementById("error-nombre");
        let errorCorreo = document.getElementById("error-correo");
        let errorEdad = document.getElementById("error-edad");

        let valido = true;

        // Validación del nombre
        if (nombre === "") {
            errorNombre.textContent = "El nombre no puede estar vacío";
            valido = false;
        } else {
            errorNombre.textContent = "";
        }

        // Validación del correo
        let regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexCorreo.test(correo)) {
            errorCorreo.textContent = "Ingrese un correo válido";
            valido = false;
        } else {
            errorCorreo.textContent = "";
        }

        // Validación de la edad
        if (edad === "" || isNaN(edad) || edad < 18) {
            errorEdad.textContent = "Ingrese una edad válida (mayor o igual a 18)";
            valido = false;
        } else {
            errorEdad.textContent = "";
        }

        // Si todo está correcto, mostramos el mensaje
        if (valido) {
            alert("Formulario enviado con éxito");
            formulario.reset(); // Limpia el formulario
        }
    });
});