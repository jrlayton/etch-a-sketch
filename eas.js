// Create 16x16 grid of square divs
function makeGrid(size) {
    const container = document.getElementById("container");
    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.className = "grid-item";
            container.appendChild(cell);
        }
    }
}

function randBetween(min, max) {
    // const randBetween = (min, max) => min + (Math.floor(Math.random() * (max - min + 1)));
    // const r = randBetween(0, 255);
    // const g = randBetween(0, 255);
    // const b = randBetween(0, 255);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRGB(min, max) {
    const r = randBetween(min, max);
    const g = randBetween(min, max);
    const b = randBetween(min, max);
    return `rgb(${r}, ${g}, ${b})`;
}


function colorCell(e) {
    e.target.style.backgroundColor = "red";
}

function clearGrid() {
    let elements = document.getElementsByClassName("grid-item");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "black";
    }
}

function changeGridSize() {
    let size = prompt("Enter new size (4-100): ");
    if (size > 100) {
        alert("Size changed to 100");
        size = 100;
    }
    else if (size < 4) {
        alert("Size changed to 4");
        size = 4;
    }
    clearGrid();
    makeGrid(size);
    actions();
}

function actions() {
    const cells = document.querySelectorAll(".grid-item");
    const clearBtn = document.querySelector("#clear");
    const sizeBtn = document.querySelector("#size");
    const rainbowBtn = document.querySelector("#rainbow");

    cells.forEach(div => div.addEventListener("mouseover", colorCell));
    
    clearBtn.addEventListener("click", clearGrid);
    sizeBtn.addEventListener("click", changeGridSize);
    rainbowBtn.addEventListener("click", colorCell);
}

function main() {
    makeGrid(16);
    actions();
}

