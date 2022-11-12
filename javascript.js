const container = document.querySelector(".container");
console.log(container);

let rows = prompt("How many rows?");
let totalGridItems = rows*rows;
let fontSizez = 400/rows;
let fontSizeString = fontSizez + "px";

createFraction();

//changes the container to have the correct rows

function createFraction() {
        let columns = 'repeat(' + rows + ", 1fr)";
        //let correctRows = document.getElementById('blockContainer');

        container.style.gridTemplateColumns = columns;
        
        createBlocks();
};



//creates grid of blocks
function createBlocks() { 
        for (i=0; i<(totalGridItems); i++) {
                const item = document.createElement('div');
                item.classList.add('gridItem');
                container.appendChild(item);
                
        }
        blockClass();
};

//changes the class of each block to reflect the correct size in px
function blockClass() {
        let items = document.getElementsByClassName('gridItem');
        for (i=0; i<(totalGridItems); i++) {
                const item = items[i];
                item.style.fontSize = fontSizeString;
        }
};


//for clicking on blocks... now requires 2 consecutive clicks if starting as white e.g. on mobile
document.addEventListener('click', function handleClick(event) {
        if (randomColorOnOff == true) {
                randomizeColor();
        }
        if (event.target.classList.contains('clicked')) {
                event.target.classList.remove('clicked');
                event.target.style.backgroundColor = 'white';
        } else if (event.target.classList.contains('gridItem')) {
                event.target.classList.add('clicked');
                event.target.style.backgroundColor = currentColor;
                console.log("it worked");
        }
})



//for mouseover blocks...

document.addEventListener('mouseover', function handleClick(event) {
        if (randomColorOnOff == true) {
                randomizeColor();
        }
        if (dragMouse == true) {
                if (event.target.classList.contains('gridItem')) {
                        event.target.classList.add('clicked');
                        event.target.style.backgroundColor = currentColor;
                        console.log("it worked");
                }
        }
        
})

//to erase all blocks...
const erased = document.getElementById('erase');
erased.addEventListener('click', function (e) {
        eraseBoard();
});

function eraseBoard() {
        const eraseBlock = document.getElementsByClassName('clicked');
        for (i=eraseBlock.length-1; i>=0; i--) {
                console.log(eraseBlock[i]);
                eraseBlock[i].style.backgroundColor = 'white';
                eraseBlock[i].classList.remove('clicked');
                
        }
}


//to choose a color
currentColor = 'blue';

const redClicked = document.getElementById('red');
redClicked.addEventListener('click', function (e) {
        currentColor = 'red';
        if (randomColorOnOff == true) {randomColorOnOff = false;}
})

const blueClicked = document.getElementById('blue');
blueClicked.addEventListener('click', function (e) {
        currentColor = 'blue';
        if (randomColorOnOff == true) {randomColorOnOff = false;}
})


//random colors
let randomColorOnOff = false;
let randomColor = '#000000';

const randomColorBtn = document.getElementById('randomColor');
randomColorBtn.addEventListener('click', function () {randomColorOnOff = !randomColorOnOff});

function randomizeColor() {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        randomColor = '#' + randomColor;
        currentColor = randomColor;
        console.log(currentColor);
}





//to toggle the mouseover
let dragMouse = true;

const dragOnOff = document.getElementById('dragOnOff');
dragOnOff.addEventListener('click', function (e) {
        if (dragMouse == true) {
                dragMouse = false;
                dragOnOff.textContent = 'Click mode';
        }
        else if (dragMouse == false) {
                dragMouse = true;
                dragOnOff.textContent = 'Click or mouseover';
        }
})


//restart button
const restartClicked = document.getElementById('restart');
restartClicked.addEventListener('click', function (e) {
        eraseBoard();
        let removeItems = document.getElementById('containerID');
        while (removeItems.firstChild) {
                removeItems.removeChild(removeItems.firstChild);
        }
        rows = prompt("How many rows?");
        totalGridItems = rows*rows;
        fontSizez = 400/rows;
        fontSizeString = fontSizez + "px";
        createFraction();
})

