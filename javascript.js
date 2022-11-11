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



document.addEventListener('click', function handleClick(event) {
        event.target.classList.toggle('clicked');
        if (event.target.classList.contains('gridItem')) {
                if (event.target.style.backgroundColor != 'white') {
                        event.target.style.backgroundColor = 'white';
                }
                else {event.target.style.backgroundColor = 'blue'};
                console.log("it worked");
        }
    
})


document.addEventListener('mouseover', function handleClick(event) {
        if (event.target.classList.contains('gridItem')) {
                event.target.classList.add('clicked');
                event.target.style.backgroundColor = 'blue';
                console.log("it worked");
        }
    
})


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