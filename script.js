const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}
let buyables = {
  syphon: {cost: E("1"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.mul(upgrades.incrementallist.effect())} else {return buyables.syphon.amount}}},
  collector: {cost: E("100"), amount: E("0"), manuals: E("0"), effect: function() {return buyables.collector.amount}},
  field: {cost: E("2000"), amount: E("0"), manuals: E("0"), effect: function() {return buyables.field.amount}}

};
let upgrades = {
  incrementallist: {cost: E("25000"), bought: false, effect: function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.log10()} else {return E("1")}}, display: "Syphons boost their own effect"},
  Gravity: {cost: E("500000"), bought: false, effect: function() {if (upgrades.incrementallist.bought==true) {return "It is done."} else {return "Currently no gravity... Maybe it's better this way."}}, display: "Unlock Gravity"},
  //incrementallist: {cost: E("25000"), bought: false, effect: function() {if (upgrades.incrementallist.bought==true) {return E("3")} else {return E("1")}}},
};
let unlockedsubtabs = {
  Main: true,
  
  
}
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
var UpgradeName = document.getElementById('UpgradeNameDisplay');
var UpgradeEffect = document.getElementById('UpgradeEffectDisplay');
var UpgradeCost = document.getElementById('UpgradeCostDisplay');



function updateText() {

  gainbuyables()
  gainstardust()
  
  
  StardustDisplay.innerHTML = "You have " + String(player.stardust) + " Stardust";
  SyphonDisplay.innerHTML = "You have " + String(buyables.syphon.amount) + " (" + String(buyables.syphon.manuals) +") Syphons, Boosting Stardust gain by +" + String(buyables.syphon.amount) + "/s";
  SyphonButton.innerHTML = "Cost: " + String(buyables.syphon.cost) + " Stardust";
  CollectorDisplay.innerHTML = "You have " + String(buyables.collector.amount) + " (" + String(buyables.collector.manuals) +") Collectors, Producing " + String(buyables.collector.amount) + " syphons/s";
  CollectorButton.innerHTML = "Cost: " + String(buyables.collector.cost) + " Stardust";
  FieldDisplay.innerHTML = "You have " + String(buyables.field.amount) + " (" + String(buyables.field.manuals) +") Fields, Producing " + String(buyables.field.amount) + " collectors/s";
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
  if (upgrades.incrementallist.bought == true) {temp = temp.mul(upgrades.incrementallist.effect())}
  gain = gain.add(temp)
  
  
  var gain = gain.div(60)
  player.stardust = player.stardust.add(gain)
}


document.getElementById('SyphonButton').addEventListener('click', function() {
  if (player.stardust.gte(buyables.syphon.cost)) {
    player.stardust = player.stardust.sub(buyables.syphon.cost)
    buyables.syphon.amount = buyables.syphon.amount.add(E("1"))
    buyables.syphon.manuals = buyables.syphon.manuals.add(E("1"))
    buyables.syphon.cost = buyables.syphon.cost.mul(E("2"))
}});
document.getElementById('CollectorButton').addEventListener('click', function() {
  if (player.stardust.gte(buyables.collector.cost)) {
    player.stardust = player.stardust.sub(buyables.collector.cost)
    buyables.collector.manuals = buyables.collector.manuals.add(E("1"))
    buyables.collector.amount = buyables.collector.amount.add(E("1"))
    buyables.collector.cost = buyables.collector.cost.mul(E("3"))
}});
document.getElementById('FieldButton').addEventListener('click', function() {
  if (player.stardust.gte(buyables.field.cost)) {
    player.stardust = player.stardust.sub(buyables.field.cost)
    buyables.field.amount = buyables.field.amount.add(E("1"))
    buyables.field.manuals = buyables.field.manuals.add(E("1"))
    buyables.field.cost = buyables.field.cost.mul(E("10"))
}});

function openTab(tabName) {
  // Get all elements with class "tabcontent"
  var tabContents = document.getElementsByClassName("tabcontent");
  
  // Loop through the tab content elements
  for (var i = 0; i < tabContents.length; i++) {
    // Hide the tab content that doesn't match the selected tab
    if (tabContents[i].id === tabName) {
      tabContents[i].style.display = "block";
      
        // Get all elements with class "tabcontent"
        var tabContents2 = document.getElementsByClassName("subtabbutton");
  
        // Loop through the tab content elements
        for (var j = 0; j < tabContents2.length; j++) {
          // Hide the tab content that doesn't match the selected tab
          if (unlockedsubtabs[tabContents2[j].id]) {
            tabContents2[j].style.display = "block";
          } else {
            tabContents2[j].style.display = "none";
          }
        }
      
    } else {
      tabContents[i].style.display = "none";
    }
  }
}

function openSubtab(tabName) {
  // Get all elements with class "tabcontent"
  var tabContents = document.getElementsByClassName("subtabcontent");
  
  // Loop through the tab content elements
  for (var i = 0; i < tabContents.length; i++) {
    // Hide the tab content that doesn't match the selected tab
    if (tabContents[i].id === tabName) {
      tabContents[i].style.display = "block";
    } else {
      tabContents[i].style.display = "none";
    }
  }
}

document.getElementById('tab1button').addEventListener('click', function() {
  openTab("tab1")
});
document.getElementById('tab2button').addEventListener('click', function() {
  openTab("tab2")
});
document.getElementById('subtab1button').addEventListener('click', function() {
  openSubtab("subtab1")
});
document.getElementById('subtab2button').addEventListener('click', function() {
  openSubtab("subtab2")
});

document.getElementById('IncrementallistButton').addEventListener('mouseover', function(event) {
    if (upgrades.incrementallist.bought == true) {UpgradeName.innerHTML = "Incrementallist (Bought)"} else {UpgradeName.innerHTML = "Incrementallist (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.incrementallist.display) + ", Currently " + String(upgrades.incrementallist.effect()) + "x."
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.incrementallist.cost) + " Stardust"
});

document.getElementById('GravityButton').addEventListener('mouseover', function(event) {
    if (upgrades.Gravity.bought == true) {UpgradeName.innerHTML = "Gravity (Bought)"} else {UpgradeName.innerHTML = "Gravity (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.Gravity.effect());
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.Gravity.cost) + " Stardust"
    if (unlockedsubtabs[]) {}
});


document.getElementById('IncrementallistButton').addEventListener('click', function() {
  if (player.stardust.gte(upgrades.incrementallist.cost)) {
      if (upgrades.incrementallist.bought == false) {
    player.stardust = player.stardust.sub(upgrades.incrementallist.cost)
    upgrades.incrementallist.bought = true
}}});



updateText();