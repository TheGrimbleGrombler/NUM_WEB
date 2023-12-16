const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}
let buyables = {
  syphon: {cost: E("1"), amount: E("0")},
  syphon2: {cost: E("100"), amount: E("0")}

};
let player = {
  stardust: E("1")

};

var x = new Decimal().fromString("1e100")
var StardustDisplay = document.getElementById("StardustDisplay");
var SyphonDisplay = document.getElementById("SyphonDisplay");
var SyphonButton = document.getElementById("SyphonButton");
var SyphonDisplay2 = document.getElementById("SyphonDisplay2");
var SyphonButton2 = document.getElementById("SyphonButton2");

function updateText() {

  gainstardust()
  
  
  StardustDisplay.innerHTML = String(player.stardust);
  SyphonDisplay.innerHTML = "You have " + String(buyables.syphon.amount) + " Syphons, "
  SyphonButton.innerHTML = "Cost: " + String(buyables.syphon.cost) + " Stardust";
  SyphonDisplay2.innerHTML = String(buyables.syphon2.amount);
  SyphonButton2.innerHTML = "Cost: " + String(buyables.syphon2.cost) + " Stardust";
}

setInterval(updateText, 16);

function gainstardust(){
  
  buyables.syphon.amount = buyables.syphon.amount.add(buyables.syphon2.amount.div(E("60")))
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
document.getElementById('SyphonButton2').addEventListener('click', function() {
  if (player.stardust.gte(buyables.syphon2.cost)) {
    player.stardust = player.stardust.sub(buyables.syphon2.cost)
    buyables.syphon2.amount = buyables.syphon2.amount.add(E("1"))
    buyables.syphon2.cost = buyables.syphon2.cost.mul(E("2"))
}});







updateText();