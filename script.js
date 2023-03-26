const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnRegistroPopup = document.querySelector('.btnRegistro-popup');
const forgot = document.querySelector('.forgot-password-link');
const backtoLogin = document.querySelector('.back-to-login');
const response = document.getElementById("response")
const base_uri = 'http://localhost:5230/api'
//ABACATE
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

forgot.addEventListener('click', () => {
  wrapper.classList.add('activetwo')
});

backtoLogin.addEventListener('click', () => {
  wrapper.classList.remove('activetwo')
});



//INTEGRACAO BASICA API

function onRegisterNewUser(){
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
  }).catch((err) => console.error(`O erro foi esse ${err}`))
}


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
  }//Define o cabeçalho HTTP (necessário pra fazer a requisição e necessário seguir este padrão)

  //Metodo fetch para fazer a requisição para a API
  fetch(`${base_uri}/Login/LoginUser`, header).then((res) => { //Primeiro then é se a requisição retornou sucesso
    res.json().then((resp) => { //res.json transforma a resposta em json
      if(resp.logged){ //se a propriedade logged for true então faça o que tiver dentro do if
        const token = resp.bearer //pegar o token bearer da API
        sessionStorage.setItem("token", token); //joga o token em uma sessão (assinatura de login)
        window.location.href = './pagina adm/index.html';
      }else{
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