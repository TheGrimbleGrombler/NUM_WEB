const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}
let buyables = {
  syphon: {cost: E("1"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.mul(upgrades.incrementallist.effect())} else {return buyables.syphon.amount}}},
  collector: {cost: E("100"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.Gravity.bought == false) {return buyables.collector.amount} else {return buyables.collector.amount.mul(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")))}}},
  field: {cost: E("2000"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.MEM.bought == false) {return buyables.field.amount} else {return buyables.field.amount.pow(upgrades.MEM.effect())}}}

};
let upgrades = {
  incrementallist: {cost: E("25000"), costtype: "stardust", bought: false, effect: function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.log10()} else {return E("1")}}, display: "Syphons boost their own effect"},
  Gravity: {cost: E("200000"), costtype: "stardust", bought: false, effect: function() {if (upgrades.Gravity.bought==true) {return "It is done."} else {return "Currently no gravity... Maybe it's better this way."}}, display: "Unlock Gravity"},
  MEM: {cost: E("2e6"), costtype: "stardust", bought: false, effect: function() {if (upgrades.MEM.bought==true) {return E("2")} else {return E("1")}}, display: "Squares the effect of fields, Currently: ^"},
  feedbackloop: {cost: E("5e7"), costtype: "stardust", bought: false, effect: function() {if (upgrades.feedbackloop.bought==true) {return E("1.1").pow(buyables.syphon.manuals.add(buyables.collector.manuals).add(buyables.field.manuals))} else {return E("1")}}, display: "Stardust gain x1.1 for each manual buyable level, Currently: x"},
  //incrementallist: {cost: E("25000"), bought: false, effect: function() {if (upgrades.incrementallist.bought==true) {return E("3")} else {return E("1")}}},
};


function loadfunctions() {
  
  var b = buyables
  var u = upgrades
  
  b.syphon.effect = function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.mul(upgrades.incrementallist.effect())} else {return buyables.syphon.amount}}
  b.collector.effect = function() {if (upgrades.Gravity.bought == false) {return buyables.collector.amount} else {return buyables.collector.amount.mul(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")))}}
  b.field.effect = function() {if (upgrades.MEM.bought == false) {return buyables.field.amount} else {return buyables.field.amount.pow(upgrades.MEM.effect())}}
  
  u.incrementallist.effect = function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.log10()} else {return E("1")}}
  u.Gravity.effect = function() {if (upgrades.Gravity.bought==true) {return "It is done."} else {return "Currently no gravity... Maybe it's better this way."}}
  u.MEM.effect = function() {if (upgrades.MEM.bought==true) {return E("2")} else {return E("1")}}
  u.feedbackloop.effect = function() {if (upgrades.feedbackloop.bought==true) {return E("1.1").pow(buyables.syphon.manuals.add(buyables.collector.manuals).add(buyables.field.manuals))} else {return E("1")}}
  
}





