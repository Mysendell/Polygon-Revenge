let triangle = {hp: 5, damage: 2, image: "triangle", speed: 1.5, size: 0.8};
let square = {hp: 10, damage: 10, image: "square", speed: 1, size: 1};
let pentagon = {hp: 20, damage: 25, image: "pentagon", speed: 0.8, size: 1.2};
let octagon = {hp: 35, damage: 30, image: "octagon", speed: 0.6, size: 1.5};
let dodecagon = {hp: 50, damage: 100, image: "dodecagon", speed: 0.4, size: 2};

let inimigos = [
    dodecagon, 2000,
    octagon, 2000,
    pentagon, 2000,
    square, 2000,
    triangle, 1000
];

async function handler(){
    for (let i=0; i < inimigos.length; i++){
        if (inimigos[i].hp > 0)
            spawnEnemy(inimigos[i]);
        await timer(inimigos[++i]);
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
    image.src = `imgs/${inimigo.image}.png`;
    newEl.appendChild(image);
    image.style.width = `${12*inimigo.size}vmin`;
    image.style.height = `${12*inimigo.size}vmin`;
    newEl.style.position = "absolute";
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
    newEl.style.offset = `path("M ${viewport_convert(0,50,0)} ${0} L ${viewport_convert(0,50,0)} ${viewport_convert(0,0,50)} L ${viewport_convert(0,80,0)} ${viewport_convert(0,0,50)} L ${viewport_convert(0,80,0)} ${viewport_convert(0, 0, 10)} L ${viewport_convert(0,20,0)} ${viewport_convert(0, 0, 10)} L ${viewport_convert(0,20,0)} ${viewport_convert(0, 0, 60)} L ${viewport_convert(0,50,0)} ${viewport_convert(0, 0, 60)} L ${viewport_convert(0,50,0)} ${viewport_convert(0, 0, 95)}") auto`;
}