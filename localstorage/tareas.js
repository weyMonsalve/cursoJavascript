// Función para obtener las tareas guardadas
function obtenerTareas() {
    let tareas = localStorage.getItem("tareas");
    return tareas ? JSON.parse(tareas) : []; // Si hay tareas, convierte el texto a array, si no, devuelve un array vacío
}

// Función para mostrar las tareas en el HTML
function mostrarTareas() {
    let listaTareas = document.getElementById("listaTareas");
    listaTareas.innerHTML = ""; // Limpiar lista antes de agregar tareas

    let tareas = obtenerTareas();

    tareas.forEach((tarea, index) => {
        let li = document.createElement("li");
        li.textContent = tarea;

        // Asignar un color aleatorio a cada tarea
        li.style.backgroundColor = obtenerColorAleatorio();

        // Botón para eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("eliminar");
        botonEliminar.onclick = function() {
            eliminarTarea(index);
        };

        // Botón para editar
        let botonEditar = document.createElement("button");
        botonEditar.textContent = "✏️ Editar";
        botonEditar.classList.add("editar");
        botonEditar.onclick = function() {
            editarTarea(index);
        };

        li.appendChild(botonEditar);
        li.appendChild(botonEliminar);
        listaTareas.appendChild(li);
    });
}

// Función para obtener un color aleatorio
function obtenerColorAleatorio() {
    let colores = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF"];
    return colores[Math.floor(Math.random() * colores.length)];
}

// Función para agregar una tarea nueva
function agregarTarea() {
    let input = document.getElementById("nuevaTarea");
    let tarea = input.value.trim();

    if (tarea === "") {
        alert("Por favor, ingresa una tarea");
        return;
    }

    let tareas = obtenerTareas();
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas)); // Guardar en LocalStorage

    input.value = ""; // Limpiar el input
    mostrarTareas(); // Actualizar lista
}

// Función para eliminar una tarea
function eliminarTarea(index) {
    let tareas = obtenerTareas();
    tareas.splice(index, 1); // Eliminar la tarea del array
    localStorage.setItem("tareas", JSON.stringify(tareas)); // Guardar cambios
    mostrarTareas(); // Actualizar lista
}

// Función para editar una tarea
function editarTarea(index) {
    let tareas = obtenerTareas();
    let nuevaTarea = prompt("Edita tu tarea:", tareas[index]);

    if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
        tareas[index] = nuevaTarea.trim();
        localStorage.setItem("tareas", JSON.stringify(tareas));
        mostrarTareas();
    }
}

// Mostrar las tareas al cargar la página
document.addEventListener("DOMContentLoaded", mostrarTareas);