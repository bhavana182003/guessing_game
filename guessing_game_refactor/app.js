// app.js

let targetNum;
let maxNum;
let attempts = 0;

const setupDiv = document.getElementById("setup");
const gameDiv = document.getElementById("gameArea");
const maxInput = document.getElementById("maxInput");
const startBtn = document.getElementById("startBtn");

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const quitBtn = document.getElementById("quitBtn");
const resetBtn = document.getElementById("resetBtn");

const feedback = document.getElementById("feedback");
const status = document.getElementById("status");
const attemptsDisplay = document.getElementById("attempts");
const rangeMax = document.getElementById("rangeMax");

startBtn.addEventListener("click", () => {
  maxNum = parseInt(maxInput.value);
  if (!maxNum || maxNum < 1) {
    alert("Please enter a valid maximum number 🍬");
    return;
  }
  targetNum = Math.floor(Math.random() * maxNum) + 1;
  attempts = 0;

  rangeMax.textContent = maxNum;
  setupDiv.classList.add("hidden");
  gameDiv.classList.remove("hidden");
  resetBtn.classList.add("hidden");

  status.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  guessBtn.disabled = false;
  attemptsDisplay.textContent = "📊 Attempts: 0";
});

guessBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  if (!guess) {
    status.textContent = "⛔ Enter a valid number!";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `📊 Attempts: ${attempts}`;

  if (guess === targetNum) {
    status.textContent = `🎉 You got it in ${attempts} tries!`;
    guessBtn.disabled = true;
    guessInput.disabled = true;
    resetBtn.classList.remove("hidden");
  } else if (guess > targetNum) {
    status.textContent = "📉 Too high! Try again.";
  } else {
    status.textContent = "📈 Too low! Try again.";
  }
});

quitBtn.addEventListener("click", () => {
  status.textContent = "❌ You quit the game.";
  guessBtn.disabled = true;
  guessInput.disabled = true;
  resetBtn.classList.remove("hidden");
});

resetBtn.addEventListener("click", () => {
  setupDiv.classList.remove("hidden");
  gameDiv.classList.add("hidden");
  maxInput.value = "";
});
