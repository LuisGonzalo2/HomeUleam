const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (email.value.trim() === '') {
        mostrarError(email, 'Por favor, ingrese su correo electrónico o nombre de usuario');
        return;
    }
    if (password.value.trim() === '') {
        mostrarError(password, 'Por favor, ingrese su contraseña');
        return;
    }

    mostrarMensaje('Iniciando sesión...', 'exito');

});

function mostrarError(campo, mensaje) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = mensaje;
    campo.parentElement.insertBefore(errorElement, campo.nextSibling);
}

function mostrarMensaje(mensaje, tipo) {
    limpiarMensajes();
    const mensajeElement = document.createElement('div');
    mensajeElement.className = `mensaje ${tipo}`;
    mensajeElement.textContent = mensaje;
    form.appendChild(mensajeElement);
}

function limpiarMensajes() {
    const mensajes = document.querySelectorAll('.mensaje, .error');
    mensajes.forEach(mensaje => mensaje.remove());
}