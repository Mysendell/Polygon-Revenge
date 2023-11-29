const bodyEl = document.body;
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
const mapImageEl = mapsEl.querySelector("img");
const mapSelectorEl = document.querySelector("#map-select");
const battlefieldEl = document.querySelector("#map");
const backBtn = document.getElementById("back-button");
const timer = ms => new Promise(res => setTimeout(res, ms));
let playerHp = 100;
let money = 100;
let turretButtons = [];
let mapas = ["imgs/Sketch2.png", "imgs/Sketch.png", "imgs/pory-base.png"];
let mapa = 0;

function startGame() {
    mapSelectorEl.classList.add("invisible");
    battlefieldEl.src = mapas[mapa];
    healthEl.innerHTML = playerHp;
    moneyEl.innerHTML = money;
    battleEl.classList.remove("invisible");
    sideEl.classList.remove("invisible");
    handler(mapa);
}

mapsEl.addEventListener("click", startGame);

function mapChange(increment){
    mapa = (mapa + increment + 3) % 3;
    mapImageEl.src = mapas[mapa];
    mapNumberEl.innerHTML = mapa+1;
}

mapLessEl.addEventListener("click", () => {mapChange(-1)});

mapPlusEl.addEventListener("click", () => {mapChange(1)});

bodyEl.addEventListener("keydown", (e) => {
    if (e.key === 'Escape')
        location.replace('index.html');
})