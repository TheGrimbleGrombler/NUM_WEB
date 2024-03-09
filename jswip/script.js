const Decimal = window.Decimal;
var tick = 1;

function E(n) {
  
  return new Decimal().fromString(n)
  
}

var automation1button = document.getElementById("automation1button");
var automation2button = document.getElementById("automation2button");

var timespeed = E("1")

function fix(n,e) {
  
  return n.toFixed(5)
  
}

function fix2(n,e) {
  
  return n.toFixed(e)
  
}

import { buyables } from './buyables.js'
import { buyableeffects } from './buyables.js'

import { upgrades } from './upgrades.js'
import { upgradeeffects } from './upgrades.js'

import { getbuyablecost } from './buyables.js'

import { getcindereffects } from './cinders.js'
import { cindereffects } from './cinders.js'

import { achievements } from './achievements.js'

function gettimespeed() {
  var temp = E("1")
  if (upgrades.discovery.bought == true) {temp = temp.mul(E("3"))}
  
  
  return temp
}

function loadfunctions() {
  
  //if (isNaN(upgrades.automatons)) {upgrades.automatons = {cost: E("100000000000000"), costtype: "matter", bought: false, display: "Automates stardust buyables"}}
  
  if (isNaN(upgrades.theunknown.cost)) {upgrades.theunknown.cost = E("5e8")}
  if (isNaN(upgrades.theunknown.bought)) {upgrades.theunknown.bought = false}
  if (isNaN(unlockedsubtabs.MassMain)) {unlockedsubtabs.MassMain = generalunlocks.theunknown}
  if (isNaN(buyables.weight.amount)) {buyables.weight.amount = E("0")}
  if (isNaN(buyables.weight.manuals)) {buyables.weight.manuals = E("0")}
  if (isNaN(buyables.catalyst.amount)) {buyables.catalyst.amount = E("0")}
  if (isNaN(buyables.catalyst.manuals)) {buyables.catalyst.manuals = E("0")}
  if (isNaN(buyables.field.amount)) {buyables.field.amount = E("0")}
  if (isNaN(buyables.field.manuals)) {buyables.field.manuals = E("0")}
  if (isNaN(upgrades.Infusion.bought)) {upgrades.Infusion.bought = false}
  if (isNaN(upgrades.SacredTexts.bought)) {upgrades.SacredTexts.bought = false}
  if (isNaN(upgrades.gravitoncatalyst.bought)) {upgrades.gravitoncatalyst.bought = false}
  if (isNaN(upgrades.automatons.bought)) {upgrades.automatons.bought = false}
  if (isNaN(player.playtime)) {player.playtime = 0}
  if (isNaN(upgrades.discovery.bought)) {upgrades.discovery.bought = false}
  if (isNaN(upgrades.dlc.bought)) {upgrades.dlc.bought = false}
  if (isNaN(upgrades.spacetimerupture.bought)) {upgrades.spacetimerupture.bought = false}
  if (isNaN(upgrades.minmax.bought)) {upgrades.minmax.bought = false}
  if (isNaN(upgrades.heavier.bought)) {upgrades.heavier.bought = false}
  if (isNaN(upgrades.crushing.bought)) {upgrades.crushing.bought = false}
  if (isNaN(upgrades.replication.bought)) {upgrades.replication.bought = false}
  if (isNaN(unlockedsubtabs.TributeMain)) {unlockedsubtabs.TributeMain = generalunlocks.tribute}
  if (isNaN(player.tributes)) {player.tributes = E("0")}
  if (isNaN(player.flares)) {player.flares = E("0")}
  if (isNaN(player.bestflares)) {player.bestflares = E("0")}
  if (isNaN(player.besttributesthisflare)) {player.besttributesthisflare = E("0")}
  if (isNaN(player.bestflaresthist4)) {player.bestflaresthist4 = E("0")}
  if (isNaN(upgrades.scramboblingcromjombles.bought)) {upgrades.scramboblingcromjombles.bought = false}
  if (isNaN(upgrades.scaler1.bought)) {upgrades.scaler1.bought = false}
  if (isNaN(upgrades.scaler2.bought)) {upgrades.scaler2.bought = false}
  if (isNaN(upgrades.taxevasion.bought)) {upgrades.taxevasion.bought = false}
  if (isNaN(upgrades.realityshift.bought)) {upgrades.realityshift.bought = false}
  if (isNaN(upgrades.mechanized.bought)) {upgrades.mechanized.bought = false}
  if (isNaN(upgrades.sloth.bought)) {upgrades.sloth.bought = false}
  if (isNaN(upgrades.gazeehlingjoombahmbalaeze.bought)) {upgrades.gazeehlingjoombahmbalaeze.bought = false}
  if (isNaN(upgrades.tomfoolery.bought)) {upgrades.tomfoolery.bought = false}
  if (isNaN(upgrades.I.bought)) {upgrades.I.bought = false}
  if (isNaN(upgrades.II.bought)) {upgrades.II.bought = false}
  if (isNaN(upgrades.IIV.bought)) {upgrades.IIV.bought = false}
  if (isNaN(upgrades.IV.bought)) {upgrades.IV.bought = false}
  if (isNaN(upgrades.V.bought)) {upgrades.V.bought = false}
  if (isNaN(upgrades.VI.bought)) {upgrades.VI.bought = false}
  if (isNaN(upgrades.VII.bought)) {upgrades.VII.bought = false}
  if (isNaN(upgrades.IIX.bought)) {upgrades.IIX.bought = false}
  if (isNaN(upgrades.IX.bought)) {upgrades.IX.bought = false}
  if (isNaN(upgrades.starryeyes.bought)) {upgrades.starryeyes.bought = false}
  if (isNaN(upgrades.power.bought)) {upgrades.power.bought = false}
  if (isNaN(Labors.TL1)) {Labors.TL1 = false}
  if (isNaN(Labors.TL2)) {Labors.TL2 = false}
  if (isNaN(Labors.TL3)) {Labors.TL3 = false}
  if (isNaN(Labors.TL4)) {Labors.TL4 = false}
  if (isNaN(Labors.TL5)) {Labors.TL5 = false}
  if (isNaN(Labors.TL6)) {Labors.TL6 = false}
  if (isNaN(Labors.TL7)) {Labors.TL7 = false}
  if (isNaN(Labors.TL8)) {Labors.TL8 = false}
  if (isNaN(Labors.TL9)) {Labors.TL9 = false}
  if (isNaN(Labors.TL10)) {Labors.TL10 = false}
  if (isNaN(Labors.TL11)) {Labors.TL11 = false}
  if (isNaN(Labors.TL12)) {Labors.TL12 = false}
  if (isNaN(player.matterrank)) {player.matterrank = E("0")}
  if (isNaN(player.mattertier)) {player.mattertier = E("0")}
  if (isNaN(player.cinders)) {player.cinders = E("0")}
  //player.matterrank = E("0")
  //if (!Array.isArray(achievements)) {let achievements = []}
  
  
  
  
  
}

