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
        square.className += "square ";
        square.className += Math.random() < 0.5 ? "white-piece ": "black-piece ";
        square.className += (y % 2 === x % 2) ? "light": "dark";
        square.dataset.y = y;
        square.dataset.x = x;
        square.textContent = "♟";
        rank.appendChild(square);
    }
    board.appendChild(rank);
}
console.log(squareAt(4, 7));