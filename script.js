let currentPlayer;
let chosenSymbol = false;
let gameOver = false;

function playButton(symbol) {
  if (!chosenSymbol) {
    chosenSymbol = symbol;
    currentPlayer = chosenSymbol;
  }
}

function play(cell) {
  if (!chosenSymbol || gameOver) {
    return;
  }
  if (cell.innerHTML !== "") {
    return;
  }

  cell.innerHTML = currentPlayer;

  checkWin();

  if (currentPlayer === "X") {
    currentPlayer = "0";
  } else {
    currentPlayer = "X";
  }

  if (checkTie()) {
    gameOver = true;
    const mesaje = document.getElementById("mesaje");
    mesaje.textContent = "Draw game!";
    //alert("Draw game!");
    
  }
}

function checkWin() {
  if (
    checkRow(1, 2, 3) ||
    checkRow(4, 5, 6) ||
    checkRow(7, 8, 9) ||
    checkRow(1, 4, 7) ||
    checkRow(2, 5, 8) ||
    checkRow(3, 6, 9) ||
    checkRow(1, 5, 9) ||
    checkRow(3, 5, 7)
  ) {
    gameOver = true;
    const mesaje = document.getElementById("mesaje");
    mesaje.textContent = "Player " + currentPlayer + " wins";
    //alert(currentPlayer + " wins!");
  }
}

function checkRow(a, b, c) {
  return (
    getCell(a) === currentPlayer &&
    getCell(b) === currentPlayer &&
    getCell(c) === currentPlayer
  );
}

function checkTie() {
  for (let i = 1; i <= 9; i++) {
    if (getCell(i) === "") {
      return false;
    }
  }
  return true;
}

function getCell(number) {
  return document.getElementById("cell" + number).innerHTML;
}
function resetGame() {
  location.reload();
}