function Automation() {
  
  
    if (player.tributemilestone >= 8) {
      player.matter = player.matter.add(getmatteronreset().div(E("6000")))
    }
  
  
    function auto(a,b,c) {
    var a1 = buyables[String(a)].manuals
    if (a1.gte(E("1")) == true) {
      if (player[String(b)].gte(getbuyablecost(c,a1.div(E("1"))))) {
        player[String(b)] = player[String(b)].sub(getbuyablecost(c,a1.div(E("1"))))
        buyables[String(a)].amount = buyables[String(a)].amount.add(a1.div(E("1")))
        buyables[String(a)].manuals = buyables[String(a)].manuals.add(a1.div(E("1")))
      }
    var a1 = buyables[String(a)].manuals
      if (player[String(b)].gte(getbuyablecost(c,a1.div(E("10"))))) {
        player[String(b)] = player[String(b)].sub(getbuyablecost(c,a1.div(E("10"))))
        buyables[String(a)].amount = buyables[String(a)].amount.add(a1.div(E("10")))
        buyables[String(a)].manuals = buyables[String(a)].manuals.add(a1.div(E("10")))
      }
    var a1 = buyables[String(a)].manuals
      if (player[String(b)].gte(getbuyablecost(c,a1.div(E("100"))))) {
        player[String(b)] = player[String(b)].sub(getbuyablecost(c,a1.div(E("100"))))
        buyables[String(a)].amount = buyables[String(a)].amount.add(a1.div(E("100")))
        buyables[String(a)].manuals = buyables[String(a)].manuals.add(a1.div(E("100")))
      }
    var a1 = buyables[String(a)].manuals
      if (player[String(b)].gte(getbuyablecost(c))) {
        player[String(b)] = player[String(b)].sub(getbuyablecost(c))
        buyables[String(a)].amount = buyables[String(a)].amount.add(E("1"))
        buyables[String(a)].manuals = buyables[String(a)].manuals.add(E("1"))
      }
    }
    }
  
  if (upgrades.automatons.bought) {
    if (automation1 == true) {
      auto("syphon","stardust",1)
      auto("collector","stardust",2)
      auto("field","stardust",3)
    }
  }
    if (upgrades.mechanized.bought) {
      if (automation2 == true) {
        auto("weight","matter",4)
      }
    }
  
  if (player.tributemilestone >= 3) {
    buy("incrementallist") 
    buy("Gravity")  
    buy("MEM")
    buy("feedbackloop") 
    buy("theunknown")  
    buy("spacetimerupture") 
    buy("minmax")   
    buy("heavier") 
    buy("crushing") 
    buy("replication")   
  }
  if (upgrades.sloth.bought == true) {
    buy("Infusion")  
    buy("SacredTexts")  
    buy("gravitoncatalyst")  
    buy("discovery")  
    buy("dlc")  
  }
  
}

