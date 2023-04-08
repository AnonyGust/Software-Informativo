const wrapper = document.querySelector('.wrapper');
const loginRaInput = document.getElementById("login_ra");
const registerRaInput = document.getElementById("register_ra");
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnRegistroPopup = document.querySelector('.btnRegistro-popup');
const forgot = document.querySelector('.forgot-password-link');
const backtoLogin = document.querySelector('.back-to-login');
const response = document.getElementById("response")
const base_uri = 'http://localhost:5230/api'

registerLink.addEventListener('click', () => {
  //limpa os campos quando passa pro forms de login
  document.getElementById('login_ra').value = ""
  document.getElementById('login_password').value = ""
  //
  wrapper.classList.add('active')
});

loginLink.addEventListener('click', () => {
  //limpa os campos quando passa pro forms de registro
  document.getElementById('register_name').value = ""
  document.getElementById('register_ra').value = ""
  document.getElementById('register_email').value = ""
  document.getElementById('register_password').value = ""
  document.getElementById('error_login').innerHTML = ""
  document.getElementById('text').innerHTML = ""
  response.innerHTML = ""
  //
  wrapper.classList.remove('active')
});

//ABRE O FORMULÁRIO DE LOGIN ASSIM QUE A PÁGINA É CARREGADA

window.addEventListener('load', () => {
  wrapper.classList.add('active-popup');
});


btnPopup.addEventListener('click', () => {
    //LIMPA OS CAMPOS QUANDO CLICADO NO BOTÃO DE ENTRAR
  document.getElementById('register_name').value = ""
  document.getElementById('register_ra').value = ""
  document.getElementById('register_email').value = ""
  document.getElementById('register_password').value = ""
  document.getElementById('error_login').innerHTML = ""
  document.getElementById('text').innerHTML = ""
  response.innerHTML = ""
  if (wrapper.classList.contains('active-popup')) {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active')
    wrapper.classList.remove('activetwo');
  }
  wrapper.classList.add('active-popup');


});

btnRegistroPopup.addEventListener('click', () => {
  //LIMPA OS CAMPOS QUANDO CLICADO NO BOTÃO DE REGISTRO
  document.getElementById('login_ra').value = ""
  document.getElementById('login_password').value = ""
  if (wrapper.classList.contains('active-popup')) {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    wrapper.classList.remove('activetwo');
  }
  wrapper.classList.add('active-popup');
  wrapper.classList.add('active');

});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup')
});

forgot.addEventListener('click', () => {
  //limpa os campos quando passa para o forms de recuperação de senha
  document.getElementById('login_ra').value = ""
  document.getElementById('login_password').value = ""
  //
  wrapper.classList.add('activetwo')
});

backtoLogin.addEventListener('click', () => {
  document.getElementById('text2').value = ""; // adicionando essa linha de código para limpar o campo
  document.getElementById('text2').innerHTML = ""
  document.getElementById('forgot_email').value = ""
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
  event.preventDefault(); //EVITA que o formulario envie para outra página
  const obj = {
    ra: document.getElementById("login_ra").value,
    password: document.getElementById("login_password").value
  } //Define os valores a serem enviados de acordo com o que o usuario inserir

  const header = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  } //Define o cabeçalho HTTP (necessário pra fazer a requisição e necessário seguir este padrão)

  //Metodo fetch para fazer a requisição para a API
  fetch(`${base_uri}/Login/LoginUser`, header).then((res) => { //Primeiro then é se a requisição retornou sucesso
    res.json().then((resp) => { //res.json transforma a resposta em json
        if (resp.logged) { //se a propriedade logged for true então faça o que tiver dentro do if
          const token = resp.bearer //pegar o token bearer da API
          sessionStorage.setItem("token", token); //joga o token em uma sessão (assinatura de login)
          window.location.href = './pagina adm/index.html';
        } else {
          document.getElementById('error_login').innerHTML = "Usuário ou senha inválido(s)" //Define mensagem no html
        }
      })
      .catch((err) => {
        console.log(err);
      }) //erro tecnico
  }).catch((err) => {
    console.log(err) //erro tecnico
  })
}

//Permite que somente números sejam digitados no campo do RA no LOGIN e REGISTRO
// Adicione o manipulador de eventos "input" para os dois elementos (inputs)
loginRaInput.addEventListener("input", onlyNumbersInputHandler);
registerRaInput.addEventListener("input", onlyNumbersInputHandler);

function onlyNumbersInputHandler(event) {
  // Obtenha o valor inserido no campo de entrada (input)
  const value = event.target.value;

  // Verifique se o valor inserido é um número usando expressões regulares
  const onlyNumbers = /^\d*$/.test(value);

  // Se o valor não for um número, substitua-o por uma string vazia
  if (!onlyNumbers) {
    event.target.value = "";
  }
}