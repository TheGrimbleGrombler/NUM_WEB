const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}
import { player } from './script.js'
import { buy } from './upgrades.js'
import { togglelabor } from './labors.js'
import { purge } from './purge.js'
import { doreset } from './doreset.js'
import { automation1 } from './script.js'
import { automation2 } from './script.js'
import { getmatteronreset } from './script.js'
import { gettributesonreset } from './script.js'
import { getflaresonreset } from './script.js'
import { buymatterrank } from './ranks.js'
import { upgrades } from './upgrades.js'
import { upgradeeffects } from './upgrades.js'
import { buyables } from './buyables.js'
import { getbuyablecost } from './buyables.js'
import { buyableeffects } from './buyables.js'
import { fix } from './script.js'
import { fix2 } from './script.js'
import { unlockedsubtabs } from './script.js'
import { Labors } from './labors.js'
import { timespeed } from './script.js'
import { GlobalResourceMultiplier } from './script.js'
import { generalunlocks } from './script.js'

export let achievements = [

]

export function renderachievements() {
for (let i = 0; i < achievements.length; i++) {
  document.getElementById(achievements[i] + "Achievement").className = "achievementclaimed";
} 
}

export function setAchievements(newAchievements) {
  achievements = newAchievements;
}

export function timedunlocks() {
  
  if (!generalunlocks.matterupgrades2 == true) {
    if (player.stardust.gte(E("1e35"))) {
      generalunlocks["matterupgrades2"] = true
      document.getElementById("matterupgrades2").style.display = "block"
    }
  }
  if (generalunlocks.dlc !== true) {
    if (upgrades.dlc.bought == true) {
      generalunlocks["dlc"] = true
      document.getElementById("stardustupgrades2").style.display = "block"
    }
  }
  if (player.stardust.gte(E("1e80"))) {
    generalunlocks["tribute"] = true
    unlockedsubtabs.TributeMain = true
    document.getElementById("tributedisplaycontainer").style.display = "block"
    //document.getElementById("tributesubtab1").style = "display: block;"
  }
  if (player.besttributes.gte(E("1"))) {
    generalunlocks["tributeupgrades1"] = true
    document.getElementById("tributeupgrades1").style.display = "block"
  }
  if (player.besttributes.gte(E("25"))) {
    generalunlocks["Labors1"] = true
    unlockedsubtabs.TributeLabors = true
    document.getElementById("tributesubtab2button").style.display = "block"// = "display: block; position: absolute; top: 11%; left: 26%;  width: 10%; height: 3%;"
  }
  if (player.tributemilestone >= 9) {
    generalunlocks["LaborGroup2"] = true
    document.getElementById("LaborGroup2").style.display = "block"// = "display: block; position: absolute; top: 120px; left: 180px;  width: 90px; height: 24px;"
  }
  if (Labors.TL8 == true) {
    generalunlocks["MatterRanks"] = true
    document.getElementById("MatterRank").style.display = "block"
  }
  if (Labors.TL12 == true) {
    generalunlocks["tributemilestonegroup2"] = true
    document.getElementById("tributemilestonegroup2").style.display = "block"
  }
  if (player.tributemilestone >= 15) {
    generalunlocks["flares"] = true
    unlockedsubtabs.FlareMain = true
    unlockedsubtabs.Cinders = true
    unlockedsubtabs.FlareMilestones = true
    unlockedsubtabs.FlareLabors = true
    document.getElementById("flaredisplaycontainer").style.display = "block"
  }
  if (player.bestflares >= 1) {
    generalunlocks["flares"] = true
    unlockedsubtabs.FlareMain = true
    unlockedsubtabs.Cinders = true
    unlockedsubtabs.FlareMilestones = true
    unlockedsubtabs.FlareLabors = true
    document.getElementById("flaredisplaycontainer").style.display = "block"
  }
  if (player.flaremilestone >= 1) {
    generalunlocks["flareupgrades1"] = true
    document.getElementById("flareupgrades1").style.display = "block"
  }
  if (generalunlocks.stardustupgrades3 !== true) {
    if (upgrades.II.bought == true) {
      generalunlocks["stardustupgrades3"] = true
      document.getElementById("stardustupgrades3").style.display = "block"
    }
  }
  if (upgrades.starryeyes.bought == true) {
    generalunlocks["MatterTiers"] = true
    document.getElementById("MatterTier").style.display = "block"
  } else {
    document.getElementById("MatterTier").style.display = "none"
  }
  
  
  
  
  
  
  //achievements
  if (achievements.indexOf('BlackHole') == -1) {
    if (player.gravitational_waves.gte(E("1.8e308"))) {
      achievements.push("BlackHole");
    }
  }
  if (achievements.indexOf('TheNextStep') == -1) {
    if (player.besttributes.gte(E("1"))) {
      achievements.push("TheNextStep");
    }
  }
  if (achievements.indexOf('Overload') == -1) {
    if (buyables.syphon.manuals.gte(E("10000"))) {
      achievements.push("Overload");
    }
  }
  if (achievements.indexOf('Empowered') == -1) {
    if (buyables.syphon.manuals.gte(E("100000"))) {
      achievements.push("Empowered");
    }
  }
  if (achievements.indexOf('Boundless') == -1) {
    if (player.beststardust.gte(E("1.8e308"))) {
      achievements.push("Boundless");
    }
  }
  if (achievements.indexOf('Ranked') == -1) {
    if (player.matterrank.gte(E("1"))) {
      achievements.push("Ranked");
    }
  }
  if (achievements.indexOf('Past') == -1) {
    if (player.bestflares.gte(E("1"))) {
      achievements.push("Past");
    }
  }
  if (achievements.indexOf('Tiered') == -1) {
    if (player.mattertier.gte(E("1"))) {
      achievements.push("Tiered");
    }
  }
  
  
}