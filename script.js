alert(`Rules To Play The Game 
There are 4 random doors in each layer 
From which 3 are wrong & 1 is true 
You have to find the right one 
Life will be decrease if wrong door is clicked 
You have to reach to the diamond 
Thank You`);



var level1 = document.getElementById('level1');
var level2 = document.getElementById('level2');
var level3 = document.getElementById('level3');
var level4 = document.getElementById('level4');
var level5 = document.getElementById('level5');



level1.addEventListener('click', createArena);
level2.addEventListener('click', createArena);
level3.addEventListener('click', createArena);
level4.addEventListener('click', createArena);
level5.addEventListener('click', createArena);


var currentLevel = 0;
var layerincrement = 1;
var levelOrder;
var door1;
var door2;
var door3;
var door4;
var doorVal = { "door1Val": false, "door2Val": false, "door3Val": false, "door4Val": false };



function createArena(event) {
    document.getElementById('header').insertAdjacentHTML('beforeend', `<div id="liv">Lives : <span id="lives">❤️❤️❤️❤️❤️</span></div>
    `);
    let arena = `<div class="arena" id="arena"></div>`;
    let block = `<div class="block"></div>`;
    // let live=`<div > Lives :<span id="lives">0</span></div>`;
    document.getElementById('main').innerHTML = `${arena}`;
    // document.getElementById('main').insertAdjacentHTML('afterbegin',`${live}`);

    let arenaWidth = document.getElementById('arena').offsetWidth;
    let arenaHeight = document.getElementById('arena').offsetHeight;

    let levelNumber = parseInt(event.target.innerText.charAt(event.target.innerText.length - 1));
    currentLevel = levelNumber;
    let blockWidth = (arenaWidth / (levelNumber * 2 + 1)) - 1;
    let blockHeight = (arenaHeight / (levelNumber * 2 + 1)) - 1;

    for (let i = 0; i < Math.pow(levelNumber * 2 + 1, 2); i++) {
        document.getElementById('arena').insertAdjacentHTML('beforeend', `${block}`);
    }


    let allblock = document.getElementsByClassName('block');
    let row = 1, col = 1;
    let k = levelNumber * 2 + 1;

    for (let i = 0; i < allblock.length; i++) {
        allblock[i].style.width = `${blockWidth}px`;
        allblock[i].style.height = `${blockHeight}px`;
        allblock[i].setAttribute('id', `block-${row}-${col}`);
        if ((i + 1) % k == 0) {
            col = 1;
            row++;
        } else {
            col++;
        }
        // allblock[i].innerHTML = `<img src="https://img.icons8.com/ultraviolet/48/000000/brick-wall.png" height="${blockHeight}px" width="${blockWidth}"/>`
    }


    // let diamondindex = parseInt((k*k / 2)+1);

    let center = parseInt((k / 2) + 1);
    // console.log(levelNumber,  diamondindex,  document.getElementById(`block${diamondindex}`));
    document.getElementById(`block-${center}-${center}`).innerHTML = '<img src="https://img.icons8.com/color/64/000000/diamond.png" height="106%"/>';
    // document.getElementById(`block-${center}-${center}`).style.backgroundColor = "#d4e3e8";

    levelOrder = k;

    setActiveLayer(layerincrement, k);


    setRandomDoor();

    // console.log(doorVal);


}


let layerCleared = false;


const setDoors1 = (row, min, max) => {
    let randomPosition_col = Math.floor((Math.random() * (max - min + 1)) + min);
    // document.getElementById(`block-${row}-${randomPosition_col}`).innerHTML = '<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-door-furniture-kiranshastry-lineal-color-kiranshastry.png" height="106%"/>';
    door1 = document.getElementById(`block-${row}-${randomPosition_col}`);
    door1.innerHTML = '<img src="https://drive.google.com/uc?export=view&id=1guH99S-BxtrW6Zv3NWz0YuBWGwVCDIOq" height="106%"/>';
    door1.classList += ' door1Val';
    door1.firstChild.classList += 'temp door1Val';
    door1.addEventListener("click", layerCheck);

}

const setDoors2 = (row, min, max) => {
    let randomPosition_col = Math.floor((Math.random() * (max - min + 1)) + min);
    //  document.getElementById(`block-${row}-${randomPosition_col}`).innerHTML = '<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-door-furniture-kiranshastry-lineal-color-kiranshastry.png" height="106%"/>';
    door2 = document.getElementById(`block-${row}-${randomPosition_col}`);
    door2.innerHTML = '<img src="https://drive.google.com/uc?export=view&id=1guH99S-BxtrW6Zv3NWz0YuBWGwVCDIOq" height="106%"/>';
    door2.classList += ' door2Val';
    door2.firstChild.classList += 'temp door2Val';
    door2.addEventListener("click", layerCheck);
}

