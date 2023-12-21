const diceRoll = document.getElementById("dice");
const dice = document.getElementById("dice-image");
const appendDice = document.getElementById("picks");
const divContainer = document.getElementById("move-picks img");

let count = 0;

function probability() {
  const diceOptions = [
    { dice1: "./images/inverted-dice-1.svg" },
    { dice2: "./images/inverted-dice-2.svg" },
    { dice3: "./images/inverted-dice-3.svg" },
    { dice4: "./images/inverted-dice-4.svg" },
    { dice5: "./images/inverted-dice-5.svg" },
    { dice6: "./images/inverted-dice-6.svg" },
  ];
  let randomIndex = Math.floor(Math.random() * diceOptions.length);
  const rand = diceOptions[randomIndex];
  const randomKey = Object.values(rand)[0];
  dice.src = randomKey;

  appendDice.style.display = "flex";
  appendDice.innerHTML = `
    <p>Roll ${(count += 1)}:</p>
    <img class="style" src="${randomKey}" />`;

}

diceRoll.addEventListener("click", () => {
  dice.classList.add("animate");
  setTimeout(() => {
    dice.classList.remove("animate");
    probability();
  }, 1000);
});
