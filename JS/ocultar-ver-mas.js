// Obtener referencias a los botones y contenedores
const verMasBtn = document.getElementById("verMasBtn");
const verMenosBtn = document.getElementById("verMenosBtn");
const repositorio1 = document.querySelector(".Repositorio1");

// Evento para mostrar los proyectos ocultos
verMasBtn.addEventListener("click", function () {
    const proyectosOcultos = document.querySelector(".Proyectos-ocultos");
    proyectosOcultos.style.display = "block"; // Mostrar proyectos ocultos
    verMasBtn.parentElement.style.display = "none"; // Ocultar contenedor "Repositorio"
    repositorio1.style.display = "block"; // Mostrar contenedor "Repositorio1"
});

// Evento para ocultar los proyectos ocultos
verMenosBtn.addEventListener("click", function () {
    const proyectosOcultos = document.querySelector(".Proyectos-ocultos");
    proyectosOcultos.style.display = "none"; // Ocultar proyectos
    repositorio1.style.display = "none"; // Ocultar contenedor "Repositorio1"
    verMasBtn.parentElement.style.display = "block"; // Mostrar contenedor "Repositorio"
});