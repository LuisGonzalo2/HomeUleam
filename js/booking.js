// Obtener referencias a los elementos del formulario
const bookingForm = document.getElementById('booking-form');
const paymentMethod = document.getElementById('payment-method');
const nextBtn = document.getElementById('next-btn');

// Deshabilitar el botón "Siguiente" al cargar la página
nextBtn.disabled = true;

// Habilitar el botón "Siguiente" cuando se completen todos los campos requeridos
bookingForm.addEventListener('change', function() {
    const requiredFields = bookingForm.querySelectorAll('[required]');
    let allFieldsFilled = true;

    requiredFields.forEach(function(field) {
        if (!field.value) {
            allFieldsFilled = false;
        }
    });

    nextBtn.disabled = !allFieldsFilled;
});

// Redirigir a la página de pago con tarjeta cuando se hace clic en "Siguiente"
nextBtn.addEventListener('click', function() {
    if (paymentMethod.value === 'tarjeta') {
        window.location.href = 'payment.html';
    } else {
        // Lógica para otros métodos de pago
        console.log('Método de pago seleccionado:', paymentMethod.value);
    }
});