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
const upgDivEl = document.querySelector("#upgrade");
const upgButtonEl = upgDivEl.querySelector("button");
const mapsEl = document.querySelectorAll(".map");
const mapSelectorEl = document.querySelector("#map-select");
const timer = ms => new Promise(res => setTimeout(res, ms));
let playerHp = 100;
let money = 100;
let turretButtons = [];
let mapa = 0;

function selectMap(e) {
    mapa = e.currentTarget.value;
}

for(let i = 0; i < mapsEl.length; i++) {
    mapsEl[i].addEventListener("click", (e) => {
        selectMap(e);
    })
}

function startGame() {
    jogarEl.classList.add("invisible");
    titleEl.classList.add("invisible");
    placarEl.classList.add("invisible");
    creditosEl.classList.add("invisible");
    mapSelectorEl.classList.remove("invisible");
    healthEl.innerHTML = playerHp;
    moneyEl.innerHTML = money;
    handler();
}

/*battleEl.classList.remove("invisible");
    sideEl.classList.remove("invisible");*/

jogarEl.addEventListener("click", startGame);