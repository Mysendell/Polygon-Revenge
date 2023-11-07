const timer = ms => new Promise(res => setTimeout(res, ms));
let inimigos = [
    {hp: 10, damage: 5, image: "Sketch", speed: 1, time:1000},
    {hp: 15, damage: 7, image: "Sketch", speed: 1, time:1000},
    {hp: 0, time:2000},
    {hp: 20, damage: 10, image: "Sketch", speed: 5, time:1000}];

async function handler(){
    for (enemy of inimigos){
        if (enemy.hp > 0)
            spawnEnemy(enemy);
        await timer(enemy.time);
    }
}

function viewport_convert(px = 0, vw = 0, vh = 0){
    if(px != 0){
        if(vw){
            return (100 * px / window.innerWidth);
        } else {
            return (100 * px / window.innerHeight);
        }
    } else if(vw != 0 && vh != 0){
        var w_h_arr = [];
        w_h_arr["width"] = Math.ceil((window.innerWidth * vw / 100));
        w_h_arr["height"] = Math.ceil((window.innerHeight * vh / 100));
        return w_h_arr;
    } else if(vw != 0){
        return Math.ceil((window.innerWidth * vw / 100));
    } else if(vh != 0){
        return Math.ceil((window.innerHeight * vh / 100));
    }
}

function spawnEnemy(inimigo) {
    let newEl = document.createElement("enemy");
    let image = document.createElement("img");
    image.src = `${inimigo.image}.png`;
    newEl.appendChild(image);
    image.style.width = "10vmin";
    image.style.height = "10vmin";
    newEl.style.position = "absolute";
    newEl.id = "enemy";
    newEl.dataset.hp = inimigo.hp;
    newEl.dataset.damage = inimigo.damage;
    newEl.addEventListener("animationend", (el) => {ded(el);});
    newEl.style.animation = `enemy ${10 / inimigo.speed}s alternate linear 1`;
    Move(newEl);
    battleEl.appendChild(newEl);
}

function ded(el) {
    if (el.currentTarget.dataset.hp > 0){
        playerHp -= el.currentTarget.dataset.damage;
        healthEl.innerHTML = `HP: ${playerHp}`;
    }
    el.currentTarget.remove();
}

function Move(newEl) {
    newEl.style.offset = `path("M ${viewport_convert(0,50,0)} ${0} L ${viewport_convert(0,50,0)} ${viewport_convert(0,0,50)} L ${viewport_convert(0,80,0)} ${viewport_convert(0,0,50)} L ${viewport_convert(0,80,0)} ${viewport_convert(0,00, 10)} L ${viewport_convert(0,20,0)} ${viewport_convert(0,00, 10)} L ${viewport_convert(0,20,0)} ${viewport_convert(0,00, 60)} L ${viewport_convert(0,50,0)} ${viewport_convert(0,00, 60)} L ${viewport_convert(0,50,0)} ${viewport_convert(0, 0, 95)}") auto`;
}