const input = document.getElementById("ipasswd");
const wrapper = document.querySelector(".passwd");

input.addEventListener("focus", () => {
    wrapper.classList.add("focado");
});

input.addEventListener("blur", () => {
    wrapper.classList.remove("focado");
});


function visibility() {
    const eye = document.querySelector("span.visibility");
    const passwordField = document.getElementById("ipasswd"); // Agora pega o ID certo

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eye.innerText = "visibility_off";
    } else {
        passwordField.type = "password";
        eye.innerText = "visibility";
    }
}

