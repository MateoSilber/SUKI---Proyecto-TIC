

const emailValido = "test@mail.com";
const contraseñaValida = "1234";

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    let email = document.getElementById("email").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();
    let mensaje = document.getElementById("mensaje");

    
    if (email === "" || contraseña === "") {
        mensaje.textContent = "⚠️ Por favor, completa todos los campos.";
        mensaje.style.color = "red";
        return;
    }


    if (email === emailValido && contraseña === contraseñaValida) {
        window.location.href = "../menu principal";
    } else {
        mensaje.textContent = "❌ Usuario o contraseña incorrectos.";
        mensaje.style.color = "red";
    }
});
