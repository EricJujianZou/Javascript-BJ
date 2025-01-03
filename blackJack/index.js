// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBJ = false;
let isAlive = true;
let message = "";
let startButton = document.getElementById("start-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el"); //an alternate way that can select by other criterias such as
//class, tags, id, attributes, which is more flexible even tho slower. and good for multiple selection at once.
let newCardButton = document.querySelector("#new-btn");
let player = {
  name: "Eric",
  chips: 200,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

startButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", newCard);

function startGame() {
  mainGame();
}
function mainGame() {
  cardsEl.textContent = `Cards: ${cards.join(" ")}`;
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Draw new card?";
  } else if (sum === 21) {
    // === is the strictly equals comparison operator in js
    message = "You got blackjack! Congrats!";
    hasBJ = true;
  } else if (sum > 21) {
    message = "bombed;";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && hasBJ === false) {
    let newCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
    sum += newCard;
    cards.push(newCard);
    mainGame();
  }
}
