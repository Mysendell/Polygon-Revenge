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
const mapsEl = document.querySelectorAll(".map-button");
const mapSelectorEl = document.querySelector("#map-select");
const battlefieldEl = document.querySelector("#map");
const $backBtn = document.getElementById("back-button");
const timer = ms => new Promise(res => setTimeout(res, ms));
let playerHp = 100;
let money = 100;
let turretButtons = [];
let mapa;

function selectMap(e) {
    mapa = e.currentTarget.value;
    mapSelectorEl.classList.add("invisible");
    switch(+mapa) {
        case 0:
            battlefieldEl.src = "imgs/Sketch2.png";
            break;
        case 1:
            battlefieldEl.src = "imgs/Sketch2.png";
            break;
        case 2:
            battlefieldEl.src = "imgs/Sketch2.png";
            break;
        default:
            break;
    }

    for(let i = 0; i < mapsEl.length; i++) {
        mapsEl[i].classList.add("invisible");
    }

    battleEl.classList.remove("invisible");
    sideEl.classList.remove("invisible");
    handler(mapa);
}

mapsEl.forEach( map => {
    $(map).click( (e) => {
        selectMap(e);
        startGame();
    });
});
    

function startGame() {
    mapSelectorEl.classList.remove("invisible");
    
    healthEl.innerHTML = playerHp;
    moneyEl.innerHTML = money;
}

$(document).keydown((e) => {
    if (e.keyCode == 27) {
        window.location.href = 'index.html';
    }
})