import { doreset } from './doreset.js'

let generalunlocks = {
  stardust: true,
  
  
}

let unlockedsubtabs = {
  "Main": true,
  "MassMain": true,
  "TributeMain": true,
  
}
let player = {
  stardust: E("1"),
  gravitational_waves: E("0"),
  a_particles: E("1"),
  b_particles: E("1"),
  c_particles: E("1"),
  matter: E("0"),
  playtime: 0,
  tributes: E("0"),
  beststardust: E("0"),
  bestmatter: E("0"),
  besttributes: E("0"),
  tributemilestone: 0,
  flaremilestone: 0,
  labor: 0,
  matterrank: E("0"),
  mattertier: E("0"),
  flares: E("0"),
  bestflares: E("0"),
  besttributesthisflare: E("0"),
  bestflaresthist4: E("0"),
  cinders: E("0"),
};

import { Labors } from './labors.js'

var x = new Decimal().fromString("1e100")
var GlobalResourceMultiplier = E("1")
var automation1 = true
var automation2 = true

function checkbest() {
  if (player.stardust.gte(player.beststardust)) {player.beststardust = player.stardust}
  if (player.matter.gte(player.bestmatter)) {player.bestmatter = player.matter}
  if (player.tributes.gte(player.besttributes)) {player.besttributes = player.tributes}
  if (player.tributes.gte(player.besttributesthisflare)) {player.besttributesthisflare = player.tributes}
  if (player.flares.gte(player.bestflares)) {player.bestflares = player.flares}
  if (player.flares.gte(player.bestflaresthist4)) {player.bestflaresthist4 = player.flares}
}


import { particleeffects } from './gravity.js'

function Debug() {
  
  document.getElementById("DEBUG").innerHTML = String(upgradeeffects(1).tetrate(E("2")))
  
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
  
}

