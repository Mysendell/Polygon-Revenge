const jogarEl = document.querySelector("#Jogar");
const titleEl = document.querySelector("#title");
const placarEl = document.querySelector("#Placar");
const creditosEl = document.querySelector("#Creditos");
const battleEl = document.querySelector("#battle");
const selectionEl = document.querySelector("#selection");
const healthEl = document.querySelector("#health");
const sideEl = document.querySelector("#side");
const timer = ms => new Promise(res => setTimeout(res, ms));
let playerHp = 100;
let turretButtons = [];

function startGame() {
    jogarEl.classList.add("invisible");
    titleEl.classList.add("invisible");
    placarEl.classList.add("invisible");
    creditosEl.classList.add("invisible");
    battleEl.classList.remove("invisible");
    sideEl.classList.remove("invisible");
    healthEl.innerHTML = `HP: ${playerHp}`;
    handler();
}

jogarEl.addEventListener("click", startGame);