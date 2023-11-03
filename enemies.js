let inimigos = ["Porygon"];

function spawnEnemy() {
    let newEl = document.createElement("enemy");
    let image = document.createElement("img");
    image.src = `${inimigos[0]}.png`;
    newEl.appendChild(image);
    image.style.width = "10vmin";
    image.style.height = "10vmin";
    newEl.style.position = "absolute";
    newEl.id = "enemy";
    newEl.dataset.hp = 30;
    battleEl.appendChild(newEl);
    Move(newEl);
}

function Move(newEl) {
    newEl.style.offset = `path("M ${viewport_convert(0,50,0)} ${0} L ${viewport_convert(0,50,0)} ${viewport_convert(0,0,50)} L ${viewport_convert(0,80,0)} ${viewport_convert(0,0,50)} L ${viewport_convert(0,80,0)} ${viewport_convert(0,00, 10)} L ${viewport_convert(0,20,0)} ${viewport_convert(0,00, 10)} L ${viewport_convert(0,20,0)} ${viewport_convert(0,00, 60)} L ${viewport_convert(0,50,0)} ${viewport_convert(0,00, 60)} L ${viewport_convert(0,50,0)} ${viewport_convert(0,00, 100)}") auto`;
}

spawnEnemy();

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