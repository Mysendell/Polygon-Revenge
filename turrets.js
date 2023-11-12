let turrets = [
    [{atk: 10, speed: 2, custo: 15, image: "turret2-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret-placeholder"}],
    [{atk: 0, speed: 0, custo: 0, image: "turret2-placeholder"}]
];

let turID = -1;
let smtSelected = 0;

function showStats(e) {
    atkEl.innerHTML = e.currentTarget.dataset.atk;
    speedEl.innerHTML = e.currentTarget.dataset.speed;
    costEl.innerHTML = e.currentTarget.dataset.custo;
}

function buttonToggle(e) {
    if(smtSelected == 0) {
        smtSelected = 1;
        turID = e.currentTarget.value;
        turretButtons[turID].classList.add("selected");
    } else {
        if(e.currentTarget.parentNode.classList.contains("selected") == true) {
            smtSelected = 0;
            turretButtons[turID].classList.remove("selected");
            turID = -1;
        } else {
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
    button.addEventListener("keyup", (e) => {
        if(e.key === 'x') {
            smtSelected = 0;
            turretButtons[turID].classList.remove("selected");
            turID = -1;
        }
    });
    img.src = `imgs/${turrets[i][0].image}.png`;
    li.dataset.atk = turrets[i][0].atk;
    li.dataset.speed = turrets[i][0].speed;
    li.dataset.custo = turrets[i][0].custo;
    button.appendChild(img);
    li.appendChild(button);
    selectionEl.appendChild(li);
    turretButtons.push(li);
    li.addEventListener("mouseover", (e) => {
        statsEl.classList.remove("invisible");
        showStats(e);
    });
    li.addEventListener("mouseout", () => {
        statsEl.classList.add("invisible");
    });
}

function changeID(increment) {
    smtSelected = 1;
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
    let rect = e.target.getBoundingClientRect();
    let newEl = document.createElement("span");
    newEl.classList.add("turret");
    let image = document.createElement("img");
    image.src = `imgs/${turrets[turID][0].image}.png`;
    newEl.appendChild(image);
    image.style.width = "10vmin";
    image.style.height = "10vmin";
    newEl.style.position = "absolute";
    newEl.style.top = e.pageY - viewport_convert(0, 0, 5) + 'px';
    newEl.style.left = e.pageX - rect.left - viewport_convert(0, 0, 5) + 'px';
    newEl.dataset.atk = turrets[turID][0].atk;
    newEl.dataset.speed = turrets[turID][0].speed;
    battleEl.appendChild(newEl);
    turretButtons[turID].classList.remove("selected");
    turID = -1;
}

battleEl.addEventListener("mouseup", (e) => {
    if(turID != -1){
        spawnTurret(e);
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

/*It won't trigger before you press your mouse anywhere (prob related to focus) // fixed, battleEl -> bodyEl
It won't trigger if something is already selected too // fixed too

remove the selected class if you select another turret // probably gonna need to check every turret if they are selected*/