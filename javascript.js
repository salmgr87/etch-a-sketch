const container = document.querySelector(".container");
console.log(container);

let rows = prompt();
let totalGridItems = rows*rows;
let fontSizez = 400/rows;
let fontSizeString = fontSizez + "px";

//changes the container to have the correct rows
let columns = 'repeat: (' + rows + ", 1fr)";
let correctRows = document.getElementsByClassName('container');
correctRows[0].style.gridTemplateColumns = columns;


//creates grid of blocks
for (i=0; i<(totalGridItems); i++) {
        const item = document.createElement('div');
        item.classList.add('gridItem');
        container.appendChild(item);
        
}

//changes the class of each block to reflect the correct size in px
let items = document.getElementsByClassName('gridItem');
for (i=0; i<(totalGridItems); i++) {
        const item = items[i];
        item.style.fontSize = fontSizeString;
}




document.addEventListener('click', function handleClick(event) {
        event.target.classList.toggle('clicked');
        console.log("it worked");
    
})