import { guitick } from './guihandler.js'
function updateText() {
  var timespeed = gettimespeed()
  gainbuyables()
  gainstardust()
  gaingravitationalwaves()
  gainparticles()
  gaincinders()
  timedunlocks()
  Automation()
  //Debug()
  displayupgrades()
  checkbest()
  milestones()
  calibratelabors()
  renderrank()
  vfx()
  getcindereffects()
  tick = tick + 1
  
  guitick()
}

function getmatteronreset() {
  
  var gain = E("0")
  
  gain = player.stardust.div(E("1e9")).pow(E("0.5"))
  
  if (Labors.TL3 == true) {gain = gain.pow(E("1.35"))}
  if (player.labor == 3) {gain = gain.pow(E("0.25"))}
  if (player.labor == 4) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  if (player.labor == 7) {gain = E("0")}
  if (player.labor == 9) {gain = E("0")}
  if (player.labor == 12) {gain = E("0")}
  if (player.bestflares.gte(E("1000"))) {gain = gain.mul(cindereffects[3])}
  
  if (gain.gte(E("1e10000"))) {gain = E("1e10000").mul(gain.div(E("1e10000")).pow(E("0.25")))}
  
  return gain.floor()
  
}

function gettributesonreset() {
  
  var gain = E("0")
  
  gain = player.stardust.div(E("1e80")).log10().div(E("80")).add(E("1")).floor()
  
  if (Labors.TL6 == true) {gain = gain.mul(E("5"))}
  
  return gain
  
}

function getflaresonreset() {
  
  var gain = E("0")
  
  gain = player.tributes.sub(E("400000"))
  if (gain.lte(E("99999"))) {return E("0")}
  gain = gain.log10().sub(E("4")).mul(E("1000")).floor()
  
  return gain
  
}

function playtimeupdate() {player.playtime = player.playtime + 1; renderachievements()}

setInterval(playtimeupdate, 1000);

import { gainbuyables } from './buyables.js'
function gainbuyables2(){
  
  var temp = buyableeffects(3)
  temp = temp.div(E("60"))
  temp = temp.mul(timespeed)
  buyables.collector.amount = buyables.collector.amount.add(temp)
  var temp = buyableeffects(2)
  temp = temp.mul(timespeed)
  temp = temp.div(E("60"))
  buyables.syphon.amount = buyables.syphon.amount.add(temp)
  
  
}

import { gaingravitationalwaves } from './gravity.js'
function gaincinders(){
  var gain = E("0")
  
  gain = gain.add(buyableeffects(5))
  
  player.cinders = player.cinders.add(gain.div(E("60")))
}
function gainstardust(){
  var gain = E("0")
  
  var temp = buyables.syphon.amount
  if (upgrades.incrementallist.bought == true) {temp = temp.mul(upgradeeffects(1))}
  gain = gain.add(temp)
  
  if (player.a_particles.gte(E("1"))) {gain = gain.mul(particleeffects(1,2))}
  
  if (buyables.weight.amount.gte(E("1"))) {gain = gain.mul(buyableeffects(4))}
  
  if (upgradeeffects(6).gte(E("1"))) {gain = gain.mul(upgradeeffects(6))}
  
  if (upgrades.spacetimerupture.bought==true) {gain = gain.mul(upgradeeffects(12))}
  if (upgrades.minmax.bought==true) {gain = gain.mul(upgradeeffects(13))}
  
  if (player.tributemilestone >= 2) {gain = gain.mul(E("5"))}
  
  if (upgrades.I.bought==true) {gain = gain.mul(upgradeeffects(24))}
  
  if (player.cinders.gte(E("0.000000001"))) {gain = gain.mul(cindereffects[1])}
  
  if (upgrades.taxevasion.bought==true) {
    gain = gain.pow(upgradeeffects(20))
    if (Labors.TL4 == true) {gain = gain.pow(upgradeeffects(20))}
  }
  
  if (Labors.TL2 == true) {gain = gain.pow(E("1.115"))}
  
  if (upgrades.tomfoolery.bought==true) { if (player.labor == 0) { gain = gain.add(upgradeeffects(23).mul(60)) }}
  if (player.tributemilestone >= 12) { if (player.labor == 0) { gain = gain.add(E("1e2000").mul(60)) }}
  if (player.tributemilestone >= 13) { if (player.labor == 0) { gain = gain.add(E("1e3000").mul(60)) }}
  if (player.matterrank.gte(E("1"))) {gain = gain.mul(getrankeffect())}
  
  if (player.labor == 4) { gain = gain.pow(E("0.9")) }
  if (player.labor == 5) { gain = gain.pow(E("0.5")) }
  if (player.labor == 6) { gain = gain.pow(E("0.195")) }
  if (player.labor == 7) { gain = gain.pow(E("0.755")) }
  if (player.labor == 9) { gain = gain.pow(E("0.755")) }
  if (player.labor == 10) { gain = gain.pow(E("0.19")) }
  if (player.labor == 11) { gain = gain.pow(E("0.09")) }
  
  gain = gain.mul(timespeed)
  
  gain = gain.mul(GlobalResourceMultiplier)
  
  var gain = gain.div(E("60"))
  player.stardust = player.stardust.add(gain)
}

