const jogarEl = document.querySelector("#Jogar");
const titleEl = document.querySelector("#title");
const placarEl = document.querySelector("#Placar");
const creditosEl = document.querySelector("#Creditos");

function startGame() {
    jogarEl.classList.add("invisible");
    titleEl.classList.add("invisible");
    placarEl.classList.add("invisible");
    creditosEl.classList.add("invisible");
}

jogarEl.addEventListener("click", startGame);