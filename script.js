console.log(location.pathname);

// functions
function squareAt(x, y) {
    return document.querySelector(`[data-x="${x}"][data-y="${y}"]`)
}

// html elements for auto-complete
board;

// constants
const layout = new Map([ // use Map instead of {} because arrays can't be used as object keys
    [[0, 0], {color: "white-piece", piece: "♟"}],
    [[1, 0], {color: "black-piece", piece: "♟"}],
    [[2, 0], {color: "black-piece", piece: "♟"}],
    [[3, 0], {color: "white-piece", piece: "♟"}],
    [[4, 0], {color: "black-piece", piece: "♟"}],
    [[5, 0], {color: "white-piece", piece: "♟"}],
    [[6, 0], {color: "white-piece", piece: "♟"}],
    [[7, 0], {color: "black-piece", piece: "♟"}],
]);

// create board
for (let y = 0; y < 8; y++) {
    const rank = document.createElement("div");
    for (let x = 0; x < 8; x++) {
        const square = document.createElement("div");
        square.className += "square ";
        // square.className += Math.random() < 0.5 ? "white-piece ": "black-piece ";
        square.className += (y % 2 === x % 2) ? "light ": "dark ";
        square.dataset.y = y;
        square.dataset.x = x;
        rank.appendChild(square);
    }
    board.appendChild(rank);
}

for (const [key, value] of layout) {
    const square = squareAt(key[0], key[1]);
    square.textContent = value.piece;
    square.className += value.color + " ";
    
}