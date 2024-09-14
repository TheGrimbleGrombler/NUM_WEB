var tick = 0;

const newstexts = [
  "HEY HEY HEY!!!!",
  "What the rizz?",
  "Back in my day we didn't have these darn videogames.",
  "Breaking news: Florginshammerinkledroohashlir."
]

var current = 3

var textbox = document.getElementById("NewsText")

function news() {
  tick += 1;
  if (tick == 1) {
    current = 3
  }
  
  textbox.style.left = String(100 - tick) + "%"
  textbox.innerHTML = newstexts[current]
  
  if (tick >= 200) {
    tick = 0
  }
  
}



document.addEventListener("DOMContentLoaded", function() {
  news();
  setInterval(news, 16);
});