const setDoors3 = (col, min, max) => {
    let randomPosition_row = Math.floor((Math.random() * (max - min + 1)) + min);
    //  document.getElementById(`block-${randomPosition_row}-${col}`).innerHTML = '<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-door-furniture-kiranshastry-lineal-color-kiranshastry.png" height="106%"/>';
    door3 = document.getElementById(`block-${randomPosition_row}-${col}`);
    door3.innerHTML = '<img src="https://drive.google.com/uc?export=view&id=1guH99S-BxtrW6Zv3NWz0YuBWGwVCDIOq" height="106%"/>';
    door3.classList += ' door3Val';
    door3.firstChild.classList += 'temp door3Val';
    door3.addEventListener("click", layerCheck);
}





const setDoors4 = (col, min, max) => {
    let randomPosition_row = Math.floor((Math.random() * (max - min + 1)) + min);
    // document.getElementById(`block-${randomPosition_row}-${col}`).innerHTML = '<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-door-furniture-kiranshastry-lineal-color-kiranshastry.png" height="106%"/>';
    door4 = document.getElementById(`block-${randomPosition_row}-${col}`);
    door4.innerHTML = '<img src="https://drive.google.com/uc?export=view&id=1guH99S-BxtrW6Zv3NWz0YuBWGwVCDIOq" height="106%"/>';
    door4.classList += ' door4Val';
    door4.firstChild.classList += 'temp door4Val';
    door4.addEventListener("click", layerCheck);
}







const disableDoors1 = () => {


    door1.innerHTML = '<img src="https://drive.google.com/uc?export=view&id=1WT33uj-SPRHILQNNlm2vZMhM_R2xNyMk" height="106%"/>';
    door1.removeEventListener("click", layerCheck);

}

const disableDoors2 = () => {

    door2.innerHTML = '<img src="https://drive.google.com/uc?export=view&id=1WT33uj-SPRHILQNNlm2vZMhM_R2xNyMk" height="106%"/>';
    door2.removeEventListener("click", layerCheck);
}

const disableDoors3 = () => {

    door3.innerHTML = '<img src="https://drive.google.com/uc?export=view&id=1WT33uj-SPRHILQNNlm2vZMhM_R2xNyMk" height="106%"/>';
    door3.removeEventListener("click", layerCheck);
}


const disableDoors4 = () => {
    door4.innerHTML = '<img src="https://drive.google.com/uc?export=view&id=1WT33uj-SPRHILQNNlm2vZMhM_R2xNyMk" height="106%"/>';
    door4.removeEventListener("click", layerCheck);
}








const activeLayer1 = (row, min, max) => {
    for (let i = min; i <= max; i++) {
        document.getElementById(`block-${row}-${i}`).classList += ' activeLayer';
    }
}
const activeLayer2 = (row, min, max) => {
    for (let i = min; i <= max; i++) {
        document.getElementById(`block-${row}-${i}`).classList += ' activeLayer';
    }
}
const activeLayer3 = (col, min, max) => {
    for (let i = min; i <= max; i++) {
        document.getElementById(`block-${i}-${col}`).classList += ' activeLayer';
    }
}
const activeLayer4 = (col, min, max) => {
    for (let i = min; i <= max; i++) {
        document.getElementById(`block-${i}-${col}`).classList += ' activeLayer';
    }
}




const deactivateLayer1 = (row, min, max) => {
    for (let i = min; i <= max; i++) {
        document.getElementById(`block-${row}-${i}`).classList.remove("activeLayer");
    }
}
const deactivateLayer2 = (row, min, max) => {
    for (let i = min; i <= max; i++) {
        document.getElementById(`block-${row}-${i}`).classList.remove("activeLayer");
    }
}
const deactivateLayer3 = (col, min, max) => {
    for (let i = min; i <= max; i++) {
        document.getElementById(`block-${i}-${col}`).classList.remove("activeLayer");
    }
}
const deactivateLayer4 = (col, min, max) => {
    for (let i = min; i <= max; i++) {
        document.getElementById(`block-${i}-${col}`).classList.remove("activeLayer");
    }
}


