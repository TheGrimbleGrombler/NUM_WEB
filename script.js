const Decimal = window.Decimal;

var x = new Decimal().fromString("1e100")
var StardustDisplay = document.getElementById("StardustDisplay");

function updateText() {
  x.equals(x.mul());
  StardustDisplay.innerHTML = String(x);
}
var s = E(100)

setInterval(updateText, 16);

updateText();
