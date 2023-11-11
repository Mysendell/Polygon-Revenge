let caixaAliadosEl = document.getElementById('selecao-turrets');
let botaoPSelecao = document.getElementById('vai-e-volta');


botaoPSelecao.addEventListener('click', ()=>{
    if (caixaAliadosEl.style.right == '99%'){
        caixaAliadosEl.style.right = '89%';
    }
    else{
        caixaAliadosEl.style.right = '99%';
    }
        
});