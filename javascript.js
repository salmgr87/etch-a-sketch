const container = document.querySelector(".container");
console.log(container);


for (i=0; i<100; i++) {
        const item = document.createElement('div');
        item.classList.add('gridItem');
        container.appendChild(item);
}

document.addEventListener('click', function handleClick(event) {
        event.target.classList.toggle('clicked');
        console.log("it worked");
    
})