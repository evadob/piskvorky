import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";

let currentPlayer = "circle";

let playerIcon = document.querySelector(".player--circle");

const buttons = document.querySelectorAll("button");

const playedSquare = (event) => {
  event.target.disabled = true;
  if (currentPlayer === "circle") {
    let btnElm = document.querySelector(".square");
    event.target.classList.add("board__field--circle");
    currentPlayer = "cross";
    playerIcon.classList.remove("player--circle");
    playerIcon.classList.add("player--cross");
  } else {
    let btnElm = document.querySelector(".square");
    event.target.classList.add("board__field--cross");
    currentPlayer = "circle";
    playerIcon.classList.remove("player--cross");
    playerIcon.classList.add("player--circle");
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", playedSquare);
});
