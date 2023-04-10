let currentPlayer = "circle";

const square1 = document.querySelector("button:nth-child(1)");
const square2 = document.querySelector("button:nth-child(2)");
const square3 = document.querySelector("button:nth-child(3)");
const square4 = document.querySelector("button:nth-child(4)");
const square5 = document.querySelector("button:nth-child(5)");
const square6 = document.querySelector("button:nth-child(6)");
const square7 = document.querySelector("button:nth-child(7)");
const square8 = document.querySelector("button:nth-child(8)");
const square9 = document.querySelector("button:nth-child(9)");
const square10 = document.querySelector("button:nth-child(10)");

const playedSquare = (event) => {
  const playedSquare = event.target.classList.add("board__field--circle");
  event.target.disabled = true;
};

square1.addEventListener("click", playedSquare);
square2.addEventListener("click", playedSquare);
square3.addEventListener("click", playedSquare);
square4.addEventListener("click", playedSquare);
square5.addEventListener("click", playedSquare);
square6.addEventListener("click", playedSquare);
square7.addEventListener("click", playedSquare);
square8.addEventListener("click", playedSquare);
square9.addEventListener("click", playedSquare);
square10.addEventListener("click", playedSquare);
