console.log(location.pathname);

// functions
function squareAt(x, y) {
    return document.querySelector(`[data-x="${x}"][data-y="${y}"]`)
}

// html elements for auto-complete
board;

// constants
const layout = new Map([ // use Map instead of {} because arrays can't be used as object keys
    [[0, 0], "♟"],
    [[1, 0], "♟"],
    [[2, 0], "♟"],
    [[3, 0], "♟"],
    [[4, 0], "♟"],
    [[5, 0], "♟"],
    [[6, 0], "♟"],
    [[7, 0], "♟"],
]);

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
        rank.appendChild(square);
    }
    board.appendChild(rank);
}

for (const [key, value] of layout) {
    squareAt(key[0], key[1]).textContent = value;
}