import { gainparticles } from './gravity.js'

import { buy } from './upgrades.js'

function displayunlocksonload() {
  if (generalunlocks.theunknown == true) {
    document.getElementById("matterdisplaycontainer").style = "display: block;"
    document.getElementById("matterupgrades1").style = "display: block;"
  };
  if (generalunlocks.matterupgrades2 == true) {
    document.getElementById("matterupgrades2").style = "display: block;"
  };
  if (generalunlocks.dlc == true) {
    document.getElementById("stardustupgrades2").style = "display: block;"
  };
  if (generalunlocks.tribute == true) {
    unlockedsubtabs.TributeMain = true
    document.getElementById("tributedisplaycontainer").style = "display: block;"
    //document.getElementById("tributesubtab1").style = "display: block;"
  };
  if (generalunlocks.tributeupgrades1 == true) {
    document.getElementById("tributeupgrades1").style = "display: block;"
  };
  if (generalunlocks.flares == true) {
    document.getElementById("flaredisplaycontainer").style = "display: block;"
  };
  if (generalunlocks.flareupgrades1 == true) {
    document.getElementById("flareupgrades1").style = "display: block;"
  };
  if (generalunlocks.stardustupgrades3 == true) {
    document.getElementById("stardustupgrades3").style = "display: block;"
  };
  
  
  
  
}

import { displayupgrades } from './upgrades.js'

