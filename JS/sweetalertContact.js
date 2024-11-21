document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario de forma predeterminada
    
    // Enviar el formulario de manera asincrónica
    fetch(event.target.action, {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                title: '¡Mensaje enviado!',
                text: 'Gracias por contactarme, te responderé pronto.',
                icon: 'success',
                timer: 3000,
                showConfirmButton: false,
                customClass: {
                    popup: 'custom-alert',
                    title: 'custom-title',
                    icon: 'custom-icon'
                }
            });

            // Limpia el formulario después de 3 segundos
            setTimeout(() => {
                document.getElementById("contactForm").reset();
            }, 3000);
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.',
                icon: 'error',
                timer: 3000,
                showConfirmButton: false
            });
        }
    }).catch(error => {
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.',
            icon: 'error',
            timer: 3000,
            showConfirmButton: false
        });
    });
});