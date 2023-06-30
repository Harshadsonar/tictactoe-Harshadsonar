const messageElement = document.querySelector('.message');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';

function handleCellClick(event) {
    const cell = event.target;


    if (cell.textContent !== '') {
        return;
    }
    cell.textContent = currentPlayer;

    if (checkWin()) {
        messageElement.textContent = `${currentPlayer}, congratulations you won! `;
        return;
    }
    currentPlayer = (currentPlayer === 'X') ? '0' : 'X';

    messageElement.textContent = `${currentPlayer}, you're up`;
}

function checkWin() {
    const board = [
        [getCell(1), getCell(2), getCell(3)],
        [getCell(4), getCell(5), getCell(6)],
        [getCell(7), getCell(8), getCell(9)]
    ];

    // Check rows
    for (let row = 0; row < 3; row++) {
        if (
            board[row][0] !== '' &&
            board[row][0] === board[row][1] &&
            board[row][0] === board[row][2]
        ) {
            return true; // Row win
        }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
        if (
            board[0][col] !== '' &&
            board[0][col] === board[1][col] &&
            board[0][col] === board[2][col]
        ) {
            return true; // Column win
        }
    }

    // Check diagonals
    if (
        (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
        (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0])
    ) {
        return true; // Diagonal win
    }

    return false; // No win
}

// Function to get the content of a cell given its id
function getCell(id) {
    return document.getElementById(id).textContent;
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});