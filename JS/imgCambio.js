function changeLogoOnResize() {
    const logoImg = document.getElementById('logoImg');
    // Cambiamos el logo basado en el tamaño de la ventana
    if (window.innerWidth >= 320 && window.innerWidth <= 480) {
        logoImg.src = 'https://github.com/jeanchongdev/img-proyect/blob/main/13_l_hihumi.png?raw=true'; // Cambia esta URL por la del nuevo logo
    } else {
        logoImg.src = 'https://github.com/jeanchongdev/img-proyect/blob/main/Logo.png?raw=true';
    }
}

// Ejecuta la función al cargar el DOM para prevenir el parpadeo inicial
document.addEventListener('DOMContentLoaded', changeLogoOnResize);

// Vuelve a ejecutar la función al cambiar el tamaño de la ventana
window.addEventListener('resize', changeLogoOnResize);
