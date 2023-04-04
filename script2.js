//FORMULÁRIO DE REGISTRO
const emailInput = document.querySelector("#register_email");
const text = document.getElementById('text');

emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    if (email.length === 0) {
        emailInput.classList.remove('invalid');
        text.innerHTML = "";
    } else if (!isValidEmail(email)) {
        emailInput.classList.add('invalid');
        text.innerHTML = "Email inválido";
        text.style.color = "#ff0000"
    } else {
        emailInput.classList.remove('invalid');
        emailInput.setCustomValidity('');
        text.innerHTML = "";
        text.style.color = "#00ff00"
    }
});

//FORMULÁRIO DE ESQUECEU SENHA
// função para verificar se o email inserido é válido
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var text2 = document.getElementById('text2');
    return emailRegex.test(email);
}

// adicionar evento de escuta para o formulário de recuperação de senha
const forgotPasswordForm = document.querySelector("#forgot-password-form");

forgotPasswordForm.addEventListener("submit", function (event) {
    event.preventDefault(); // evitar a submissão padrão do formulário

    const forgotEmailInput = document.querySelector("#forgot_email");
    const email = forgotEmailInput.value;

    if (!isValidEmail(email)) {
        forgotEmailInput.classList.add('invalid');
        text2.innerHTML = "Email inválido";
        text2.style.color = "#ff0000"
    } else {
        // código para enviar email de verificação ao endereço de email fornecido pelo usuário
        // (coloque seu código de envio de email aqui)
        alert("Email de verificação enviado com sucesso!"); // exemplo de mensagem de sucesso
    }
});

// adicionar evento de escuta para o campo de email do formulário de recuperação de senha
const forgotEmailInput = document.querySelector("#forgot_email");

forgotEmailInput.addEventListener('input', () => {
    const email = forgotEmailInput.value;
    if (email.length === 0) {
        forgotEmailInput.classList.remove('invalid');
        text2.innerHTML = "";
    } else if (!isValidEmail(email)) {
        forgotEmailInput.classList.add('invalid');
        text2.innerHTML = "Email inválido";
        text2.style.color = "#ff0000"
    } else {
        forgotEmailInput.classList.remove('invalid');
        text2.innerHTML = "";
        text2.style.color = "#00ff00"
    }
});