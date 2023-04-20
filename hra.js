import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "circle";
let playerIcon = document.querySelector(".player--circle");

const playedSquare = (event) => {
  event.target.disabled = true;
  if (currentPlayer === "circle") {
    event.target.classList.add("board__field--circle");
    currentPlayer = "cross";
    playerIcon.classList.remove("player--circle");
    playerIcon.classList.add("player--cross");
  } else {
    event.target.classList.add("board__field--cross");
    currentPlayer = "circle";
    playerIcon.classList.remove("player--cross");
    playerIcon.classList.add("player--circle");
  }

  const squares = document.querySelectorAll("button");
  const squaresArray = Array.from(squares);
  const playBoard = squaresArray.map((button) => {
    if (button.classList.contains("board__field--circle")) {
      return "o";
    } else if (button.classList.contains("board__field--cross")) {
      return "x";
    } else {
      return "_";
    }
  });

  const winner = findWinner(playBoard);
  if (winner === "x" || winner === "o") {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}`);
      location.reload();
    }, 222);
  } else if (winner === "tie") {
    setTimeout(() => {
      alert("Pat a Mat!");
      location.reload();
    }, 222);
  }
};

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", playedSquare);
});

// play again
const playAgain = document.querySelector(".button--blue");
playAgain.addEventListener("click", (event) => {
  if (!confirm("Nová hra? Určitě? Baví tě to?")) {
    event.preventDefault();
  }
});
