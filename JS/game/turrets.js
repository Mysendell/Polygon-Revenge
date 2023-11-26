let turrets = [
    [{atk: 10, speed: 2, custo: 15, image: "turret2-placeholder"},{atk: 20, speed: 4, custo: 30, image: "turret2-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret-placeholder"}, {atk: 0, speed: 0, custo: 0, image: "turret-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}, {atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}]
];

let turID = -1;
let smtSelected = 0;
let selected = false; turretselected = false;

function showStats(index, version=0, upgrade=0) {
    statsEl.classList.remove("invisible");
    atkEl.innerHTML = turrets[index][version].atk;
    speedEl.innerHTML = turrets[index][version].speed;
    if(turrets[index].length > parseInt(version)+upgrade){
        costEl.parentNode.classList.remove("invisible");
        costEl.innerHTML = turrets[index][parseInt(version)+upgrade].custo;
    }
    else{
        costEl.parentNode.classList.add("invisible");
        upgDivEl.classList.add("invisible");
    }
}

function upgrader(){
    if (money >= turrets[selected.value][parseInt(selected.dataset.version)+1].custo){
        money -= turrets[selected.value][parseInt(selected.dataset.version)+1].custo;
        moneyEl.innerHTML = money;
        selected.dataset.version = parseInt(selected.dataset.version) + 1;
        selected.dataset.atk = turrets[selected.value][selected.dataset.version].atk;
        selected.dataset.speed = turrets[selected.value][selected.dataset.version].speed;
        showStats(selected.value, selected.dataset.version, 1);
    }
}

function buttonToggle(e) {
    statsEl.classList.add("toggled");
    selected = e.currentTarget;
    if(smtSelected == 0) {
        smtSelected = 1;
        turID = e.currentTarget.value;
        turretButtons[turID].classList.add("selected");
    } else {
        if(e.currentTarget.parentNode.classList.contains("selected") == true) {
            smtSelected = 0;
            turretButtons[turID].classList.remove("selected");
            turID = -1;
            statsEl.classList.remove("toggled");
        } else {
            turretButtons[turID].classList.remove("selected");
            turID = e.currentTarget.value;
            turretButtons[turID].classList.add("selected");
        }
    }
}

for (let i=0; i<turrets.length;i++){
    let li = document.createElement("li");
    let button = document.createElement("button");
    let img = document.createElement("img");
    button.value = i;
    li.id = "turret-" + i;
    button.addEventListener("click", (e) => {
        buttonToggle(e);
    });
    img.src = `imgs/${turrets[i][0].image}.png`;
    button.appendChild(img);
    li.appendChild(button);
    selectionEl.appendChild(li);
    turretButtons.push(li);
    button.addEventListener("mouseover", (e) => {
        if(!turretselected)
            upgDivEl.classList.add("invisible");
        showStats(e.currentTarget.value);
    });
    li.addEventListener("mouseout", (e) => {
        if(statsEl.classList.contains("toggled")){
            if(selected)
                showStats(selected.value, selected.dataset.version, 1);
            else
                showStats(e.currentTarget.value);
        }
        else
            statsEl.classList.add("invisible");
    });
}

function changeID(increment) {
    smtSelected = 1;
    console.log(turID);
    if(turID != -1) {
        turretButtons[turID].classList.remove("selected");
        turID = (turID + increment + turrets.length) % turrets.length;
        document.getElementById("turret-" + turID).scrollIntoView({block: "center", behavior: "smooth", inline: "nearest"});
    } else {
        turID = 0;
    }
    turretButtons[turID].classList.add("selected");
}

function spawnTurret(e) {
    if (money < turrets[turID][0].custo) return;
    statsEl.classList.remove("toggled");
    money -= turrets[turID][0].custo;
    moneyEl.innerHTML = money;
    let rect = e.target.getBoundingClientRect();
    let newEl = document.createElement("span");
    newEl.classList.add("turret");
    let image = document.createElement("img");
    image.src = `imgs/${turrets[turID][0].image}.png`;
    newEl.appendChild(image);
    image.style.width = "10vmin";
    image.style.height = "10vmin";
    newEl.style.width = "10vmin";
    newEl.style.height = "10vmin";
    newEl.style.position = "absolute";
    newEl.style.top = e.pageY - viewport_convert(0, 0, 5) + 'px';
    newEl.style.left = e.pageX - rect.left - viewport_convert(0, 0, 5) + 'px';
    newEl.dataset.atk = turrets[turID][0].atk;
    newEl.dataset.speed = turrets[turID][0].speed;
    newEl.dataset.version = 0;
    newEl.value = turID;
    newEl.addEventListener("click", (e) => {
        turretselected = true;
        upgDivEl.classList.remove("invisible");
        statsEl.classList.add("toggled");
        if(selected)
            selected.classList.remove("selected");
        selected = e.currentTarget;
        selected.classList.add("selected");
        showStats(selected.value, selected.dataset.version, 1);
    });
    newEl.addEventListener("mouseover", (e) => {
        upgDivEl.classList.remove("invisible");
        if (!statsEl.classList.contains("toggled")){
            selected = e.currentTarget;
        }
        showStats(e.currentTarget.value, e.currentTarget.dataset.version, 1);
    });
    newEl.addEventListener("mouseout", () => {
        if(!statsEl.classList.contains("toggled")){
            selected = false;
            upgDivEl.classList.add("invisible");
            statsEl.classList.add("invisible");
        }else if(selected){
            showStats(selected.value, selected.dataset.version, 1);
            if(turrets[selected.value].length > parseInt(selected.dataset.version)+1){
                upgDivEl.classList.remove("invisible");
            }
        }
        if(!turretselected)
            upgDivEl.classList.add("invisible");
    });
    battleEl.appendChild(newEl);
    turretButtons[turID].classList.remove("selected");
    turID = -1;
    smtSelected = 0;
}

bodyEl.addEventListener("mouseup", (e) => {
    if(turID != -1){
        spawnTurret(e);
    }
    if(selected){
        statsEl.classList.remove("toggled");
        statsEl.classList.add("invisible");
        selected.classList.remove("selected");
        turretselected = false;
        selected = false;
    }
});

bodyEl.addEventListener("keyup", (e) => {
    if(e.key === 's') {
        changeID(1);
    }
    if(e.key === 'w') {
        changeID(-1);
    }
});

upgButtonEl.addEventListener("mouseover", () => {
    if(turrets[selected.value].length > parseInt(selected.dataset.version)+1){
        atkEl.innerHTML = turrets[selected.value][parseInt(selected.dataset.version)+1].atk;
        speedEl.innerHTML = turrets[selected.value][parseInt(selected.dataset.version)+1].speed;
    }
});

upgButtonEl.addEventListener("mouseout", () => {
    atkEl.innerHTML = turrets[selected.value][selected.dataset.version].atk;
    speedEl.innerHTML = turrets[selected.value][selected.dataset.version].speed;
});

upgButtonEl.addEventListener("click", upgrader);

bodyEl.addEventListener("keyup", (e) => {
    if(e.key === 'x') {
        smtSelected = 0;
        console.log(turID);
        if(turID != -1){
            turretButtons[turID].classList.remove("selected");
            turID = -1;
        }
        statsEl.classList.remove("toggled");
        statsEl.classList.add("invisible");
        console.log("abc");
        if(selected){
            selected.classList.remove("selected");
            turretselected = false;
            selected = false;
        }
    }
});