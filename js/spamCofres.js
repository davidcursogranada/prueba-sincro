let oro = 0;
function spamDivs(containerId, count = 1) {
  const container = document.getElementById(containerId); // 1
  const { offsetWidth: width, offsetHeight: height } = container;
  let orocantidad = document.getElementById("cantidadOro");
  for (let i = 0; i < count; i++) {
    // 3
    const chest = document.createElement("div"); // 4
    chest.className = "chest";
    chest.style.left = Math.random() * (width - 30) + "px"; // 9
    chest.style.top = Math.random() * (height + 500) + "px"; // 10

    chest.style.transition = "0.3s"; // 12
    container.appendChild(chest); // 13
    chest.addEventListener("click", () => {
      oro += 1;
      chest.remove();
      console.log("cofre eliminado oro +1");
      console.log({ oro });
      orocantidad.innerHTML = oro;
      const cofres = container.querySelectorAll(".chest"); // devuelve NodeList
      if (cofres.length > 10) {
        console.log("Has perdido");
        die(); // si quieres detener el juego
      }
    });
  }
}
// uso
setInterval(() => {
  spamDivs("cofres-container", 2);
}, 1000); // crea cofres después de 5 segundos
