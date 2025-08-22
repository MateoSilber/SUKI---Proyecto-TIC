const emailInput = document.getElementById('email');
const loginButton = document.getElementById('login-btn');
const emailError = document.getElementById('email-error');

loginButton.addEventListener('click', function() {
    // Limpia errores anteriores
    emailError.textContent = '';
    emailInput.style.borderColor = ''; // Restablece el borde

    if (!isValidEmail(emailInput.value)) { // Una función de validación personalizada
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
        emailInput.style.borderColor = 'red'; // Resalta el campo
    } else {
        // La información es válida, procede con el inicio de sesión
        console.log('Información válida, iniciando sesión...');
        // Aquí puedes hacer el envío del formulario o realizar la acción
    }
});

// Función de validación de ejemplo
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}