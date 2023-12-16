const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}
let buyables = {
  syphon: {cost: E("1"), amount: E("0")},
  collector: {cost: E("100"), amount: E("0")}

};
let player = {
  stardust: E("1")

};

var x = new Decimal().fromString("1e100")
var StardustDisplay = document.getElementById("StardustDisplay");
var SyphonDisplay = document.getElementById("SyphonDisplay");
var SyphonButton = document.getElementById("SyphonButton");
var CollectorDisplay = document.getElementById("CollectorDisplay");
var CollectorButton = document.getElementById("CollectorButton");

function updateText() {

  gainstardust()
  
  
  StardustDisplay.innerHTML = "You have " + String(player.stardust) + " Stardust";
  SyphonDisplay.innerHTML = "You have " + String(buyables.syphon.amount) + " Syphons, Boosting Stardust gain by +" + String(buyables.syphon.amount) + "/s";
  SyphonButton.innerHTML = "Cost: " + String(buyables.syphon.cost) + " Stardust";
  CollectorDisplay.innerHTML = "You have " + String(buyables.collector.amount) + " Collectors, Producing " + String(buyables.collector.amount) + " syphons/s";
  CollectorButton.innerHTML = "Cost: " + String(buyables.collector.cost) + " Stardust";
}

setInterval(updateText, 16);

function gainstardust(){
  
  buyables.syphon.amount = buyables.syphon.amount.add(buyables.collector.amount.div(E("60")))
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
document.getElementById('CollectorButton').addEventListener('click', function() {
  if (player.stardust.gte(buyables.collector.cost)) {
    player.stardust = player.stardust.sub(buyables.collector.cost)
    buyables.collector.amount = buyables.collector.amount.add(E("1"))
    buyables.collector.cost = buyables.collector.cost.mul(E("2"))
}});







updateText();