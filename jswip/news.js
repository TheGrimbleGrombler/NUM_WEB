var tick = 0;

function news() {
  tick += 1;
  
}



document.addEventListener("DOMContentLoaded", function() {
  news();
  setInterval(news, 16);
});