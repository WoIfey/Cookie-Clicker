var aAudio = new Audio("click1.mp3");
function clickAudio() {
  aAudio.play();
}

let score = 0;
const showScore = document.getElementById("score");

function auto() {
  if (score > 9) {
    setInterval(countScore, 1000);
    score = score - 10;
    showScore.textContent = score + " " + "🍪";
  }
}

function doubleScore() {
  if (score > 99) {
    setInterval(countScore, 500);
    score = score - 100;
    showScore.textContent = score + " " + "🍪";
  }
}

function tripleScore() {
  if (score > 999) {
    setInterval(countScore, 10);
    score = score - 1000;
    showScore.textContent = score + " " + "🍪";
  }
}

function countScore() {
  score++;
  showScore.textContent = score + " " + "🍪";
}
