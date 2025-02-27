// Verifica si el dispositivo es táctil
const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Solo aplica el efecto en dispositivos no táctiles
if (!isTouchDevice()) {
    const cursor = document.getElementById('cursorr');

// Array de colores para las estrellas
const colors = ['#25E7AF'];

    document.addEventListener('mousemove', (e) => {
    // Mueve el cursor personalizado
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    // Crea las "estrellas" con colores aleatorios
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
    star.style.backgroundColor = colors[Math.
    floor(Math.random() * colors.length)]; 
    // Color aleatorio
    document.body.appendChild(star);

    // Elimina la estrella después de un tiempo
    setTimeout(() => {
        star.remove();
    }, 1000);
});
    } else {
    // Opcional: puedes establecer un
    //  cursor normal para dispositivos táctiles
    document.body.style.cursor = 'default';
}
