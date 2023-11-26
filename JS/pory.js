let poryEl = document.getElementById('pory');
let poryZEl = document.querySelector('body');
let tudoEl = document.querySelectorAll('.tema-claro-escuro');


$(poryEl).click(() =>{
    if (poryZEl.style.backgroundImage == 'url("imgs/474-porygon-z-g.png")'){
        $(poryZEl).css('background-image', 'url(imgs/pory-base.png)');
        $(tudoEl).css('color', 'rgb(0, 0, 0)');
        trocaCor(1);
    }
    else{
        $(poryZEl).css('background-image', 'url(imgs/474-porygon-z-g.png)');
        $(tudoEl).css('color', 'rgb(255, 255, 255)');
        trocaCor(2);
    }

});

function trocaCor(num){
    tudoEl.forEach(letras => {
        if (num == 1)
            letras.css('color', 'rgb(0, 0, 0)'); 
        else
            letras.css('color', 'rgb(255, 255, 255)');
    });
}

