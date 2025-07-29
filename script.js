console.log(location.pathname);

// html elements for auto-complete
board;

// create board
for (let j = 0; j < 8; j++) {
    const rank = document.createElement("div");
    for (let i = 0; i < 8; i++) {
        const square = document.createElement("div");
        square.style.height = square.style.width = "100px";
        square.style.backgroundColor = (j % 2 === i % 2) ? "white": "black";
        square.style.display = "inline-block";
        rank.appendChild(square);
    }
    board.appendChild(rank);
}