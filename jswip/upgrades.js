const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}
import { player } from './script.js'
import { Labors } from './labors.js'
import { fix } from './script.js'
import { generalunlocks } from './script.js'
import { buyables } from './buyables.js'
import { buyableeffects } from './buyables.js'
import { doreset } from './doreset.js'
import { cindereffects } from './cinders.js'
import { achievements } from './achievements.js'
import { unlockedsubtabs } from './script.js'

export function buy(n) {
  var c = upgrades[n].cost
  var ct = upgrades[n].costtype
  var b = upgrades[n].bought
  if (b == false) {
     if (player[ct].gte(c)) {
      
      if (player.labor == 9) {return}
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
       if (n == "II") {
         generalunlocks["stardustupgrades3"] = true; 
         document.getElementById("stardustupgrades3").style = "display: block;"
       };
       
    }
  }
}

export let upgrades = {
  incrementallist: {cost: E("25000"), costtype: "stardust", bought: false, display: "Syphons boost their own effect"},
  Gravity: {cost: E("200000"), costtype: "stardust", bought: false, display: "Unlock Gravity"},
  MEM: {cost: E("2e6"), costtype: "stardust", bought: false, display: "Squares the effect of fields, Currently: ^"},
  feedbackloop: {cost: E("5e7"), costtype: "stardust", bought: false, display: "Stardust gain x1.1 for each manual buyable level, Currently: x"},
  theunknown: {cost: E("5e8"), costtype: "stardust", bought: false, display: "Unlock Mass"},
  
  spacetimerupture: {cost: E("5e68"), costtype: "stardust", bought: false, display: "100x Stardust gain, Currently: x"},
  minmax: {cost: E("2e71"), costtype: "stardust", bought: false, display: "+5% Stardust gain for each OoM of Stardust, Currently: x"},
  heavier: {cost: E("1e73"), costtype: "stardust", bought: false, display: "+2 to the unsoftcapped weight effect, Currently: +"},
  crushing: {cost: E("1e76"), costtype: "stardust", bought: false, display: "ANOTHER +2 to the unsoftcapped weight effect, Currently: +"},
  replication: {cost: E("2e78"), costtype: "stardust", bought: false, display: "Field cost scales 70% slower, Currently: x"},
  
  Infusion: {cost: E("3"), costtype: "matter", bought: false, display: "Stardust gain x3, then another x3 for every other OoM of matter, Currently: x"},
  SacredTexts: {cost: E("10"), costtype: "matter", bought: false, display: "Manual levels of all stardust buyables multiply the effect of their buyable, Dynamic."},
  gravitoncatalyst: {cost: E("10000"), costtype: "matter", bought: false, display: "Gravitational wave gain is EXPONENTIATED based on matter with a generous formula (As well as particles A-C which also have their effects boosted significantly), Currently: ^"},
  discovery: {cost: E("1e30"), costtype: "matter", bought: false, display: "Triples the speed of time"},
  dlc: {cost: E("1e31"), costtype: "matter", bought: false, display: "Unlocks more stardust upgrades"},
  
  scramboblingcromjombles: {cost: E("1"), costtype: "tributes", bought: false, display: "Weight effect ^1.1, Buy Scaler 1 first."},
  taxevasion: {cost: E("3"), costtype: "tributes", bought: false, display: "Stardust gain ^1.13."},
  realityshift: {cost: E("8"), costtype: "tributes", bought: false, display: "Unsoftcapped weight effect +10!!!"},
  
  automatons: {cost: E("100000000000000"), costtype: "matter", bought: false, display: "Automates stardust buyables"},
  scaler1: {cost: E("1"), costtype: "tributes", bought: false, display: "Stardust buyable cost scaling reduced based on best stardust."},
  mechanized: {cost: E("21"), costtype: "tributes", bought: false, display: "Automates matter buyables."},
  scaler2: {cost: E("25"), costtype: "tributes", bought: false, display: "Stardust buyable cost scaling reduced based on best stardust again."},
  sloth: {cost: E("50"), costtype: "tributes", bought: false, display: "Automate matter upgrades."},
  gazeehlingjoombahmbalaeze: {cost: E("250"), costtype: "tributes", bought: false, display: "Particle effects ^2."},
  tomfoolery: {cost: E("500"), costtype: "tributes", bought: false, display: "Flat +1e80 increase to stardust gain outside of Labors."},
  I: {cost: E("1000"), costtype: "flares", bought: false, display: "Stardust gain x100 to help you get back on your feet."},
  II: {cost: E("1600"), costtype: "flares", bought: false, display: "Unlock a few new upgrades here and there. (Not fully implemented)"},
  IIV: {cost: E("1e100"), costtype: "flares", bought: false, display: "TBD"},
  IV: {cost: E("1e100"), costtype: "flares", bought: false, display: "TBD"},
  V: {cost: E("1e100"), costtype: "flares", bought: false, display: "TBD"},
  VI: {cost: E("1e100"), costtype: "flares", bought: false, display: "TBD"},
  VII: {cost: E("1e100"), costtype: "flares", bought: false, display: "TBD"},
  IIX: {cost: E("1e100"), costtype: "flares", bought: false, display: "TBD"},
  IX: {cost: E("1e100"), costtype: "flares", bought: false, display: "TBD"},
  X: {cost: E("1e100"), costtype: "flares", bought: false, display: "TBD"},
  
  starryeyes: {cost: E("1e12700"), costtype: "stardust", bought: false, display: "Matter Tiers! (Not fully implemented)"},
  power: {cost: E("1e99999999"), costtype: "stardust", bought: false, display: "(Not fully implemented) Incrementallist effect is tetrated: "},
};

