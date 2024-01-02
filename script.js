const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}

var timespeed = E("1")

function fix(n,e) {
  
  return n.mul(E("10").pow(E(String(e)))).floor().div(E("10").pow(E(String(e))))
  
}

function buyableeffects(n) {
  var temp = E("1")
  if (n==1) {
    temp = buyables.syphon.amount
    if (upgrades.incrementallist.bought == true) {temp = temp.mul(upgradeeffects(1))}
    if (upgrades.SacredTexts.bought == true) {temp = temp.mul(buyables.syphon.manuals)}
  }
  if (n==2) {
    temp = buyables.collector.amount
    if (upgrades.Gravity.bought == true) {temp = temp.mul(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")))}
    if (upgrades.SacredTexts.bought == true) {temp = temp.mul(buyables.collector.manuals)}
  }
  if (n==3) {
    temp = buyables.field.amount
    if (upgrades.MEM.bought == true) {temp = temp.pow(upgradeeffects(3))}
    if (upgrades.SacredTexts.bought == true) {temp = temp.mul(buyables.field.manuals)}
    temp = temp.mul(timespeed)
  }
  if (n==4) {
    temp = E("10")
    if (buyables.weight.amount.gte(E("31"))) {temp = temp.pow(E("30")).mul(E("3").pow(buyables.weight.amount.sub(E("30"))))} else {temp = temp.pow(buyables.weight.amount)}
  }
  
  
  
  return temp
}

function upgradeeffects(n) {
  var temp = E("1")
  if (n==1) {
    if (upgrades.incrementallist.bought==true) {temp = buyables.syphon.amount.log10()}
  }
  if (n==2) {
    if (upgrades.Gravity.bought==true) {temp = "It is done."} else {temp = "Currently no gravity... Maybe it's better this way."}
  }
  if (n==3) {
    if (upgrades.MEM.bought==true) {temp = E("2")}
  }
  if (n==4) {
    if (upgrades.feedbackloop.bought==true) {temp = E("1.1").pow(buyables.syphon.manuals.add(buyables.collector.manuals).add(buyables.field.manuals))}
  }
  if (n==5) {
    if (upgrades.theunknown.bought==true) {temp = "Endless growth begins."} else {temp = "Gravity with no matter?"}
  }
  if (n==6) {
    if (upgrades.Infusion.bought==true) {temp = E("3").pow(player.matter.add(E("1")).log10().div(2).floor()).mul(E("3"))}
  }
  if (n==7) {
    temp = E("0")
  }
  if (n==8) {
    if (upgrades.gravitoncatalyst.bought==true) {temp = player.matter.add(E("10")).log10().pow(E("0.75"))}
    if (temp.gte(E("10"))) {temp = E("10").add(temp.sub(E("9")).pow(E("0.2")).sub(E("1")))}
  }
  if (n==9) {
    temp = E("0")
  }
  if (n==10) {
    if (upgrades.discovery.bought==true) {temp = E("3")}
  }
  if (n==11) {
    temp = E("0")
  }
  
  
  
  return temp
}


let achievements = [

]

function gettimespeed() {
  var temp = E("1")
  //if (upgrades.discovery.bought == true) {temp = temp.mul(E("3"))}
  
  
  return temp
}

let buyables = {
    syphon: {cost: E("1"), amount: E("0"), manuals: E("0")},
    collector: {cost: E("100"), amount: E("0"), manuals: E("0")},
    field: {cost: E("2000"), amount: E("0"), manuals: E("0")},
  
  weight: {cost: E("1"), amount: E("0"), manuals: E("0")}

};
let upgrades = {
  incrementallist: {cost: E("25000"), costtype: "stardust", bought: false, display: "Syphons boost their own effect"},
  Gravity: {cost: E("200000"), costtype: "stardust", bought: false, display: "Unlock Gravity"},
  MEM: {cost: E("2e6"), costtype: "stardust", bought: false, display: "Squares the effect of fields, Currently: ^"},
  feedbackloop: {cost: E("5e7"), costtype: "stardust", bought: false, display: "Stardust gain x1.1 for each manual buyable level, Currently: x"},
  theunknown: {cost: E("5e8"), costtype: "stardust", bought: false, display: "Unlock Mass"},
  
  Infusion: {cost: E("3"), costtype: "matter", bought: false, display: "Stardust gain x3, then another x3 for every other OoM of matter, Currently: x"},
  SacredTexts: {cost: E("10"), costtype: "matter", bought: false, display: "Manual levels of all stardust buyables multiply the effect of their buyable, Dynamic."},
  gravitoncatalyst: {cost: E("10000"), costtype: "matter", bought: false, display: "Gravitational wave gain is EXPONENTIATED based on matter with a generous formula (As well as particles A-C which also have their effects boosted significantly), Currently: ^"},
  discovery: {cost: E("1e30"), costtype: "matter", bought: false, display: "Triples the speed of time"},
  dlc: {cost: E("1e35"), costtype: "matter", bought: false, display: "Unlocks more stardust upgrades"},
  
  automatons: {cost: E("100000000000000"), costtype: "matter", bought: false, display: "Automates stardust buyables"},
};


function loadfunctions() {
  
  //if (isNaN(upgrades.automatons)) {upgrades.automatons = {cost: E("100000000000000"), costtype: "matter", bought: false, display: "Automates stardust buyables"}}
  
  if (isNaN(upgrades.theunknown.cost)) {upgrades.theunknown.cost = E("5e8")}
  if (isNaN(upgrades.theunknown.bought)) {upgrades.theunknown.bought = false}
  if (isNaN(unlockedsubtabs.MassMain)) {unlockedsubtabs.MassMain = generalunlocks.theunknown}
  if (isNaN(buyables.weight.amount)) {buyables.weight.amount = E("0")}
  if (isNaN(buyables.weight.manuals)) {buyables.weight.manuals = E("0")}
  if (isNaN(buyables.field.amount)) {buyables.field.amount = E("0")}
  if (isNaN(buyables.field.manuals)) {buyables.field.manuals = E("0")}
  if (isNaN(upgrades.Infusion.bought)) {upgrades.Infusion.bought = false}
  if (isNaN(upgrades.SacredTexts.bought)) {upgrades.SacredTexts.bought = false}
  if (isNaN(upgrades.gravitoncatalyst.bought)) {upgrades.gravitoncatalyst.bought = false}
  if (isNaN(upgrades.automatons.bought)) {upgrades.automatons.bought = false}
  if (isNaN(player.playtime)) {player.playtime = 0}
  if (isNaN(upgrades.discovery.bought)) {upgrades.discovery.bought = false}
  if (isNaN(upgrades.dlc.bought)) {upgrades.dlc.bought = false}
  //if (!Array.isArray(achievements)) {let achievements = []}
  
  
  
  
  
}

function Automation() {
  
  if (upgrades.automatons.bought) {
    if (player.stardust.gte(buyables.syphon.cost)) {
      player.stardust = player.stardust.sub(buyables.syphon.cost)
      buyables.syphon.amount = buyables.syphon.amount.add(E("1"))
      buyables.syphon.manuals = buyables.syphon.manuals.add(E("1"))
      buyables.syphon.cost = buyables.syphon.cost.mul(E("2"))
    }
    if (player.stardust.gte(buyables.collector.cost)) {
      player.stardust = player.stardust.sub(buyables.collector.cost)
      buyables.collector.manuals = buyables.collector.manuals.add(E("1"))
      buyables.collector.amount = buyables.collector.amount.add(E("1"))
      buyables.collector.cost = buyables.collector.cost.mul(E("3"))
    }
    if (player.stardust.gte(buyables.field.cost)) {
      player.stardust = player.stardust.sub(buyables.field.cost)
      buyables.field.amount = buyables.field.amount.add(E("1"))
      buyables.field.manuals = buyables.field.manuals.add(E("1"))
      buyables.field.cost = buyables.field.cost.mul(E("10"))
    }
  }
  
  
}



function doreset(tier) {
  
  if (tier >= 1) {
    
    buyables.syphon = {cost: E("1"), amount: E("0"), manuals: E("0")}
    buyables.collector = {cost: E("100"), amount: E("0"), manuals: E("0")}
    buyables.field = {cost: E("2000"), amount: E("0"), manuals: E("0")}

    upgrades.incrementallist.bought = false
    upgrades.Gravity.bought = false
    upgrades.MEM.bought = false
    upgrades.feedbackloop.bought = false
    upgrades.theunknown.bought = false
    
    player.stardust = E("1")
    player.gravitational_waves = E("0")
    player.a_particles = E("1")
    player.b_particles = E("1")
    player.c_particles = E("1")
    
  }
  
  if (tier >= 2) {
    
    buyables.weight = {cost: E("1"), amount: E("0"), manuals: E("0")}
    
    upgrades.Infusion.bought = false
    upgrades.SacredTexts.bought = false
    upgrades.gravitoncatalyst.bought = false
    upgrades.discovery.bought = false
    upgrades.dlc.bought = false
    
    player.matter = E("0")
    
  }
  
}


let generalunlocks = {
  stardust: true,
  
  
}





let unlockedsubtabs = {
  "Main": true,
  "MassMain": true,
  
}
let player = {
  stardust: E("1"),
  gravitational_waves: E("0"),
  a_particles: E("1"),
  b_particles: E("1"),
  c_particles: E("1"),
  matter: E("0"),
  playtime: 0,
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
var MatterDisplay = document.getElementById('MatterDisplay');
var WeightDisplay = document.getElementById("WeightDisplay");
var WeightButton = document.getElementById("WeightButton");
var MassResetButton = document.getElementById("MassResetButton");
var endgametext = document.getElementById("ENDGAME");


function particleeffects(a,b) {
  var temp = E("0")
  if (a==1) {
    
    if (b==1) {
      temp = player.a_particles.log10().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
    }
    if (b==2) {
      temp = player.a_particles.log10().pow(E("0.5")).add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
    }
    if (b==3) {
      temp = E("1")
    }
    
    
  }  
  if (a==2) {
    
    if (b==1) {
      temp = player.b_particles.log10().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
    }
    if (b==2) {
      temp = player.b_particles.log2().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
    }
    if (b==3) {
      temp = E("1")
    }
    
    
  }  
  if (a==3) {
    
    if (b==1) {
      temp = player.c_particles.log10().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
    }
    if (b==2) {
      temp = player.c_particles.log10().add(E("1")).pow(E("0.5")).pow(E("0.5")).pow(E("0.5")).pow(E("0.5"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
    }
    if (b==3) {
      temp = E("1")
    }
    
    
  }  
  
  
  
  
  
  return temp
}

function Debug() {
  
  document.getElementById("DEBUG").innerHTML = String(achievements)
  
}

function updateText() {
  var timespeed = gettimespeed()
  gainbuyables()
  gainstardust()
  gaingravitationalwaves()
  gainparticles()
  timedunlocks()
  Automation()
  //Debug()
  
  StardustDisplay.innerHTML = "You have " + String(fix(player.stardust,0)) + " Stardust";
  SyphonDisplay.innerHTML = "You have " + String(fix(buyables.syphon.amount,0)) + " (" + String(fix(buyables.syphon.manuals,0)) +") Syphons, Boosting Stardust gain by +" + String(fix(buyableeffects(1),0)) + "/s";
  SyphonButton.innerHTML = "Cost: " + String(fix(buyables.syphon.cost,0)) + " Stardust";
  CollectorDisplay.innerHTML = "You have " + String(fix(buyables.collector.amount,0)) + " (" + String(fix(buyables.collector.manuals,0)) +") Collectors, Producing " + String(fix(buyableeffects(2),0)) + " syphons/s";
  CollectorButton.innerHTML = "Cost: " + String(fix(buyables.collector.cost,0)) + " Stardust";
  FieldDisplay.innerHTML = "You have " + String(fix(buyables.field.amount,0)) + " (" + String(fix(buyables.field.manuals,0)) +") Fields, Producing " + String(fix(buyableeffects(3),0)) + " collectors/s";
  FieldButton.innerHTML = "Cost: " + String(fix(buyables.field.cost,0)) + " Stardust";
  Gravitational_WavesDisplay.innerHTML = "You have " + String(fix(player.gravitational_waves,0)) + " Gravitational Waves, Collector effect * " + String(fix(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")),2));
  
  AParticleDisplay.innerHTML = "You have " + String(fix(player.a_particles,0)) + " A-Particles, Boosts:"
  
  APE1D.innerHTML = "B-Particle gain x" + String(particleeffects(1,1))
  APE2D.innerHTML = "Stardust gain x" + String(particleeffects(1,2))
  APE3D.innerHTML = ""
  
  BParticleDisplay.innerHTML = "You have " + String(fix(player.b_particles,0)) + " B-Particles, Boosts:"
  
  BPE1D.innerHTML = "C-Particle gain x" + String(particleeffects(2,1))
  BPE2D.innerHTML = "Gravitational Waves x" + String(particleeffects(2,2))
  BPE3D.innerHTML = ""
  
  CParticleDisplay.innerHTML = "You have " + String(fix(player.c_particles,0)) + " C-Particles, Boosts:"
  CPE1D.innerHTML = "A-Particle gain x" + String(particleeffects(3,1))
  CPE2D.innerHTML = "??? x" + String(particleeffects(3,2))
  CPE3D.innerHTML = ""
  
  MassResetButton.innerHTML ="Reset all previous progress for " + String(fix(getmatteronreset(),2)) + " Matter"
  
  MatterDisplay.innerHTML ="You have " + String(player.matter) + " Matter"
  WeightDisplay.innerHTML = "You have " + String(buyables.weight.amount) + " (" + String(buyables.weight.manuals) +") Weights, Multiplying stardust gain by " + String(buyableeffects(4)) + "x";
  WeightButton.innerHTML = "Cost: " + String(buyables.weight.cost) + " Matter";
  
  //if (player.matter.gte(E("10000")) == true) {endgametext.innerHTML = "You have reached the current endgame!"} else {endgametext.innerHTML = " "}
}

function getmatteronreset() {
  
  var gain = E("0")
  
  gain = player.stardust.div(E("1e9")).pow(E("0.5"))
  
  
  return gain.floor()
  
}

function playtimeupdate() {player.playtime = player.playtime + 1; renderachievements()}

setInterval(updateText, 16);
setInterval(playtimeupdate, 1000);
function gainbuyables(){
  
  var temp = buyableeffects(3)
  temp = temp.div(E("60"))
  temp = temp.mul(timespeed)
  buyables.collector.amount = buyables.collector.amount.add(temp)
  var temp = buyableeffects(2)
  temp = temp.mul(timespeed)
  temp = temp.div(E("60"))
  buyables.syphon.amount = buyables.syphon.amount.add(temp)
  
  
}
function gaingravitationalwaves(){
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  
  if (player.b_particles.gte(E("1"))) {gain = gain.mul(particleeffects(2,2))}
  
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  
  gain = gain.mul(timespeed)
  
  gain = gain.mul(GlobalResourceMultiplier)
  
  player.gravitational_waves = player.gravitational_waves.add(gain.div(E("60")))
  
}
function gainstardust(){
  var gain = E("0")
  
  var temp = buyables.syphon.amount
  if (upgrades.incrementallist.bought == true) {temp = temp.mul(upgradeeffects(1))}
  gain = gain.add(temp)
  
  if (player.a_particles.gte(E("1"))) {gain = gain.mul(particleeffects(1,2))}
  
  if (buyables.weight.amount.gte(E("1"))) {gain = gain.mul(buyableeffects(4))}
  
  if (upgradeeffects(6).gte(E("1"))) {gain = gain.mul(upgradeeffects(6))}
  
  gain = gain.mul(timespeed)
  
  gain = gain.mul(GlobalResourceMultiplier)
  
  var gain = gain.div(E("60"))
  player.stardust = player.stardust.add(gain)
}
function gainparticles(){
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.c_particles.gte(E("1"))) {gain = gain.mul(particleeffects(3,1))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  gain = gain.mul(timespeed)
  player.a_particles = player.a_particles.add(gain.div(E("60")))
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.a_particles.gte(E("1"))) {gain = gain.mul(particleeffects(1,1))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  gain = gain.mul(timespeed)
  player.b_particles = player.b_particles.add(gain.div(E("60")))
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.b_particles.gte(E("1"))) {gain = gain.mul(particleeffects(2,1))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  gain = gain.mul(timespeed)
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

document.getElementById('WeightButton').addEventListener('click', function() {
  if (player.matter.gte(buyables.weight.cost)) {
    player.matter = player.matter.sub(buyables.weight.cost)
    buyables.weight.amount = buyables.weight.amount.add(E("1"))
    buyables.weight.manuals = buyables.weight.manuals.add(E("1"))
    buyables.weight.cost = buyables.weight.cost.mul(E("10"))
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
document.getElementById('tab3button').addEventListener('click', function() {
  openTab("tab3")
});
document.getElementById('purgebutton').addEventListener('click', function() {
  openTab("tab4")
});
document.getElementById('achievementbutton').addEventListener('click', function() {
  openTab("tab5")
});
document.getElementById('subtab1button').addEventListener('click', function() {
  openSubtab("subtab1")
});
document.getElementById('subtab2button').addEventListener('click', function() {
  openSubtab("subtab2")
});
document.getElementById('masssubtab1button').addEventListener('click', function() {
  openSubtab("masssubtab1")
});

document.getElementById('IncrementallistButton').addEventListener('mouseover', function(event) {
    if (upgrades.incrementallist.bought == true) {UpgradeName.innerHTML = "Incrementallist (Bought)"} else {UpgradeName.innerHTML = "Incrementallist (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.incrementallist.display) + ", Currently " + String(upgradeeffects(1)) + "x."
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.incrementallist.cost) + " Stardust"
});

document.getElementById('GravityButton').addEventListener('mouseover', function(event) {
    if (upgrades.Gravity.bought == true) {UpgradeName.innerHTML = "Gravity (Bought)"} else {UpgradeName.innerHTML = "Gravity (Unbought)"}
    UpgradeEffect.innerHTML = String(upgradeeffects(2));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.Gravity.cost) + " Stardust"
});

document.getElementById('MEMButton').addEventListener('mouseover', function(event) {
    if (upgrades.MEM.bought == true) {UpgradeName.innerHTML = "More Efficient Tactics (Bought)"} else {UpgradeName.innerHTML = "More Efficient Tactics (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.MEM.display) + String(upgradeeffects(3));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.MEM.cost) + " Stardust"
});

document.getElementById('FeedbackButton').addEventListener('mouseover', function(event) {
    if (upgrades.feedbackloop.bought == true) {UpgradeName.innerHTML = "Feedback Loop (Bought)"} else {UpgradeName.innerHTML = "Feedback Loop (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.feedbackloop.display) + String(upgradeeffects(4));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.feedbackloop.cost) + " Stardust"
});

document.getElementById('UnknownButton').addEventListener('mouseover', function(event) {
    if (upgrades.theunknown.bought == true) {UpgradeName.innerHTML = "The Unknown (Bought)"} else {UpgradeName.innerHTML = "The Unknown (Unbought)"}
    UpgradeEffect.innerHTML = String(upgradeeffects(5));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.theunknown.cost) + " Stardust"
});

document.getElementById('InfusionButton').addEventListener('mouseover', function(event) {
    if (upgrades.Infusion.bought == true) {UpgradeName.innerHTML = "Infusion (Bought)"} else {UpgradeName.innerHTML = "Infusion (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.Infusion.display + String(upgradeeffects(6));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.Infusion.cost) + " Matter"
});

document.getElementById('SacredTextsButton').addEventListener('mouseover', function(event) {
    if (upgrades.SacredTexts.bought == true) {UpgradeName.innerHTML = "Sacred Texts (Bought)"} else {UpgradeName.innerHTML = "Sacred Texts (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.SacredTexts.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.SacredTexts.cost) + " Matter"
});
function checkifgravcatiscapped() {if(upgradeeffects(8).gte(E("10"))){return " (softcapped)"}else{return ""}}
document.getElementById('GravitonCatalystButton').addEventListener('mouseover', function(event) {
    if (upgrades.gravitoncatalyst.bought == true) {UpgradeName.innerHTML = "Graviton Catalyst (Bought)"} else {UpgradeName.innerHTML = "Graviton Catalyst (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.gravitoncatalyst.display + String(upgradeeffects(8)) + checkifgravcatiscapped();
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.gravitoncatalyst.cost) + " Matter"
});

document.getElementById('AutomatonsButton').addEventListener('mouseover', function(event) {
    if (upgrades.automatons.bought == true) {UpgradeName.innerHTML = "Automatons (Bought)"} else {UpgradeName.innerHTML = "Automatons (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.automatons.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.automatons.cost) + " Matter"
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
       if (n == "theunknown") {
         generalunlocks["theunknown"] = true; 
         document.getElementById("matterdisplaycontainer").style = "display: block;"
         document.getElementById("matterupgrades1").style = "display: block;"
       };
       if (n == "dlc") {
         generalunlocks["dlc"] = true; 
         document.getElementById("stardustupgrades2").style = "display: block;"
       };
       
    }
  }
}

function displayunlocksonload() {
  if (generalunlocks.theunknown == true) {
    document.getElementById("matterdisplaycontainer").style = "display: block;"
    document.getElementById("matterupgrades1").style = "display: block;"
  };
  if (generalunlocks.matterupgrades2 == true) {
    document.getElementById("matterupgrades2").style = "display: block;"
  };
  if (generalunlocks.dlc == true) {
    document.getElementById("matterupgrades2").style = "display: block;"
  };
  
  
  
  
}

// Saving the main object with sub-objects
function save() {
  const dataToSave = {
    player: player,
    achievements: achievements,
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
    weightcost: buyables.weight.cost,
    weightamount: buyables.weight.amount,
    weightmanuals: buyables.weight.manuals,
    buyables: buyables,
    upgrades: upgrades,
    incrementallist: upgrades.incrementallist.bought,
    Gravity: upgrades.Gravity.bought,
    MEM: upgrades.MEM.bought,
    feedbackloop: upgrades.feedbackloop.bought,
    theunknown: upgrades.theunknown.bought,
    Infusion: upgrades.Infusion.bought,
    SacredTexts: upgrades.SacredTexts.bought,
    gravitoncatalyst: upgrades.gravitoncatalyst.bought,
    automatons: upgrades.automatons.bought,
    discovery: upgrades.discovery.bought,
    dlc: upgrades.dlc.bought,
    generalunlocks: generalunlocks
  };
  localStorage.setItem('gameData', JSON.stringify(dataToSave));
}

// Loading the main object with sub-objects
function load() {
  const loadedData = JSON.parse(localStorage.getItem('gameData'));
  if (loadedData) {
    
    player.stardust = E(String(loadedData.player.stardust));
    player.gravitational_waves = E(String(loadedData.player.gravitational_waves));
    player.a_particles = E(String(loadedData.player.a_particles));
    player.b_particles = E(String(loadedData.player.b_particles));
    player.c_particles = E(String(loadedData.player.c_particles));
    player.matter = E(String(loadedData.player.matter));
    
    if (!isNaN(loadedData.achievements)) {achievements = loadedData.achievements}
    
    
    unlockedsubtabs = loadedData.unlockedsubtabs;
    buyables.syphon.cost = E(String(loadedData.syphoncost))
    buyables.syphon.amount = E(String(loadedData.syphonamount))
    buyables.syphon.manuals = E(String(loadedData.syphonmanuals))
    buyables.collector.cost = E(String(loadedData.collectorcost))
    buyables.collector.amount = E(String(loadedData.collectoramount))
    buyables.collector.manuals = E(String(loadedData.collectormanuals))
    buyables.field.cost = E(String(loadedData.fieldcost))
    buyables.field.amount = E(String(loadedData.fieldamount))
    buyables.field.manuals = E(String(loadedData.fieldmanuals))
    buyables.weight.cost = E(String(loadedData.weightcost))
    buyables.weight.amount = E(String(loadedData.weightamount))
    buyables.weight.manuals = E(String(loadedData.weightmanuals))
    
    //upgrades = loadedData.upgrades
    
    upgrades.incrementallist.bought = loadedData.incrementallist,
    upgrades.Gravity.bought = loadedData.Gravity,
    upgrades.MEM.bought = loadedData.MEM,
    upgrades.feedbackloop.bought = loadedData.feedbackloop,
    upgrades.theunknown.bought = loadedData.theunknown,
    upgrades.Infusion.bought = loadedData.Infusion,
    upgrades.SacredTexts.bought = loadedData.SacredTexts,
    upgrades.gravitoncatalyst.bought = loadedData.gravitoncatalyst,
    upgrades.automatons.bought = loadedData.automatons,
    upgrades.discovery.bought = loadedData.discovery
    upgrades.dlc.bought = loadedData.dlc
    
    loadfunctions()
    
    generalunlocks = loadedData.generalunlocks
    
    displayunlocksonload()
  }
}

function purge(x) {
  if (x==1) {
    player.stardust = E("1");
    player.gravitational_waves = E("0");
    player.a_particles = E("1");
    player.b_particles = E("1");
    player.c_particles = E("1");
  }
  if (x==2) {
    buyables.syphon = {cost: E("1"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.mul(upgradeeffects(1))} else {return buyables.syphon.amount}}}
    buyables.collector = {cost: E("100"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.Gravity.bought == false) {return buyables.collector.amount} else {return buyables.collector.amount.mul(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")))}}}
    buyables.field = {cost: E("2000"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.MEM.bought == false) {return buyables.field.amount} else {return buyables.field.amount.pow(upgradeeffects(3))}}}
  }
  if (x==3) {
    upgrades.incrementallist.bought = false
    upgrades.Gravity.bought = false
    upgrades.MEM.bought = false
    upgrades.feedbackloop.bought = false
    upgrades.theunknown.bought = false
  }
  if (x==4) {
    doreset(1)
  }
  if (x==5) {
    player.matter = E("0");
  }
  if (x==6) {
    buyables.weight = {cost: E("1"), amount: E("0"), manuals: E("0"), effect: function() {return E("10").pow(buyables.weight.amount)}}
  }
  if (x==7) {
    upgrades.Infusion.bought = false
    upgrades.SacredTexts.bought = false
  }
  if (x==8) {
    doreset(2)
  }
  
  
  
  
  
  
  
}

function renderachievements() {

  
  
for (let i = 0; i < achievements.length; i++) {
  document.getElementById(achievements[i] + "Achievement").className = "achievementclaimed";
}
  
  
  
  
  
  
}

function timedunlocks() {
  
  if (!generalunlocks.matterupgrades2 == true) {
    if (player.stardust.gte(E("1e35"))) {
      generalunlocks["matterupgrades2"] = true
      document.getElementById("matterupgrades2").style = "display: block;"
    }
  }
  
  
  
  
  
  
  //let achievements = []
  if (achievements.indexOf('BlackHole') == -1) {
    if (player.gravitational_waves.gte(E("1.8e308"))) {
      achievements.push("BlackHole");
    }
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

document.getElementById('UnknownButton').addEventListener('click', function() {
  buy("theunknown")  
});

document.getElementById('InfusionButton').addEventListener('click', function() {
  buy("Infusion")  
});

document.getElementById('SacredTextsButton').addEventListener('click', function() {
  buy("SacredTexts")  
});

document.getElementById('GravitonCatalystButton').addEventListener('click', function() {
  buy("gravitoncatalyst")  
});

document.getElementById('AutomatonsButton').addEventListener('click', function() {
  buy("automatons")  
});

document.getElementById('DiscoveryButton').addEventListener('click', function() {
  buy("discovery")  
});

document.getElementById('DLCButton').addEventListener('click', function() {
  buy("dlc")  
});


document.getElementById('savebutton').addEventListener('click', function() {
  save()
});

document.getElementById('loadbutton').addEventListener('click', function() {
  load()
});

document.getElementById('PurgeStardustButton').addEventListener('click', function() {
  purge(1)
});
document.getElementById('PurgeStardustBuyablesButton').addEventListener('click', function() {
  purge(2)
});
document.getElementById('PurgeStardustUpgradesButton').addEventListener('click', function() {
  purge(3)
});
document.getElementById('PurgeStardustLayerButton').addEventListener('click', function() {
  purge(4)
});
document.getElementById('PurgeMatterButton').addEventListener('click', function() {
  purge(5)
});
document.getElementById('PurgeMatterBuyablesButton').addEventListener('click', function() {
  purge(6)
});
document.getElementById('PurgeMatterUpgradesButton').addEventListener('click', function() {
  purge(7)
});
document.getElementById('PurgeMatterLayerButton').addEventListener('click', function() {
  purge(8)
});
document.getElementById('BlackHoleAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Black Hole - Get infinite gravitational waves."
});

document.getElementById('MassResetButton').addEventListener('click', function() {
  if (getmatteronreset().gte(E("1"))) {
  player.matter = player.matter.add(getmatteronreset())
  doreset(1)
  }
});
updateText();
if (typeof localStorage.getItem('gameData') !== 'undefined') {load();}