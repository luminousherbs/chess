console.log(location.pathname);

// functions
function squareAt(x, y) {
    return document.querySelectorAll(`[data-x="${x}"][data-y="${y}"]`)
}

// html elements for auto-complete
board;

// create board
for (let y = 0; y < 8; y++) {
    const rank = document.createElement("div");
    for (let x = 0; x < 8; x++) {
        const square = document.createElement("div");
        square.style.height = square.style.width = "100px";
        square.style.backgroundColor = (y % 2 === x % 2) ? "white": "black";
        square.style.display = "inline-block";
        square.dataset.y = y;
        square.dataset.x = x;
        rank.appendChild(square);
    }
    board.appendChild(rank);
}
console.log(squareAt(4, 7));