var x = new Decimal("1e100");
var StardustDisplay = document.getElementById("StardustDisplay");

function updateText() {
  x.equals(x.mult(100));
  StardustDisplay.innerHTML = String(x);
}

setInterval(updateText, 16);

updateText();