function save() {
  const dataToSave = {
    player: player,
    achievements: achievements,
    unlockedsubtabs: unlockedsubtabs,
    syphonamount: buyables.syphon.amount,
    syphonmanuals: buyables.syphon.manuals,
    collectoramount: buyables.collector.amount,
    collectormanuals: buyables.collector.manuals,
    fieldamount: buyables.field.amount,
    fieldmanuals: buyables.field.manuals,
    weightamount: buyables.weight.amount,
    weightmanuals: buyables.weight.manuals,
    catalystamount: buyables.catalyst.amount,
    catalystmanuals: buyables.catalyst.manuals,
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
    spacetimerupture: upgrades.spacetimerupture.bought,
    minmax: upgrades.minmax.bought,
    heavier: upgrades.heavier.bought,
    crushing: upgrades.crushing.bought,
    replication: upgrades.replication.bought,
    scramboblingcromjombles: upgrades.scramboblingcromjombles.bought,
    scaler1: upgrades.scaler1.bought,
    scaler2: upgrades.scaler2.bought,
    taxevasion: upgrades.taxevasion.bought,
    realityshift: upgrades.realityshift.bought,
    mechanized: upgrades.mechanized.bought,
    sloth: upgrades.sloth.bought,
    gazeehlingjoombahmbalaeze: upgrades.gazeehlingjoombahmbalaeze.bought,
    tomfoolery: upgrades.tomfoolery.bought,
    I: upgrades.I.bought,
    II: upgrades.II.bought,
    IIV: upgrades.IIV.bought,
    IV: upgrades.IV.bought,
    V: upgrades.V.bought,
    VI: upgrades.VI.bought,
    VII: upgrades.VII.bought,
    IIX: upgrades.IIX.bought,
    IX: upgrades.IX.bought,
    generalunlocks: generalunlocks,
    beststardust: player.beststardust,
    bestmatter: player.bestmatter,
    besttributes: player.besttributes,
    besttributesthisflare: player.besttributesthisflare,
    bestflaresthist4: player.bestflaresthist4,
    labor: player.labor,
    cinders: player.cinders,
    matterrank: player.matterrank,
    mattertier: player.mattertier,
    tl1: Labors.TL1,
    tl2: Labors.TL2,
    tl3: Labors.TL3,
    tl4: Labors.TL4,
    tl5: Labors.TL5,
    tl6: Labors.TL6, 
    tl7: Labors.TL7,
    tl8: Labors.TL8,
    tl9: Labors.TL9,
    tl10: Labors.TL10,
    tl11: Labors.TL11,
    tl12: Labors.TL12,
    fl1: Labors.FL1,
    fl2: Labors.FL2,
    fl3: Labors.FL3,
    fl4: Labors.FL4,
    fl5: Labors.FL5,
    fl1: Labors.FL6,
    
  };
  localStorage.setItem('gameData', JSON.stringify(dataToSave));
}

import { setAchievements } from './achievements.js'

