// Select HTML elements
const rgbText = document.getElementById("rgb");
const choices = document.getElementById("choices");
const msg = document.getElementById("msg");
const livesEl = document.getElementById("lives");
const scoreEl = document.getElementById("score");
const playAgain = document.getElementById("play-again");

let lives = 3;
let score = 0;

// Start the game
startGame();

function startGame() {
  lives = 3;
  score = 0;
  updateUI();
  playAgain.style.display = "none";
  nextRound();
}

function nextRound() {
  choices.innerHTML = "";
  msg.textContent = "";

  let correct = getColor();
  rgbText.textContent = correct;
  let colors = [correct];

  while (colors.length < 3) {
    let color = getColor();
    if (!colors.includes(color)) colors.push(color);
  }

  // Shuffle colors
  colors.sort(() => Math.random() - 0.5);

  colors.forEach(c => {
    let div = document.createElement("div");
    div.className = "color";
    div.style.backgroundColor = c;
    div.onclick = () => checkAnswer(c, correct);
    choices.appendChild(div);
  });
}

function getColor() {
  let r = rand(), g = rand(), b = rand();
  return `rgb(${r}, ${g}, ${b})`;
}

function rand() {
  return Math.floor(Math.random() * 256);
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    msg.textContent = "Correct!";
    score++;
  } else {
    msg.textContent = "Wrong!";
    lives--;
  }

  updateUI();

  if (lives > 0) {
    setTimeout(nextRound, 800);
  } else {
    msg.textContent = `Game Over! Final Score: ${score}`;
    playAgain.style.display = "inline";
  }
}

function updateUI() {
  livesEl.textContent = lives;
  scoreEl.textContent = score;
}

playAgain.onclick = startGame;