let unlockedsubtabs = {
  "Main": true,
  
}
let player = {
  stardust: E("1"),
  gravitational_waves: E("0"),
  a_particles: E("1"),
  b_particles: E("1"),
  c_particles: E("1"),
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
var Gravitational_WavesDisplay = document.getElementById('Gravitational_WavesDisplay');
var GlobalResourceMultiplier = E("1")
var AParticleDisplay = document.getElementById('AParticleDisplay');
var BParticleDisplay = document.getElementById('BParticleDisplay');
var CParticleDisplay = document.getElementById('CParticleDisplay');
var APE1D = document.getElementById('AParticleEffect1Display');
var APE2D = document.getElementById('AParticleEffect2Display');
var APE3D = document.getElementById('AParticleEffect3Display');
var BPE1D = document.getElementById('BParticleEffect1Display');
var BPE2D = document.getElementById('BParticleEffect2Display');
var BPE3D = document.getElementById('BParticleEffect3Display');
var CPE1D = document.getElementById('CParticleEffect1Display');
var CPE2D = document.getElementById('CParticleEffect2Display');
var CPE3D = document.getElementById('CParticleEffect3Display');


function updateText() {
  
  gainbuyables()
  gainstardust()
  gaingravitationalwaves()
  gainparticles()
  
  StardustDisplay.innerHTML = "You have " + String(player.stardust) + " Stardust";
  SyphonDisplay.innerHTML = "You have " + String(buyables.syphon.amount) + " (" + String(buyables.syphon.manuals) +") Syphons, Boosting Stardust gain by +" + String(buyables.syphon.effect()) + "/s";
  SyphonButton.innerHTML = "Cost: " + String(buyables.syphon.cost) + " Stardust";
  CollectorDisplay.innerHTML = "You have " + String(buyables.collector.amount) + " (" + String(buyables.collector.manuals) +") Collectors, Producing " + String(buyables.collector.effect()) + " syphons/s";
  CollectorButton.innerHTML = "Cost: " + String(buyables.collector.cost) + " Stardust";
  FieldDisplay.innerHTML = "You have " + String(buyables.field.amount) + " (" + String(buyables.field.manuals) +") Fields, Producing " + String(buyables.field.effect()) + " collectors/s";
  FieldButton.innerHTML = "Cost: " + String(buyables.field.cost) + " Stardust";
  Gravitational_WavesDisplay.innerHTML = "You have " + String(player.gravitational_waves) + " Gravitational Waves, Collector effect * " + String(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")));
  
  AParticleDisplay.innerHTML = "You have " + String(player.a_particles) + " A-Particles, Boosts:"
  
  APE1D.innerHTML = "B-Particle gain x" + String(player.a_particles.log10().add(E("1")))
  APE2D.innerHTML = "Stardust gain x" + String(player.a_particles.log10().pow(E("0.5")).add(E("1")))
  APE3D.innerHTML = ""
  
  BParticleDisplay.innerHTML = "You have " + String(player.b_particles) + " B-Particles, Boosts:"
  
  BPE1D.innerHTML = "C-Particle gain x" + String(player.b_particles.log10().add(E("1")))
  BPE2D.innerHTML = "Gravitational Waves x" + String(player.b_particles.log2().add(E("1")))
  BPE3D.innerHTML = ""
  
  CParticleDisplay.innerHTML = "You have " + String(player.c_particles) + " C-Particles, Boosts:"
  CPE1D.innerHTML = "A-Particle gain x" + String(player.c_particles.log10().add(E("1")))
  CPE2D.innerHTML = " x" + String(player.c_particles.log10().add(E("1")))
  CPE3D.innerHTML = ""
}

setInterval(updateText, 16);
function gainbuyables(){
  
  
  buyables.collector.amount = buyables.collector.amount.add(buyables.field.effect().div(E("60")))
  var temp = buyables.collector.effect()
  if (player.gravitational_waves.gte(E("1"))) {temp = temp}
  temp = temp.div(E("60"))
  buyables.syphon.amount = buyables.syphon.amount.add(temp)
  
  
}
function gaingravitationalwaves(){
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  
  if (player.b_particles.gte(E("1"))) {gain = gain.mul(player.a_particles.log2().add(E("1")))}
  
  gain = gain.mul(GlobalResourceMultiplier)
  
  player.gravitational_waves = player.gravitational_waves.add(gain.div(E("60")))
  
}
function gainstardust(){
  var gain = E("0")
  
  var temp = buyables.syphon.amount
  if (upgrades.incrementallist.bought == true) {temp = temp.mul(upgrades.incrementallist.effect())}
  gain = gain.add(temp)
  
  if (player.a_particles.gte(E("1"))) {gain = gain.mul(player.a_particles.log10().pow(E("0.5")).add(E("1")))}
  
  gain = gain.mul(GlobalResourceMultiplier)
  
  var gain = gain.div(E("60"))
  player.stardust = player.stardust.add(gain)
}
function gainparticles(){
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.c_particles.gte(E("1"))) {gain = gain.mul(player.c_particles.log10().add(E("1")))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  player.a_particles = player.a_particles.add(gain.div(E("60")))
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.a_particles.gte(E("1"))) {gain = gain.mul(player.a_particles.log10().add(E("1")))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  player.b_particles = player.b_particles.add(gain.div(E("60")))
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.b_particles.gte(E("1"))) {gain = gain.mul(player.b_particles.log10().add(E("1")))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  player.c_particles = player.c_particles.add(gain.div(E("60")))
  
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
});

document.getElementById('MEMButton').addEventListener('mouseover', function(event) {
    if (upgrades.MEM.bought == true) {UpgradeName.innerHTML = "More Efficient Tactics (Bought)"} else {UpgradeName.innerHTML = "More Efficient Tactics (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.MEM.display) + String(upgrades.MEM.effect());
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.MEM.cost) + " Stardust"
});

document.getElementById('FeedbackButton').addEventListener('mouseover', function(event) {
    if (upgrades.feedbackloop.bought == true) {UpgradeName.innerHTML = "Feedback Loop (Bought)"} else {UpgradeName.innerHTML = "Feedback Loop (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.feedbackloop.display) + String(upgrades.feedbackloop.effect());
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.feedbackloop.cost) + " Stardust"
});


function buy(n) {
  var c = upgrades[n].cost
  var ct = upgrades[n].costtype
  var b = upgrades[n].bought
  if (b == false) {
     if (player[ct].gte(c)) {
      player[ct] = player[ct].sub(c)
      upgrades[n].bought = true
       
       if (n == "Gravity") { if (unlockedsubtabs["Gravity"]) {} else {unlockedsubtabs["Gravity"] = true} };
       
    }
  }
}

// Saving the main object with sub-objects
function save() {
  const dataToSave = {
    player: player,
    unlockedsubtabs: unlockedsubtabs,
    syphoncost: buyables.syphon.cost,
    syphonamount: buyables.syphon.amount,
    syphonmanuals: buyables.syphon.manuals,
    collectorcost: buyables.collector.cost,
    collectoramount: buyables.collector.amount,
    collectormanuals: buyables.collector.manuals,
    fieldcost: buyables.field.cost,
    fieldamount: buyables.field.amount,
    fieldmanuals: buyables.field.manuals,
    incrementallist: upgrades.incrementallist.bought,
    Gravity: upgrades.Gravity.bought,
    MEM: upgrades.MEM.bought,
    feedbackloop: upgrades.feedbackloop.bought
  };
  localStorage.setItem('gameData', JSON.stringify(dataToSave));
}

// Loading the main object with sub-objects
function load() {
  const loadedData = JSON.parse(localStorage.getItem('gameData'));
  if (loadedData) {
    player = loadedData.player;
    
    player.stardust = E(String(loadedData.player.stardust));
    player.gravitational_waves = E(String(loadedData.player.gravitational_waves));
    player.a_particles = E(String(loadedData.player.a_particles));
    player.b_particles = E(String(loadedData.player.b_particles));
    player.c_particles = E(String(loadedData.player.c_particles));
    
    
    unlockedsubtabs = loadedData.unlockedsubtabs;
    buyables.syphon.cost = loadedData.syphoncost
    buyables.syphon.amount = loadedData.syphonamount
    buyables.syphon.manuals = loadedData.syphonmanuals
    buyables.collector.cost = loadedData.collectorcost
    buyables.collector.amount = loadedData.collectoramount
    buyables.collector.manuals = loadedData.collectormanuals
    buyables.field.cost = loadedData.fieldcost
    buyables.field.amount = loadedData.fieldamount
    buyables.field.manuals = loadedData.fieldmanuals
    upgrades.incrementallist.bought = loadedData.incrementallist
    upgrades.Gravity.bought = loadedData.Gravity
    upgrades.MEM.bought = loadedData.MEM
    upgrades.feedbackloop.bought = loadedData.feedbackloop
    
    loadfunctions()
  }
}

document.getElementById('IncrementallistButton').addEventListener('click', function() {
  buy("incrementallist")  
});

document.getElementById('GravityButton').addEventListener('click', function() {
  buy("Gravity")  
});

document.getElementById('MEMButton').addEventListener('click', function() {
  buy("MEM")  
});

document.getElementById('FeedbackButton').addEventListener('click', function() {
  buy("feedbackloop")  
});

document.getElementById('savebutton').addEventListener('click', function() {
  save()
});

document.getElementById('loadbutton').addEventListener('click', function() {
  load()
});

updateText();