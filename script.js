const message = document.querySelector(".textMessage");
const cells = document.querySelectorAll(".cell");
const countGamesWonPlayer1 = document.querySelector(".player1");
const countGamesWonPlayer2 = document.querySelector(".player2");
let move = 0;
let gamesWonPlayer1 = 0;
let gamesWonPlayer2 = 0;
let runningGame = true;
const Player1 = "X";
const Player2 = "0";
//am construit un array cu combinatiile de castig
const winningOptions = [[0, 3, 6], [1, 4, 7], [2, 5 ,8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 4, 6], [0, 4, 8]];

function fillTheCells(event) {
   if (event.target.innerHTML == "" && runningGame) {
      if (move % 2 == 0) {
         event.target.innerHTML = "X"; 
      } else {
         event.target.innerHTML = "0";
      }
      ++move;
      chooseTheWinner();
      //countWins();
   }
}

function chooseTheWinner() {
   for (const winnerModel of winningOptions) {
      const [a, b, c] = winnerModel;
      if (cells[a].innerHTML === Player1 && cells[b].innerHTML === Player1 && cells[c].innerHTML === Player1) {
         message.innerHTML = "Player 1 is the WINNER !";
         runningGame = false;
         ++gamesWonPlayer1;
         countGamesWonPlayer1.innerHTML = `Player 1: X || Games won: ${gamesWonPlayer1}`;
      } else if (cells[a].innerHTML === Player2 && cells[b].innerHTML === Player2 && cells[c].innerHTML === Player2) {
         message.innerHTML = "Player 2 is the WINNER !";
         runningGame = false;
         ++gamesWonPlayer2;
         countGamesWonPlayer2.innerHTML = `Player 2: 0 || Games won: ${gamesWonPlayer2}`;
      } else if (move == cells.length) {
         message.innerHTML = "No WINNER";
      }
   }
}

emptyTheCell();

function emptyTheCell() {
   for (let i = 0; i < cells.length; ++i) {
      let cell = cells[i];
      cell.innerHTML = "";
      move = 0;
      cell.addEventListener("click", fillTheCells);
   }
}

function restartButton() {
   emptyTheCell();
   message.innerHTML = "";
   runningGame = true;
}

// am renuntat la aceasta functie si am introdus instructiunile in functia chooseTheWinner()
/*function countWins() {
   if (message.innerHTML == "Player 1 is the WINNER !") {
      ++gamesWonPlayer1;
      countGamesWonPlayer1.innerHTML = `Player 1: X || Games won: ${gamesWonPlayer1}`;   
   } else if (message.innerHTML == "Player 2 is the WINNER !") {
      ++gamesWonPlayer2;
      countGamesWonPlayer2.innerHTML = `Player 2: 0 || Games won: ${gamesWonPlayer2}`;
   }
}*/
