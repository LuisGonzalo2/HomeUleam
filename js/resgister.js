// Obtener referencias a los elementos del formulario
const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const cedula = document.getElementById('cedula');
const email = document.getElementById('email');
const nickname = document.getElementById('nickname');
const genero = document.getElementById('genero');
const password = document.getElementById('password');
const confirmacion = document.getElementById('confirmacion');

// Agregar un evento de escucha al formulario cuando se envíe
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Validar los campos del formulario
    if (nombre.value.trim() === '') {
        mostrarError(nombre, 'Por favor, ingrese su nombre');
        return;
    }

    if (cedula.value.trim() === '') {
        mostrarError(cedula, 'Por favor, ingrese su cédula');
        return;
    }

    if (email.value.trim() === '') {
        mostrarError(email, 'Por favor, ingrese su correo electrónico');
        return;
    }

    if (nickname.value.trim() === '') {
        mostrarError(nickname, 'Por favor, ingrese un nickname');
        return;
    }

    if (genero.value === '') {
        mostrarError(genero, 'Por favor, seleccione su género');
        return;
    }

    if (password.value.trim() === '') {
        mostrarError(password, 'Por favor, ingrese una contraseña');
        return;
    }

    if (confirmacion.value.trim() === '') {
        mostrarError(confirmacion, 'Por favor, confirme su contraseña');
        return;
    }

    if (password.value !== confirmacion.value) {
        mostrarError(confirmacion, 'Las contraseñas no coinciden');
        return;
    }

    // Si todos los campos son válidos, enviar el formulario
    form.submit();
});

// Función para mostrar un mensaje de error
function mostrarError(campo, mensaje) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = mensaje;
    campo.parentElement.insertBefore(errorElement, campo.nextSibling);
}