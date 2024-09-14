var tick = 0;

var newstexts = [
  "Breaking news: Disease outbreak crates laser zebras.",
  "What the rizz?",
  "Back in my day we didn't have these darn videogames.",
  "Rat infestation found to be a leading cause of child labor.",
  "League of Legends players' brain found to be missing.",
  "Asteroid mining accident causes $8.4Qd in damages.",
  "Pinapple on pizza found to cause cancer in new study.",
  "The One Piece Is Real",
]

function Random(m) {
  return Math.floor(m*Math.random());
}

var current = 3

var textbox = document.getElementById("newsText")

function news() {
  tick += 1;
  
  textbox.style.left = String(100 - tick/10) + "%"
  textbox.innerHTML = newstexts[current]
  
  if (tick >= 2000) {
    tick = 0
    current = Random(3)
  }
  
}



document.addEventListener("DOMContentLoaded", function() {
  news();
  setInterval(news, 16);
});