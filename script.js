const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}
let buyables = {
  syphon: {cost: E("1"), amount: E("0"), effect: function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.mul(buyables.syphon.amount.log2())} else {return buyables.syphon.amount}}},
  collector: {cost: E("100"), amount: E("0"), effect: function() {return buyables.collector.amount}},
  field: {cost: E("2000"), amount: E("0"), effect: function() {return buyables.field.amount}}

};
let upgrades = {
  incrementallist: {cost: E("25000"), bought: false, effect: function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.log2()} else {return E("1")}}, display: "Manually bought syphons boost their effect"},
  //incrementallist: {cost: E("25000"), bought: false, effect: function() {if (upgrades.incrementallist.bought==true) {return E("3")} else {return E("1")}}},

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
var FieldDisplay = document.getElementById("FieldDisplay");
var FieldButton = document.getElementById("FieldButton");

function updateText() {

  gainbuyables()
  gainstardust()
  
  
  StardustDisplay.innerHTML = "You have " + String(player.stardust) + " Stardust";
  SyphonDisplay.innerHTML = "You have " + String(buyables.syphon.amount) + " Syphons, Boosting Stardust gain by +" + String(buyables.syphon.amount) + "/s";
  SyphonButton.innerHTML = "Cost: " + String(buyables.syphon.cost) + " Stardust";
  CollectorDisplay.innerHTML = "You have " + String(buyables.collector.amount) + " Collectors, Producing " + String(buyables.collector.amount) + " syphons/s";
  CollectorButton.innerHTML = "Cost: " + String(buyables.collector.cost) + " Stardust";
  FieldDisplay.innerHTML = "You have " + String(buyables.field.amount) + " Fields, Producing " + String(buyables.field.amount) + " collectors/s";
  FieldButton.innerHTML = "Cost: " + String(buyables.field.cost) + " Stardust";
}

setInterval(updateText, 16);
function gainbuyables(){
  
  
  buyables.collector.amount = buyables.collector.amount.add(buyables.field.effect().div(E("60")))
  buyables.syphon.amount = buyables.syphon.amount.add(buyables.collector.effect().div(E("60")))
  
  
}
function gainstardust(){
  var gain = E("0")
  
  var temp = buyables.syphon.amount
  if (upgrades.incrementallist.bought == true) {temp = temp.mul(temp.log2())}
  gain = gain.add(temp)
  
  
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
    buyables.collector.cost = buyables.collector.cost.mul(E("3"))
}});
document.getElementById('FieldButton').addEventListener('click', function() {
  if (player.stardust.gte(buyables.field.cost)) {
    player.stardust = player.stardust.sub(buyables.field.cost)
    buyables.field.amount = buyables.field.amount.add(E("1"))
    buyables.field.cost = buyables.field.cost.mul(E("10"))
}});







updateText();