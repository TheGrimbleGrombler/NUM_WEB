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

let player = {
  data: E("0"),
  dataBest: E("0"),
  simulationTier: E("0"),
  simulationTierBest: E("01"),
  progression: 1,
};

var GlobalResourceMultiplier = E("1")
var automation1 = true
var automation2 = true

function checkbest() {
  if (player.data.gte(player.dataBest)) {player.dataBest = player.data}
  if (player.simulationTier.gte(player.simulationTierBest)) {player.simulationTierBest = player.simulationTier}
}

function vfx() {
  var sinresult63 = (Math.sin(tick/25)*63.75)+63.75
  var sinresult122 = (Math.sin(tick/25)*122)+122
  var sinresult12 = (Math.sin(tick/25)*5)+7.5
  
  var elements = document.querySelectorAll('.fire');
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.border = '2px solid rgb(255,' + String(sinresult63) + ',0)';
  elements[i].style.boxShadow = '0 0 10px 2px rgba(255,' + String(sinresult63) + ',0)'
  }
  
  var elements = document.querySelectorAll('.aqua');
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.border = '2px solid rgb(0,' + String(sinresult122) + ',255)';
  elements[i].style.boxShadow = '0 0 ' + String(sinresult12) + 'px 2px rgba(0,' + String(sinresult122) + ',255)'
  }
  var elements = document.querySelectorAll('.light');
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.border = '2px solid rgb('+String((Math.sin(tick/25)/4+1)*255)+','+String((Math.sin(tick/25)/4+1)*238)+','+String((Math.sin(tick/25)/4+1)*143)+')';
  elements[i].style.backgroundColor = 'rgb('+String((Math.sin(tick/25)/4+0.5)*255)+','+String((Math.sin(tick/25)/4+0.5)*238)+','+String((Math.sin(tick/25)/4+0.5)*143)+')';
  elements[i].style.boxShadow = '0 0 10px 2px rgba('+String((Math.sin(tick/25)/4+1)*255)+','+String((Math.sin(tick/25)/4+1)*238)+','+String((Math.sin(tick/25)/4+1)*143)+',0)';
  }
  var elements = document.querySelectorAll('.lightborder');
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.border = '2px solid rgb('+String((Math.sin(tick/25)/4+1)*255)+','+String((Math.sin(tick/25)/4+1)*238)+','+String((Math.sin(tick/25)/4+1)*143)+')';
  elements[i].style.backgroundColor = 'transparent'
  elements[i].style.boxShadow = '0 0 10px 2px rgba('+String((Math.sin(tick/25)/4+1)*255)+','+String((Math.sin(tick/25)/4+1)*238)+','+String((Math.sin(tick/25)/4+1)*143)+',0)';
  }
  
  var elements = document.querySelectorAll('.node');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.transform =" rotate("+String(tick)+"deg)";
  }
  
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
  document.getElementById("stardustupgrades1").style.top = String(250 + ScrollY)+"px"
  document.getElementById("stardustupgrades1").style.left = String(250 + ScrollX)+"px"
  document.getElementById("matterupgrades1").style.top = String(0 + ScrollY)+"px"
  document.getElementById("matterupgrades1").style.left = String(350 + ScrollX)+"px"
  document.getElementById("matterupgrades2").style.top = String(150 + ScrollY)+"px"
  document.getElementById("matterupgrades2").style.left = String(500 + ScrollX)+"px"
  document.getElementById("stardustupgrades2").style.top = String(350 + ScrollY)+"px"
  document.getElementById("stardustupgrades2").style.left = String(0 + ScrollX)+"px"
  document.getElementById("tributeupgrades1").style.top = String(25 + ScrollY)+"px"
  document.getElementById("tributeupgrades1").style.left = String(25 + ScrollX)+"px"
  document.getElementById("flareupgrades1").style.top = String(500 + ScrollY)+"px"
  document.getElementById("flareupgrades1").style.left = String(200 + ScrollX)+"px"
  document.getElementById("stardustupgrades3").style.top = String(200 + ScrollY)+"px"
  document.getElementById("stardustupgrades3").style.left = String(-100 + ScrollX)+"px"
  
}

function updateText() {
  var timespeed = gettimespeed()
  gainData()
  Automation()
  //Debug()
  displayupgrades()
  checkbest()
  vfx()
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

import { displayupgrades } from './upgrades.js'

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

document.getElementById('savebutton').addEventListener('click', function() {
  save()
});

document.getElementById('wipebutton').addEventListener('click', function() {
  wipe()
  load()
});

document.getElementById('loadbutton').addEventListener('click', function() {
  load()
});

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