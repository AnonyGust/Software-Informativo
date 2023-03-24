const eventosBtn = document.getElementById("eventos");
const avisosBtn = document.getElementById("avisos");
const cronogramasBtn = document.getElementById("cronogramas");

const eventosForm = document.getElementById("eventos-form");
const avisosForm = document.getElementById("avisos-form");
const cronogramasForm = document.getElementById("cronogramas-form");

const eventosClose = document.querySelector('#eventos-form .icon-close');
const avisosClose = document.querySelector('#avisos-form .icon-close');
const cronogramasClose = document.querySelector('#cronogramas-form .icon-close');

eventosBtn.addEventListener("click", () => {
  eventosForm.classList.add("active");
});

avisosBtn.addEventListener("click", () => {
  avisosForm.classList.add("active");
});

cronogramasBtn.addEventListener("click", () => {
  cronogramasForm.classList.add("active");
});

eventosClose.addEventListener('click', () => {
  eventosForm.classList.remove('active');
});

avisosClose.addEventListener('click', () => {
  avisosForm.classList.remove('active');
});

cronogramasClose.addEventListener('click', () => {
  cronogramasForm.classList.remove('active');
});
