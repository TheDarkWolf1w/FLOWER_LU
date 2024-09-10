
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  // Archivo: script.js

  function aceptar() {
    alert("Sabia que aceptarias Prometo hacerte feliz :3 y quererte siempre :3  te quiero <3 mi princesa <3 .");
}

function rechazar() {
    // Seleccionar el botón de rechazar
    var botonRechazar = document.querySelector(".btn-decline");

    // Generar una nueva posición aleatoria
    var randomX = Math.floor(Math.random() * (window.innerWidth - botonRechazar.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - botonRechazar.offsetHeight));

    // Aplicar las nuevas coordenadas al botón
    botonRechazar.style.position = "absolute";
    botonRechazar.style.left = randomX + "px";
    botonRechazar.style.top = randomY + "px";
}

