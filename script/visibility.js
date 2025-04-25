function visibility() {
    const eye = document.querySelector("span.visibility");
    const passwordField = document.getElementById("password"); // Pega o campo de senha
    
    if (passwordField.type === "password") {
        // Se a senha está oculta, mostra e muda o ícone para "visibility" (olho aberto)
        passwordField.type = "text";
        eye.innerText = "visibility_off";
    } else {
        // Se a senha está visível, oculta e muda o ícone para "visibility_off" (olho fechado)
        passwordField.type = "password";
        eye.innerText = "visibility";
    }
}