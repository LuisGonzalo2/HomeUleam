const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const cedula = document.getElementById('cedula');
const email = document.getElementById('email');
const nickname = document.getElementById('nickname');
const genero = document.getElementById('genero');
const password = document.getElementById('password');
const confirmacion = document.getElementById('confirmacion');
const passwordInput = document.getElementById('password');
const passwordBar = document.getElementById('password-bar');
const passwordBarMessage = document.getElementById('password-bar-message');

passwordInput.addEventListener('input', updatePasswordBar);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (nombre.value.trim() === '') {
        mostrarError(nombre, 'Por favor, ingrese su nombre');
        return;
    }

    if (cedula.value.trim() === '') {
        mostrarError(cedula, 'Por favor, ingrese su cédula');
        return;
    } else if (cedula.value.length !== 13) {
        mostrarError(cedula, 'La cédula debe tener exactamente 13 dígitos');
        return;
    } else if (!/^[0-9]+$/.test(cedula.value)) {
        mostrarError(cedula, 'La cédula solo puede contener números');
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

    form.submit();
});

function mostrarError(campo, mensaje) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = mensaje;
    campo.parentElement.insertBefore(errorElement, campo.nextSibling);
}

function checkPasswordBar(password) {
    const weakPassword = /^(?=.*[a-z])[a-z0-9]{6,}$/;
    const mediumPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (strongPassword.test(password)) {
        return { strength: 'strong', message: 'Contraseña fuerte' };
    } else if (mediumPassword.test(password)) {
        return { strength: 'medium', message: 'Contraseña media' };
    } else if (weakPassword.test(password)) {
        return { strength: 'weak', message: 'Contraseña débil' };
    } else {
        return { strength: '', message: '' };
    }
}

function updatePasswordBar() {
    const passwordValue = passwordInput.value;
    const { strength, message } = checkPasswordBar(passwordValue);

    passwordBar.classList.remove('weak', 'medium', 'strong');
    passwordBarMessage.textContent = '';

    if (passwordValue.length > 0) {
        passwordBar.classList.add(strength);
        passwordBarMessage.textContent = message;
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.textContent = '👁️';
    } else {
        passwordInput.type = 'password';
        passwordToggle.textContent = '👁️';
    }
}