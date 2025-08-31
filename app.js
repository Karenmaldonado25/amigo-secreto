// Lista donde guardamos los nombres
let amigos = [];

// Función para agregar nombres
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarLista();
}

// Mostrar la lista en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const resultado = amigos[indice];

  const resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `🎉 El amigo secreto es: <strong>${resultado}</strong>`;
}