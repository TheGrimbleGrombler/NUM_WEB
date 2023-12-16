const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}

let player = {
  stardust: E("0")
  
}

var x = new Decimal().fromString("1e100")
var StardustDisplay = document.getElementById("StardustDisplay");

function updateText() {

  gainstardust()
  
  
  StardustDisplay.innerHTML = String(player.stardust);
}

setInterval(updateText, 16);

function gainstardust(){
  
  var gain = E("1")
  
  
  var gain = gain.div(60)
  player.stardust = player.stardust.add(gain)
}










updateText();