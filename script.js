import Decimal from './break_eternity.js';

var x = Decimal().fromString("1e100")
var StardustDisplay = document.getElementById("StardustDisplay");

function updateText() {
  x.equals(x.mult(100));
  StardustDisplay.innerHTML = String(x);
}

setInterval(updateText, 16);

updateText();
