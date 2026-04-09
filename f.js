document.getElementById('btn-celebrate').addEventListener('click', function() {
    const message = document.getElementById('message');
    const button = this;

    // Mostrar el mensaje
    message.classList.remove('hidden');
    message.classList.add('show');

    // Ocultar el botón después del clic
    button.style.display = 'none';

    // Opcional: lanzar confeti en consola o una alerta
    console.log("¡Fiesta de cumpleaños iniciada!");
});

document.getElementById('btn-celebrate').addEventListener('click', function() {
    const message = document.getElementById('message');
    const extraMessage = document.getElementById('extra-message');
    
    // Mostrar mensaje principal (el que ya tenías)
    message.classList.remove('hidden');
    message.classList.add('show');

    // Activar la animación de subida para el nuevo texto
    extraMessage.classList.add('animate-float');

    this.style.display = 'none';
});