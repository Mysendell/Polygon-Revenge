let turrets = [
    [{atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret-placeholder"}],
    [{atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}]
];

let turID = -1;
let clicked = 0;

for (let i=0; i<turrets.length;i++){
    let li = document.createElement("li");
    let button = document.createElement("button");
    let img = document.createElement("img");
    button.value = i;
    button.addEventListener("click", (e) => {
        turID = e.currentTarget.value;
        turretButtons[turID].classList.add("selected");
    });
    img.src = `imgs/${turrets[i][0].image}.png`;
    button.appendChild(img);
    li.appendChild(button);
    selectionEl.appendChild(li);
    turretButtons.push(li);
}

function changeID(e) {
    if(turID == -1) turID = 0;
    turretButtons[turID].classList.remove("selected");
    let increment;
    if(e.deltaY > 0) {
        increment = 1;
    }
    else {
        increment = -1;
    }
    turID = (turID + increment + turrets.length) % turrets.length;
    turretButtons[turID].classList.add("selected");
}

function spawnTurret(e) {
    let newEl = document.createElement("span");
    newEl.classList.add("turret");
    let image = document.createElement("img");
    image.src = `imgs/${turrets[turID][0].image}.png`;
    newEl.appendChild(image);
    image.style.width = "10vmin";
    image.style.height = "10vmin";
    newEl.style.position = "absolute";
    newEl.style.top = e.pageY - viewport_convert(0, 0, 5) + 'px';
    newEl.style.left = e.pageX - viewport_convert(0, 5, 0) + 'px';
    newEl.id = "turret";
    newEl.dataset.atk = turrets[turID][0].atk;
    newEl.dataset.damage = turrets[turID][0].dano;
    battleEl.appendChild(newEl);
    turretButtons[turID].classList.remove("selected");
    turID = -1;
}

battleEl.addEventListener("mouseup", (e) => {
    if(turID != -1){
        spawnTurret(e);
    }
});

battleEl.addEventListener("wheel", (e) => {
    changeID(e);
});