let listaTareas = [];

const tareasDiv = document.getElementById("tareas");
const inputTarea = document.getElementById("nuevaTarea");

class Tarea {
  constructor(descripcion, completada = false) {
    this.descripcion = descripcion;
    this.completada = completada;
  }
}

function agregarTarea() {
  const descripcion = inputTarea.value.trim();
  if (descripcion === "") return;

  const nueva = new Tarea(descripcion);
  listaTareas.push(nueva);
  inputTarea.value = "";
  mostrarTareas();
}

function mostrarTareas() {
  tareasDiv.innerHTML = "";

  listaTareas.forEach((tarea, index) => {
    const div = document.createElement("div");
    div.className = "tarea";
    div.innerHTML = `
      <input type="checkbox" ${tarea.completada ? "checked" : ""} onclick="toggleCompletada(${index})" />
      <span class="${tarea.completada ? "completada" : ""}">${tarea.descripcion}</span>
      <button onclick="editarTarea(${index})">✏️</button>
      <button onclick="eliminarTarea(${index})">🗑️</button>
    `;
    tareasDiv.appendChild(div);
  });
}

function toggleCompletada(index) {
  listaTareas[index].completada = !listaTareas[index].completada;
  mostrarTareas();
}

function eliminarTarea(index) {
  listaTareas.splice(index, 1);
  mostrarTareas();
}

function eliminarTareaPorPosicion() {
  const pos = parseInt(document.getElementById("eliminarPos").value);
  if (!isNaN(pos) && pos >= 1 && pos <= listaTareas.length) {
    eliminarTarea(pos - 1);
    document.getElementById("eliminarPos").value = "";
  }
}

function editarTarea(index) {
  const nuevaDesc = prompt("Editar descripción:", listaTareas[index].descripcion);
  if (nuevaDesc !== null && nuevaDesc.trim() !== "") {
    listaTareas[index].descripcion = nuevaDesc.trim();
    mostrarTareas();
  }
}
