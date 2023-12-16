const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}
var x = new Decimal().fromString("1e100")
var StardustDisplay = document.getElementById("StardustDisplay");

function updateText() {
  x = x.mul(E("2"));
  console.log(x)
  StardustDisplay.innerHTML = String(x);
}

setInterval(updateText, 16);

updateText();
