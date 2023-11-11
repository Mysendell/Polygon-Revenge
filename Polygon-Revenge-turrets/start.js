const jogarEl = document.querySelector("#Jogar");
const titleEl = document.querySelector("#title");
const placarEl = document.querySelector("#Placar");
const creditosEl = document.querySelector("#Creditos");
const battleEl = document.querySelector("battle");
const healthEl = document.querySelector("health");
let playerHp = 100;

function startGame() {
    jogarEl.classList.add("invisible");
    titleEl.classList.add("invisible");
    placarEl.classList.add("invisible");
    creditosEl.classList.add("invisible");
    battleEl.classList.remove("invisible");
    healthEl.innerHTML = `HP: ${playerHp}`;
    handler();
}

jogarEl.addEventListener("click", startGame);