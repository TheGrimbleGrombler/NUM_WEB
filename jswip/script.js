const Decimal = window.Decimal;
var tick = 1;
export { tick };

function E(n) {
  
  return new Decimal().fromString(n)
  
}

var ScrollX = 0;
var ScrollY = 0;
var ScrollVelX = 0;
var ScrollVelY = 0;
export { ScrollX };
export { ScrollY };
export { ScrollVelX };
export { ScrollVelY };

var WDown = false;
var ADown = false;
var SDown = false;
var DDown = false;

var timespeed = E("1")

function fix(n,e) {
  
  return n.toFixed(5)
  
}

function fix2(n,e) {
  
  return n.toFixed(e)
  
}

import { upgrades } from './upgrades.js'
import { upgradeeffects } from './upgrades.js'

// A function to calculate the speed of time
function gettimespeed() {
  var temp = E("1")
  
  return temp
}

// Un-NaNs any values that it deems fit upon loading.
function unNaN() {
  
  //if (isNaN(upgrades.theunknown.cost)) {upgrades.theunknown.cost = E("5e8")}
  
}

// General Automation script, Nothing yet.
function Automation() {
  
  
  
}

window.player = {
  data: E("0"),
  dataBest: E("0"),
  simulationTier: E("0"),
  simulationTierBest: E("0"),
  progression: 1,
};

var player = window.player

var GlobalResourceMultiplier = E("1")
var automation1 = true
var automation2 = true

function checkbest() {
  if (player.data.gte(player.dataBest)) {player.dataBest = player.data}
  if (player.simulationTier.gte(player.simulationTierBest)) {player.simulationTierBest = player.simulationTier}
}

function scrollgui() {
  
  if (WDown == true) {
    ScrollVelY += 1
  }
  if (SDown == true) {
    ScrollVelY -= 1
  }
  if (ADown == true) {
    ScrollVelX += 1
  }
  if (DDown == true) {
    ScrollVelX -= 1
  }
  
  ScrollX = ScrollX + ScrollVelX
  ScrollY = ScrollY + ScrollVelY
  ScrollVelX *= 0.95
  ScrollVelY *= 0.95
  
}

function updateText() {
  var timespeed = gettimespeed()
  gainData()
  Automation()
  //Debug()
  checkbest()
  
  tick = tick + 1
  
  scrollgui()
  
}

function gainData(){
  var gain = E("0")
  
  
  
  gain = gain.mul(timespeed)
  
  gain = gain.mul(GlobalResourceMultiplier)
  
  var gain = gain.div(E("60"))
  player.data = player.data.add(gain)
}

import { buy } from './upgrades.js'

function save() {
  const dataToSave = {
    player: player,
  };
  localStorage.setItem('gameData', JSON.stringify(dataToSave));
}

function wipe() {
  localStorage.setItem('gameData', null);
}

function load() {
  const loadedData = JSON.parse(localStorage.getItem('gameData'));
  if (loadedData) {
    
    player.data = E(String(loadedData.player.data));
    player.dataBest = E(String(loadedData.player.dataBest));
    player.simulationTier = E(String(loadedData.player.simulationTier));
    player.simulationTierBest = E(String(loadedData.player.simulationTierBest));
    
    unNaN()
  }
}

export { E };
export { player };
export { fix };
export { fix2 };
export { timespeed };
export { GlobalResourceMultiplier };

document.onkeydown = function (e) {
  /*
   if (e.key == "t") {
    if (gettributesonreset().gte(E("1"))) {
      if (gettributesonreset().gte(E("1234"))) {
        if (achievements.indexOf('Arbitrary1') == -1) {
          achievements.push("Arbitrary1");
        }
      }
    player.tributes = player.tributes.add(gettributesonreset())
    doreset(2)
    }
  }
   if (e.key == "m") {
    if (getmatteronreset().gte(E("1"))) {
    player.matter = player.matter.add(getmatteronreset())
    doreset(1)
    }
  }
   if (e.key == "f") {
    if (getflaresonreset().gte(E("1000"))) {
    player.flares = player.flares.add(getflaresonreset())
    doreset(3)
    }
  }
  */
   if (e.key == "w") {
     WDown = true
    }
   if (e.key == "d") {
     DDown = true
    }
   if (e.key == "s") {
     SDown = true
    }
   if (e.key == "a") {
     ADown = true
    }
};
document.onkeyup = function (e) {
   if (e.key == "w") {
     WDown = false
    }
   if (e.key == "d") {
     DDown = false
    }
   if (e.key == "s") {
     SDown = false
    }
   if (e.key == "a") {
     ADown = false
    }
};

document.addEventListener("DOMContentLoaded", function() {
  updateText();
  if (typeof localStorage.getItem('gameData') !== 'undefined') {load();}
  setInterval(updateText, 16);
});
window.addEventListener('beforeunload', function () {
  if (!isNaN(player.data)) {
    save();
  }
});