function load() {
  const loadedData = JSON.parse(localStorage.getItem('gameData'));
  if (loadedData) {
    
    player.stardust = E(String(loadedData.player.stardust));
    player.gravitational_waves = E(String(loadedData.player.gravitational_waves));
    player.a_particles = E(String(loadedData.player.a_particles));
    player.b_particles = E(String(loadedData.player.b_particles));
    player.c_particles = E(String(loadedData.player.c_particles));
    player.matter = E(String(loadedData.player.matter));
    player.playtime = E(String(loadedData.player.playtime));
    player.tributes = E(String(loadedData.player.tributes));
    player.flares = E(String(loadedData.player.flares));
    player.beststardust = E(String(loadedData.player.beststardust));
    player.bestmatter = E(String(loadedData.player.bestmatter));
    player.besttributes = E(String(loadedData.player.besttributes));
    player.bestflares = E(String(loadedData.player.bestflares));
    player.labor = String(loadedData.player.labor);
    player.cinders = E(String(loadedData.player.cinders));
    player.matterrank = E(String(loadedData.player.matterrank));
    player.mattertier = E(String(loadedData.player.mattertier));
    player.besttributesthisflare = E(String(loadedData.player.besttributesthisflare));
    player.bestflaresthist4 = E(String(loadedData.player.bestflaresthist4));
    
    if (!isNaN(loadedData.achievements)) {}
    setAchievements(loadedData.achievements);
    
    unlockedsubtabs = loadedData.unlockedsubtabs;
    buyables.syphon.amount = E(String(loadedData.syphonamount))
    buyables.syphon.manuals = E(String(loadedData.syphonmanuals))
    buyables.collector.amount = E(String(loadedData.collectoramount))
    buyables.collector.manuals = E(String(loadedData.collectormanuals))
    buyables.field.amount = E(String(loadedData.fieldamount))
    buyables.field.manuals = E(String(loadedData.fieldmanuals))
    buyables.weight.amount = E(String(loadedData.weightamount))
    buyables.weight.manuals = E(String(loadedData.weightmanuals))
    buyables.catalyst.amount = E(String(loadedData.catalystamount))
    buyables.catalyst.manuals = E(String(loadedData.catalystmanuals))
    
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
    upgrades.spacetimerupture.bought = loadedData.spacetimerupture
    upgrades.minmax.bought = loadedData.minmax
    upgrades.heavier.bought = loadedData.heavier
    upgrades.crushing.bought = loadedData.crushing
    upgrades.replication.bought = loadedData.replication
    upgrades.scramboblingcromjombles.bought = loadedData.scramboblingcromjombles
    upgrades.scaler1.bought = loadedData.scaler1
    upgrades.scaler2.bought = loadedData.scaler2
    upgrades.taxevasion.bought = loadedData.taxevasion
    upgrades.realityshift.bought = loadedData.realityshift
    upgrades.mechanized.bought = loadedData.mechanized
    upgrades.sloth.bought = loadedData.sloth
    upgrades.gazeehlingjoombahmbalaeze.bought = loadedData.gazeehlingjoombahmbalaeze
    upgrades.tomfoolery.bought = loadedData.tomfoolery
    upgrades.I.bought = loadedData.I
    upgrades.II.bought = loadedData.II
    upgrades.IIV.bought = loadedData.IIV
    upgrades.IV.bought = loadedData.IV
    upgrades.V.bought = loadedData.V
    upgrades.VI.bought = loadedData.VI
    upgrades.VII.bought = loadedData.VII
    upgrades.IIX.bought = loadedData.IIX
    upgrades.IX.bought = loadedData.IX
    
    Labors.TL1 = loadedData.tl1
    Labors.TL2 = loadedData.tl2
    Labors.TL3 = loadedData.tl3
    Labors.TL4 = loadedData.tl4
    Labors.TL5 = loadedData.tl5
    Labors.TL6 = loadedData.tl6
    Labors.TL7 = loadedData.tl7
    Labors.TL8 = loadedData.tl8
    Labors.TL9 = loadedData.tl9
    Labors.TL10 = loadedData.tl10
    Labors.TL11 = loadedData.tl11
    Labors.TL12 = loadedData.tl12
    Labors.FL1 = loadedData.fl1
    Labors.FL2 = loadedData.fl2
    Labors.FL3 = loadedData.fl3
    Labors.FL4 = loadedData.fl4
    Labors.FL5 = loadedData.fl5
    Labors.FL6 = loadedData.fl6
    
    loadfunctions()
    
    generalunlocks = loadedData.generalunlocks
    
    
    
    displayunlocksonload()
  }
}

import { getrankreq } from './ranks.js'
import { gettierreq } from './ranks.js'
import { getrankeffect } from './ranks.js'
import { gettiereffect } from './ranks.js'
import { renderrank } from './ranks.js'
import { buymatterrank } from './ranks.js'
import { buymattertier } from './ranks.js'

import { purge } from './purge.js'
import { renderachievements } from './achievements.js'
import { milestones } from './milestones.js'

import { timedunlocks } from './achievements.js'

import { calibratelabors } from './labors.js'
import { togglelabor } from './labors.js'

document.getElementById('savebutton').addEventListener('click', function() {
  save()
});

document.getElementById('loadbutton').addEventListener('click', function() {
  load()
});

document.onkeydown = function (e) {
   if (e.key == "t") {
    if (gettributesonreset().gte(E("1"))) {
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
};

export { E };
export { player };
export { Labors };
export { generalunlocks };
export { fix };
export { fix2 };
export { timespeed };
export { automation1 };
export { automation2 };
export { getmatteronreset };
export { gettributesonreset };
export { getflaresonreset };
export { GlobalResourceMultiplier };
export { unlockedsubtabs };

document.getElementById('CloseBannerButton').addEventListener('click', function() {
  document.getElementById('CloseBannerButton').style.display = "none"
  document.getElementById('Banner').style.display = "none"
});

document.addEventListener("DOMContentLoaded", function() {
  updateText();
  if (typeof localStorage.getItem('gameData') !== 'undefined') {load();}
  setInterval(updateText, 16);
});