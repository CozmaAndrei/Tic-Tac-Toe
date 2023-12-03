const cell0 = document.querySelector("#cell0");
const cell1 = document.querySelector("#cell1");
const cell2 = document.querySelector("#cell2");
const cell3 = document.querySelector("#cell3");
const cell4 = document.querySelector("#cell4");
const cell5 = document.querySelector("#cell5");
const cell6 = document.querySelector("#cell6");
const cell7 = document.querySelector("#cell7");
const cell8 = document.querySelector("#cell8");
const winningText = document.querySelector(".winningText");
const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");
const countGamesWonPlayer1 = document.querySelector(".player1");
const countGamesWonPlayer2 = document.querySelector(".player2");
let move = 1;
let gamesWonPlayer1 = 0;
let gamesWonPlayer2 = 0;

fillTheCellWithXor0();

function fillTheCellWithXor0() {
   for (let i = 0; i < cells.length; ++i) {
      let cell = cells[i];
      cell.onclick = function () {
         winningText.innerHTML = "";
         if (cell.innerHTML == "") {
            if (move % 2 == 1) {
               cell.innerHTML = "X";
            } else {
               cell.innerHTML = "0";
            }
         }
         ++move;
         winningPlayerOne();
         winningPlayerTwo()
         noOneWon();
         countWins();
      };

   }
}

function winningPlayerOne() {
   if (cell0.innerHTML == "X" && cell1.innerHTML == "X" &&
      cell2.innerHTML == "X") {
      winningText.innerHTML = "Player 1 is the WINNER";
      emptyTheCell();
   } else if (cell3.innerHTML == "X" && cell4.innerHTML == "X" &&
      cell5.innerHTML == "X") {
      winningText.innerHTML = "Player 1 is the WINNER";
      emptyTheCell();
   } else if (cell6.innerHTML == "X" && cell7.innerHTML == "X" &&
      cell8.innerHTML == "X") {
      winningText.innerHTML = "Player 1 is the WINNER";
      emptyTheCell();
   } else if (cell0.innerHTML == "X" && cell3.innerHTML == "X" &&
      cell6.innerHTML == "X") {
      winningText.innerHTML = "Player 1 is the WINNER";
      emptyTheCell();
   } else if (cell1.innerHTML == "X" && cell4.innerHTML == "X" &&
      cell7.innerHTML == "X") {
      winningText.innerHTML = "Player 1 is the WINNER";
      emptyTheCell();
   } else if (cell2.innerHTML == "X" && cell5.innerHTML == "X" &&
      cell8.innerHTML == "X") {
      winningText.innerHTML = "Player 1 is the WINNER";
      emptyTheCell();
   } else if (cell0.innerHTML == "X" && cell4.innerHTML == "X" &&
      cell8.innerHTML == "X") {
      winningText.innerHTML = "Player 1 is the WINNER";
      emptyTheCell();
   } else if (cell2.innerHTML == "X" && cell4.innerHTML == "X" &&
      cell6.innerHTML == "X") {
      winningText.innerHTML = "Player 1 is the WINNER";
      emptyTheCell();
   }
}

function winningPlayerTwo() {
   if (cell0.innerHTML == "0" && cell1.innerHTML == "0" &&
      cell2.innerHTML == "0") {
      winningText.innerHTML = "Player 2 is the WINNER";
      emptyTheCell();
   } else if (cell3.innerHTML == "0" && cell4.innerHTML == "0" &&
      cell5.innerHTML == "0") {
      winningText.innerHTML = "Player 2 is the WINNER";
      emptyTheCell();
   } else if (cell6.innerHTML == "0" && cell7.innerHTML == "0" &&
      cell8.innerHTML == "0") {
      winningText.innerHTML = "Player 2 is the WINNER";
      emptyTheCell();
   } else if (cell0.innerHTML == "0" && cell3.innerHTML == "0" &&
      cell6.innerHTML == "0") {
      winningText.innerHTML = "Player 2 is the WINNER";
      emptyTheCell();
   } else if (cell1.innerHTML == "0" && cell4.innerHTML == "0" &&
      cell7.innerHTML == "0") {
      winningText.innerHTML = "Player 2 is the WINNER";
      emptyTheCell();
   } else if (cell2.innerHTML == "0" && cell5.innerHTML == "0" &&
      cell8.innerHTML == "0") {
      winningText.innerHTML = "Player 2 is the WINNER";
      emptyTheCell();
   } else if (cell0.innerHTML == "0" && cell4.innerHTML == "0" &&
      cell8.innerHTML == "0") {
      winningText.innerHTML = "Player 2 is the WINNER";
      emptyTheCell();
   } else if (cell2.innerHTML == "0" && cell4.innerHTML == "0" &&
      cell6.innerHTML == "0") {
      winningText.innerHTML = "Player 2 is the WINNER";
      emptyTheCell();
   }
}

function noOneWon() {
   if (move == cells.length + 1) {
      winningText.innerHTML = "No WINNER";
      emptyTheCell();
   }
}

function emptyTheCell() {
   for (let i = 0; i < cells.length; ++i) {
      let cell = cells[i];
      cell.innerHTML = "";
      move = 1;
   }
}

function restartButton() {
   emptyTheCell();
   winningText.innerHTML = "";
}

function countWins() {
   if (winningText.innerHTML == "Player 1 is the WINNER") {
      ++gamesWonPlayer1;
      countGamesWonPlayer1.innerHTML = `Player 1: X || Games won: ${gamesWonPlayer1}`;
   } else if (winningText.innerHTML == "Player 2 is the WINNER") {
      ++gamesWonPlayer2;
      countGamesWonPlayer2.innerHTML = `Player 2: 0 || Games won: ${gamesWonPlayer2}`;
   }
}