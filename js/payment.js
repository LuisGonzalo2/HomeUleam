// Obtener referencias a los elementos del formulario y la tarjeta
const paymentForm = document.getElementById('payment-form');
const cardNumber = document.getElementById('card-number');
const cardHolder = document.getElementById('card-holder');
const expiryDate = document.getElementById('expiry-date');
const cvv = document.getElementById('cvv');
const cardNumberPreview = document.querySelector('.card-number');
const cardHolderPreview = document.querySelector('.card-holder');
const expiryDatePreview = document.querySelector('.expiry-date');
const cvvPreview = document.querySelector('.cvv');
// Función para formatear el número de tarjeta con espacios
function formatCardNumber(value) {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
}
// Función para formatear la fecha de vencimiento con "/"
function formatExpiryDate(value) {
    let formattedValue = value.replace(/\s/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2').replace(/\/$/, '').trim();
    if (formattedValue.length > 5) {
        formattedValue = formattedValue.slice(0, 5);
    }
    return formattedValue;
}
// Función para permitir solo números en un campo de entrada
function allowOnlyNumbers(event) {
    const key = event.which || event.keyCode;
    const keyChar = String.fromCharCode(key);
    const regex = /^[0-9/]$/;
    if (!regex.test(keyChar)) {
        event.preventDefault();
    }
}
// Actualizar la vista previa de la tarjeta mientras se completan los campos
cardNumber.addEventListener('input', function() {
    cardNumber.value = formatCardNumber(cardNumber.value);
    cardNumberPreview.textContent = cardNumber.value;
});
cardNumber.addEventListener('keypress', allowOnlyNumbers);
cardHolder.addEventListener('input', function() {
    cardHolderPreview.textContent = cardHolder.value;
});
expiryDate.addEventListener('input', function() {
    expiryDate.value = formatExpiryDate(expiryDate.value);
    expiryDatePreview.textContent = expiryDate.value;
});
expiryDate.addEventListener('keypress', allowOnlyNumbers);
cvv.addEventListener('input', function() {
    cvvPreview.textContent = cvv.value;
});
cvv.addEventListener('keypress', allowOnlyNumbers);
// Enviar el formulario de pago
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();
// Lógica para procesar el pago con tarjeta
    console.log('Pago realizado con éxito');
// Redirigir a una página de confirmación o mostrar un mensaje de éxito
});