console.log(location.pathname);

// functions
function squareAt(x, y) {
    return document.querySelector(`[data-x="${x}"][data-y="${y}"]`)
}

// html elements for auto-complete
board;

// constants
const layout = new Map([ // use Map instead of {} because arrays can't be used as object keys
    [[0, 0], {color: "black-piece", piece: "♜"}],
    [[1, 0], {color: "black-piece", piece: "♞"}],
    [[2, 0], {color: "black-piece", piece: "♝"}],
    [[3, 0], {color: "black-piece", piece: "♛"}],
    [[4, 0], {color: "black-piece", piece: "♚"}],
    [[5, 0], {color: "black-piece", piece: "♝"}],
    [[6, 0], {color: "black-piece", piece: "♞"}],
    [[7, 0], {color: "black-piece", piece: "♜"}],
    [[0, 1], {color: "black-piece", piece: "♟"}],
    [[1, 1], {color: "black-piece", piece: "♟"}],
    [[2, 1], {color: "black-piece", piece: "♟"}],
    [[3, 1], {color: "black-piece", piece: "♟"}],
    [[4, 1], {color: "black-piece", piece: "♟"}],
    [[5, 1], {color: "black-piece", piece: "♟"}],
    [[6, 1], {color: "black-piece", piece: "♟"}],
    [[7, 1], {color: "black-piece", piece: "♟"}],
    [[0, 6], {color: "white-piece", piece: "♟"}],
    [[1, 6], {color: "white-piece", piece: "♟"}],
    [[2, 6], {color: "white-piece", piece: "♟"}],
    [[3, 6], {color: "white-piece", piece: "♟"}],
    [[4, 6], {color: "white-piece", piece: "♟"}],
    [[5, 6], {color: "white-piece", piece: "♟"}],
    [[6, 6], {color: "white-piece", piece: "♟"}],
    [[7, 6], {color: "white-piece", piece: "♟"}],
    [[0, 7], {color: "white-piece", piece: "♜"}],
    [[1, 7], {color: "white-piece", piece: "♞"}],
    [[2, 7], {color: "white-piece", piece: "♝"}],
    [[3, 7], {color: "white-piece", piece: "♛"}],
    [[4, 7], {color: "white-piece", piece: "♚"}],
    [[5, 7], {color: "white-piece", piece: "♝"}],
    [[6, 7], {color: "white-piece", piece: "♞"}],
    [[7, 7], {color: "white-piece", piece: "♜"}],
]);

// create board
for (let y = 0; y < 8; y++) {
    const rank = document.createElement("div");
    for (let x = 0; x < 8; x++) {
        const square = document.createElement("div");
        square.className += "square ";
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