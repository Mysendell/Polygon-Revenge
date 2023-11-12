const bodyEl = document.querySelector("body");
const jogarEl = document.querySelector("#Jogar");
const titleEl = document.querySelector("#title");
const placarEl = document.querySelector("#Placar");
const creditosEl = document.querySelector("#Creditos");
const battleEl = document.querySelector("#battle");
const selectionEl = document.querySelector("#selection");
const healthEl = document.querySelector("#health");
const sideEl = document.querySelector("#side");
const statsEl = document.querySelector("#stats");
const moneyEl = document.querySelector("#money");
const atkEl = document.querySelector("#atk");
const speedEl = document.querySelector("#speed");
const costEl = document.querySelector("#cost");
const timer = ms => new Promise(res => setTimeout(res, ms));
let playerHp = 100;
let money = 0;
let turretButtons = [];

function startGame() {
    jogarEl.classList.add("invisible");
    titleEl.classList.add("invisible");
    placarEl.classList.add("invisible");
    creditosEl.classList.add("invisible");
    battleEl.classList.remove("invisible");
    sideEl.classList.remove("invisible");
    healthEl.innerHTML = playerHp;
    moneyEl.innerHTML = money;
    handler();
}

jogarEl.addEventListener("click", startGame);