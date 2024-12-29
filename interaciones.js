function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
}

// Cerrar menú al hacer clic fuera de él
document.addEventListener("click", (event) => {
  const menu = document.querySelector(".menu");
  if (!menu.contains(event.target) && menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
});
