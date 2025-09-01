let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; 
    actualizarLista(); 
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = amigos[indiceAleatorio];

    let mostrarResultado = document.getElementById("resultado");
    mostrarResultado.innerHTML = `🎉 El amigo secreto es: <strong>${resultado}</strong>`;
  }

function limpiarLista() {
    amigos = [];

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    let mostrarResultado = document.getElementById("resultado");
    mostrarResultado.innerHTML = "";
}