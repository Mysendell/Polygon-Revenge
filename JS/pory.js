let poryEl = document.getElementById('pory');
let poryZEl = document.querySelector('body');
let tudoEl = document.querySelectorAll('.tema-claro-escuro');
const titleEl = document.querySelector("#title");

cheet("p o r y g o n", poryTheme);

function poryTheme() {
        $(poryZEl).css('background-image', 'url(imgs/pory-base.png)');
        $(poryZEl).css('background-color', 'rgb(255, 255, 255)');
        $(titleEl).html(`Porygon Revenge <span id="pory"></span>`);
        entrePgs = 0;
        tudoEl.forEach(letras => {$(letras).css('color', 'rgb(0, 0, 0)');});
}