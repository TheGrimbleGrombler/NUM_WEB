const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}
let buyables = {
  syphon: {cost: E("1"), amount: E("0")}

}
let player = {
  stardust: E("1")

}

var x = new Decimal().fromString("1e100")
var StardustDisplay = document.getElementById("StardustDisplay");
var SyphonDisplay = document.getElementById("SyphonDisplay");

function updateText() {

  gainstardust()
  
  
  StardustDisplay.innerHTML = String(player.stardust);
  SyphonDisplay.innerHTML = String(buyables.syphon.amount);
}

setInterval(updateText, 16);

function gainstardust(){
  
  var gain = E("0")
  gain = gain.add(buyables.syphon.amount)
  
  
  var gain = gain.div(60)
  player.stardust = player.stardust.add(gain)
}


document.getElementById('SyphonButton').addEventListener('click', function() {
  if (player.stardust.gte(buyables.syphon.cost)) {
    player.stardust = player.stardust.sub(buyables.syphon.cost)
    buyables.syphon.amount = buyables.syphon.amount.add(E("1"))
    buyables.syphon.cost = buyables.syphon.cost.mul(E("2"))
}});







updateText();