const setRandomDoor = () => {
    doorVal = { "door1Val": false, "door2Val": false, "door3Val": false, "door4Val": false };
    let randomPosition = Math.floor(Math.random() * 3);
    let i = 0;

    for (var key in doorVal) {
        if (i == randomPosition) {
            doorVal[key] = true;

        }
        i++;
    }
}



const setActiveLayer = (i, k) => {
    setDoors1(i, i, k - i + 1)
    setDoors2(k - i + 1, i, k - i + 1);


    setDoors3(i, i + 1, k - i);
    setDoors4(k - i + 1, i + 1, k - i);

    activeLayer1(i, i, k - i + 1)
    activeLayer2(k - i + 1, i, k - i + 1);


    activeLayer3(i, i + 1, k - i);
    activeLayer4(k - i + 1, i + 1, k - i);

}

const deactivateLayer = (i, k) => {
    deactivateLayer1(i, i, k - i + 1)
    deactivateLayer2(k - i + 1, i, k - i + 1);


    deactivateLayer3(i, i + 1, k - i);
    deactivateLayer4(k - i + 1, i + 1, k - i);
}


const disableDoors = () => {

    disableDoors1();
    disableDoors2();
    disableDoors3();
    disableDoors4();

}
//



const menu = () => {
    document.getElementById('main').innerHTML = ` <button class="button-33" role"button" id="level1">Level 1</button>
    <button class="button-33" role"button" id="level2">Level 2</button>
    <button class="button-33" role"button" id="level3">Level 3</button>
    <button class="button-33" role"button" id="level4">Level 4</button>
    <button class="button-33" role"button" id="level5">Level 5</button>`;

    var level1 = document.getElementById('level1');
    var level2 = document.getElementById('level2');
    var level3 = document.getElementById('level3');
    var level4 = document.getElementById('level4');
    var level5 = document.getElementById('level5');



    level1.addEventListener('click', createArena);
    level2.addEventListener('click', createArena);
    level3.addEventListener('click', createArena);
    level4.addEventListener('click', createArena);
    level5.addEventListener('click', createArena);

    document.getElementById('liv').parentNode.removeChild(document.getElementById('liv'));

}




const youLose = () => {
    layerincrement = 1;
    document.getElementById('main').innerHTML = `<div id="loseContainer">
    <img src="https://drive.google.com/uc?export=view&id=1OB-Hoxdpak7oG9h-bHfMlC001ECctUDH" />
    <div id="loseButtonContainer">
    <button class="button-33" role"button" id="menu">Menu</button>
    <button class="button-33" role"button" id="replay">Replay</button>
    </div>
    </div>`;

    document.getElementById('menu').addEventListener('click', menu);


    document.getElementById('replay').addEventListener('click', function () {

        menu();
        document.getElementById(`level${currentLevel}`).click();

    });


    // let menuButton=`<button id="menu">Menu</button>`;
    // document.getElementById('main').innerHTML=`<img src="/gif/better-luck-next-time-loser-george-clooney.gif" height="300px"/>`;
}

const youWon = () => {
    layerincrement = 1;
    document.getElementById('main').innerHTML = `<div id="wonContainer">
    <img src="https://drive.google.com/uc?export=view&id=1vqMfKl8myfdEDhG2r3VALLTrErlBcC8U" height="300px"/>
    <div id="wonButtonContainer">
    <button class="button-33" role="button" id="menu">Menu</button>
    <button class="button-33" role="button" id="replay">Replay</button>
    <button class="button-33" role="button" id="next">Next</button>
    </div>
    </div>
    `;

    document.getElementById('menu').addEventListener('click', menu);


    document.getElementById('replay').addEventListener('click', function () {

        menu();
        document.getElementById(`level${currentLevel}`).click();

    });
    document.getElementById('next').addEventListener('click', function () {
        menu();
        document.getElementById(`level${currentLevel + 1}`).click();

    });
    if (`${currentLevel}` == 5) {
        document.getElementById('next').style.display = "none";
    }

}

const layerCheck = (e) => {
    if (doorVal[e.target.classList[1]] == false) {

        let lives = document.getElementById('lives');
        if (lives.innerText.length == 2) {
            lives.innerText = lives.innerText.slice(0, -2);
            lives.innerText = "😩";
            youLose();
        }
        else {
            lives.innerText = lives.innerText.slice(0, -2);
        }
    }
    else {

        setRandomDoor();
        disableDoors();
        layerincrement++;
        deactivateLayer(layerincrement - 1, levelOrder);
        if (layerincrement < levelOrder / 2) {
            setActiveLayer(layerincrement, levelOrder);
        }
        else {
            youWon();
        }
        // console.log(doorVal);

    }

}
