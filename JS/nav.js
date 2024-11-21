function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
  }
  
  function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.remove('active');
    menuIcon.classList.remove('active');
  }
  
  // Mantener el enlace activo y cerrar el menú al hacer clic
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
      // Remover clase 'active' de todos los enlaces
      document.querySelectorAll('.nav-links a').forEach(item => item.classList.remove('active'));
      
      // Agregar clase 'active' al enlace seleccionado
      this.classList.add('active');
      
      // Cerrar el menú en dispositivos móviles
      closeMenu();
    });
  });
  