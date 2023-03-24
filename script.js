const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnRegistroPopup = document.querySelector('.btnRegistro-popup');
const response = document.getElementById("response")
const base_uri = 'http://localhost:5230/api'

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active')
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active')
});


btnPopup.addEventListener('click', () => {
  if (wrapper.classList.contains('active-popup')) {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active')
    wrapper.classList.remove('activetwo')
  } else {
    wrapper.classList.add('active-popup');
    
  }
});

btnRegistroPopup.addEventListener('click', () => {
  if (wrapper.classList.contains('active-popup')) {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active')
    wrapper.classList.remove('activetwo')

  } else {
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
  }
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup')
});

//formulário de esqueceu senha

const forgot = document.querySelector('.forgot-password-link');
const backtoLogin = document.querySelector('.back-to-login');

forgot.addEventListener('click', () => {
  wrapper.classList.add('activetwo')
});

backtoLogin.addEventListener('click', () => {
  wrapper.classList.remove('activetwo')
});


//INTEGRACAO BASICA API

//FUNÇÃO PARA REGISTRO
function onRegisterNewUser() {
  const obj = {
    password: document.getElementById("register_password").value,
    name: document.getElementById("register_name").value,
    cpf: "111.111.111-11",
    ra: document.getElementById("register_ra").value,
    email: document.getElementById("register_email").value,
    type: 'Teste'
  }
  const header = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  }

  fetch(`${base_uri}/Login/CreateUser`, header).then(() => {
    response.innerHTML = "Cadastrado com sucesso"
  }).catch(() => console.error("Erro"))
}

function onLoginUser() {

}


//FUNÇÃO PARA LOGIN

function onLoginUser(event) {
  event.preventDefault(); // evita que o formulário seja enviado

  const obj = {
    email: document.getElementById("login_email").value,
    password: document.getElementById("login_password").value
  }

  const header = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  }

  fetch(`${base_uri}/Login/LoginUser`, header)
    .then(response => {
      if (response.ok) {
        window.location.href = "./pagina_adm/index.html";
      } else {
        console.error("Erro ao fazer login");
      }
    })
    .catch(() => console.error("Erro ao fazer login"));
}
