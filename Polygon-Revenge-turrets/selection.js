let caixaAliadosEl = document.getElementById('selecao-turrets');
let botaoPSelecaoEl = document.getElementById('vai-e-volta');


botaoPSelecaoEl.addEventListener('click', ()=>{
    if (caixaAliadosEl.style.right == '99%'){
        caixaAliadosEl.style.right = '89%';
    }
    else{
        caixaAliadosEl.style.right = '99%';
    }
        
});