export function upgradeeffects(n) {
  var temp = E("1")
  if (n==1) {
    if (upgrades.incrementallist.bought==true) {temp = buyables.syphon.amount.add(E("10")).log10()}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==2) {
    if (upgrades.Gravity.bought==true) {temp = "It is done."} else {temp = "Currently no gravity... Maybe it's better this way."}
  }
  if (n==3) {
    if (upgrades.MEM.bought==true) {temp = E("2")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==4) {
    if (upgrades.feedbackloop.bought==true) {temp = E("1.1").pow(buyables.syphon.manuals.add(buyables.collector.manuals).add(buyables.field.manuals))}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==5) {
    if (upgrades.theunknown.bought==true) {temp = "Endless growth begins."} else {temp = "Gravity with no matter?"}
  }
  if (n==6) {
    var base = E("3")
    if (player.bestflares.gte(E("1000"))) {base = base.add(cindereffects[4])}
    if (upgrades.Infusion.bought==true) {temp = base.pow(player.matter.add(E("1")).log10().div(2).floor()).mul(base)}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==7) {
    temp = E("0")
  }
  if (n==8) {
    if (upgrades.gravitoncatalyst.bought==true) {temp = player.matter.add(E("10")).log10().pow(E("0.75"))}
    if (temp.gte(E("10"))) {temp = E("10").add(temp.sub(E("9")).pow(E("0.2")).sub(E("1")))}
    if (player.labor == 7) {temp = E("1")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (Labors.TL9 == true) {temp = temp.mul(E("2"))}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==9) {
    temp = E("0")
  }
  if (n==10) {
    if (upgrades.discovery.bought==true) {temp = E("3")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==11) {
    temp = E("0")
  }
  if (n==12) {
    if (upgrades.spacetimerupture.bought==true) {temp = E("100")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==13) {
    if (upgrades.minmax.bought==true) {temp = E("1.05").pow(player.stardust.add(E("10")).log10())}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==14) {
    temp = E("0")
    if (upgrades.heavier.bought==true) {temp = E("2")}
    if (player.labor == 9) {temp = E("0")}
    if (player.labor == 10) {temp = E("1").sub(temp)}
    if (player.labor == 12) {temp = E("1").sub(temp)}
  }
  if (n==15) {
    temp = E("0")
    if (upgrades.crushing.bought==true) {temp = E("2")}
    if (player.labor == 9) {temp = E("0")}
    if (player.labor == 10) {temp = E("1").sub(temp)}
    if (player.labor == 12) {temp = E("1").sub(temp)}
  }
  if (n==16) {
    if (upgrades.replication.bought==true) {temp = E("0.3")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==17) {
    if (upgrades.scaler1.bought==true) {temp = E("0.97").pow(player.beststardust.add(E("10")).log10()).clampMin(E("1e-170"))}
  }
  if (n==18) {
    if (upgrades.scaler2.bought==true) {temp = E("0.99").pow(player.beststardust.add(E("10")).log10()).clampMin(E("1e-60"))}
  }
  if (n==19) {
    if (upgrades.scramboblingcromjombles.bought==true) {temp = E("1.1")}
  }
  if (n==20) {
    if (upgrades.taxevasion.bought==true) {temp = E("1.13")}
  }
  if (n==21) {
    if (upgrades.realityshift.bought==true) {temp = E("10")} else {temp = E("0")}
  }
  if (n==22) {
    if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = E("2")}
  }
  if (n==23) {
    if (upgrades.tomfoolery.bought==true) {temp = E("1e80")}
  }
  if (n==24) {
    if (upgrades.I.bought==true) {temp = E("100")}
  }
  if (n==25) {
    if (upgrades.II.bought==true) {temp = E("1")}
  }
  if (n==26) {
    if (upgrades.IIV.bought==true) {temp = E("1.1")}
  }
  if (n==27) {
    if (upgrades.IV.bought==true) {temp = E("1.1")}
  }
  if (n==28) {
    if (upgrades.V.bought==true) {temp = E("1.1")}
  }
  if (n==29) {
    if (upgrades.VI.bought==true) {temp = E("1.1")}
  }
  if (n==30) {
    if (upgrades.VII.bought==true) {temp = E("1.1")}
  }
  if (n==31) {
    if (upgrades.IIX.bought==true) {temp = E("1.1")}
  }
  if (n==32) {
    if (upgrades.IX.bought==true) {temp = E("1.1")}
  }
  if (n==33) {
    if (upgrades.starryeyes.bought==true) {temp = E("1")}
  }
  if (n==34) {
    if (upgrades.power.bought==true) {temp = E("2")}
  }
  
  
  
  return temp
}

export function displayupgrades() {
  
  displayupgrade("Incrementallist","incrementallist")
  displayupgrade("Gravity","Gravity")
  displayupgrade("MEM","MEM")
  displayupgrade("Feedback","feedbackloop")
  displayupgrade("Unknown","theunknown")
  displayupgrade("Infusion","Infusion")
  displayupgrade("SacredTexts","SacredTexts")
  displayupgrade("GravitonCatalyst","gravitoncatalyst")
  displayupgrade("Automatons","automatons")
  displayupgrade("Discovery","discovery")
  displayupgrade("DLC","dlc")
  displayupgrade("Spacetime","spacetimerupture")
  displayupgrade("MinMax","minmax")
  displayupgrade("Heavier","heavier")
  displayupgrade("Crushing","crushing")
  displayupgrade("Replication","replication")
  displayupgrade("ScramboblingCromjombles","scramboblingcromjombles")
  displayupgrade("Scaler1","scaler1")
  displayupgrade("Scaler2","scaler2")
  displayupgrade("TaxEvasion","taxevasion")
  displayupgrade("RealityShift","realityshift")
  displayupgrade("Mechanized","mechanized")
  displayupgrade("Sloth","sloth")
  displayupgrade("GazeehlingJoombahmbalaeze","gazeehlingjoombahmbalaeze")
  displayupgrade("Tomfoolery","tomfoolery")
  displayupgrade("1","I")
  displayupgrade("2","II")
  displayupgrade("3","IIV")
  displayupgrade("4","IV")
  displayupgrade("5","V")
  displayupgrade("6","VI")
  displayupgrade("7","VII")
  displayupgrade("8","IIX")
  displayupgrade("9","IX")
  
}

export function displayupgrade(idname,upname) {
  if (upgrades[upname].bought == true) {
    document.getElementById(idname + "Button").style.boxShadow = "0 0 3px 2px rgba(0, 255, 0, 1)";
  } else {
    if (player[upgrades[upname].costtype].gte(upgrades[upname].cost)) {
      document.getElementById(idname + "Button").style.boxShadow = "0 0 3px 2px rgba(255, 255, 0, 1)";
    } else {
      document.getElementById(idname + "Button").style.boxShadow = "0 0 3px 2px rgba(255, 0, 0, 1)";
    }
  }
}