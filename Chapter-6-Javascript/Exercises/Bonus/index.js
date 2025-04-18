//Get references to HTML elements
const rgbText = document.getElementById("rgb");
const choices = document.getElementById("choices");
const msg = document.getElementById("msg");
const livesEl = document.getElementById("lives");
const scoreEl = document.getElementById("score");
const playAgain = document.getElementById("play-again");

let lives = 3;
let score = 0;

//Start the game
startGame();

function startGame() {
  //Reset lives and score for a new game
  lives = 3;
  score = 0;
  //Update the UI with the new lives and score
  updateUI();
  playAgain.style.display = "none";
  nextRound();
}

function nextRound() {
  //Clear any previous round choices and message
  choices.innerHTML = "";
  msg.textContent = "";

  //Get the correct RGB value and display it
  let correct = getColor();
  rgbText.textContent = correct;
  let colors = [correct];

  //Add random colors to the choices until there are 3
  while (colors.length < 3) {
    let color = getColor();
    if (!colors.includes(color)) colors.push(color);
  }

  //Shuffle the colors randomly to create a random selection
  colors.sort(() => Math.random() - 0.5);

  //Display the color choices for the player to pick
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
  //If the selected color is correct, update the score and message
  if (selected === correct) {
    msg.textContent = "Correct!";
    score++;
  } else {
    //If the selected color is wrong, decrease lives and update message
    msg.textContent = "Wrong!";
    lives--;
  }

  updateUI();

  //If the game is not over, start the next round after a short delay
  if (lives > 0) {
    setTimeout(nextRound, 800);
  } else {
    //If the game is over, show the final score and play again option
    msg.textContent = `Game Over! Final Score: ${score}`;
    playAgain.style.display = "inline";
  }
}

function updateUI() {
  //Update the lives and score on the screen
  livesEl.textContent = lives;
  scoreEl.textContent = score;
}

//Restart the game when the play again button is clicked
playAgain.onclick = startGame;
