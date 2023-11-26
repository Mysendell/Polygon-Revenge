const bodyEl = document.querySelector("body");
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
const mapNumberEl = document.querySelector("#map-number");
const mapLessEl = document.querySelector("#map-less");
const mapPlusEl = document.querySelector("#map-plus");
const mapsEl = document.querySelector("#map-button");
const mapSelectorEl = document.querySelector("#map-select");
const battlefieldEl = document.querySelector("#map");
const $backBtn = document.getElementById("back-button");
const timer = ms => new Promise(res => setTimeout(res, ms));
let playerHp = 100;
let money = 100;
let turretButtons = [];
let mapas = ["imgs/Sketch2.png", "imgs/Sketch.png", "imgs/Sketch2.png"];
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

function startGame() {
    mapSelectorEl.classList.remove("invisible");
    
    healthEl.innerHTML = playerHp;
    moneyEl.innerHTML = money;
}

mapsEl.click( (e) => {
    selectMap(e);
    startGame();
});

mapLessEl.click( () => {
    if(mapNumberEl.innerHTML != 1) {
        mapNumberEl.innerHTML -= 1;
        mapsEl.innerHTML = "<img src='" + mapas[mapNumberEl.innerHTML - 1] + "'>";
    } 
});

mapPlusEl.click( () => {
    if(mapNumberEl.innerHTML != mapas.length) {
        mapNumberEl.innerHTML += 1;
        mapsEl.innerHTML = "<img src='" + mapas[mapNumberEl.innerHTML - 1] + "'>";
    } 
});
    
$(document).keydown((e) => {
    if (e.keyCode == 27) {
        window.location.href = 'index.html';
    }
})git commit -m "some fixes and failed attempt at map selection"