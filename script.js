import Decimal from './<link>Break_Eternity.js</link>'

var x = new Decimal("1e100")
var StardustDisplay = document.getElementById("StardustDisplay");

function doSomethingEveryFrame() {
  
  x.equals(x.mult(100))
  StardustDisplay.value = String(x);
  
  requestAnimationFrame(doSomethingEveryFrame);
}
doSomethingEveryFrame();