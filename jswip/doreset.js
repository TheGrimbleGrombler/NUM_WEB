const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}
import { player } from './script.js'
import { Labors } from './script.js'
import { fix } from './script.js'
import { generalunlocks } from './script.js'
import { upgrades } from './upgrades.js'
import { buyables } from './buyables.js'
import { achievements } from './achievements.js'

export function doreset(tier) {
  
  if (tier >= 1) {
    
    buyables.syphon = {cost: E("1"), amount: E("0"), manuals: E("0")}
    buyables.collector = {cost: E("100"), amount: E("0"), manuals: E("0")}
    buyables.field = {cost: E("2000"), amount: E("0"), manuals: E("0")}

    upgrades.incrementallist.bought = false
    upgrades.Gravity.bought = false
    upgrades.MEM.bought = false
    upgrades.feedbackloop.bought = false
    upgrades.theunknown.bought = false
    upgrades.spacetimerupture.bought = false
    upgrades.minmax.bought = false
    upgrades.heavier.bought = false
    upgrades.crushing.bought = false
    upgrades.replication.bought = false
    
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
  
  if (tier >= 3) {
    
    player.tributes = E("0")
    player.tributemilestone = 0
    Labors.TL1 = false
    Labors.TL2 = false
    Labors.TL3 = false
    Labors.TL4 = false
    Labors.TL5 = false
    Labors.TL6 = false
    Labors.TL7 = false
    Labors.TL8 = false
    Labors.TL9 = false
    Labors.TL10= false
    Labors.TL11= false
    Labors.TL12= false
    upgrades.scaler1.bought = false
    upgrades.scramboblingcromjombles.bought = false
    upgrades.taxevasion.bought = false
    upgrades.realityshift.bought = false
    upgrades.scaler2.bought = false
    upgrades.sloth.bought = false
    upgrades.gazeehlingjoombahmbalaeze.bought = false
    upgrades.tomfoolery.bought = false
    player.matterrank = E("0")
    player.besttributesthisflare = E("0")
    player.bestflaresthist4 = E("0")
    
  }
  
  
  //retainments
  if (tier <= 2) {
    if (player.tributemilestone >= 1) {
      buyables.syphon.amount = E("1")
      buyables.syphon.manuals = E("1")
      buyables.collector.amount = E("1")
      buyables.collector.manuals = E("1")
      buyables.field.amount = E("1")
      buyables.field.manuals = E("1")
    }
    if (player.tributemilestone >= 2) {
      upgrades.incrementallist.bought = true
    }
    if (player.tributemilestone >= 4) {
      upgrades.SacredTexts.bought = true
    }
    if (player.tributemilestone >= 6) {
      upgrades.Gravity.bought = true
      upgrades.gravitoncatalyst.bought = true
    }
    if (player.tributemilestone >= 7) {
      buyables.weight.amount = E("1")
      buyables.weight.manuals = E("1")
    }
    
    if (player.labor == 5) {
      buyables.weight.amount = E("0")
      buyables.weight.manuals = E("0")
      upgrades.SacredTexts.bought = false
      upgrades.gravitoncatalyst.bought = false
    }
  }
  
  if (tier == 2) {
    if (player.labor > 0) {
      
      if (Labors["TL" + String(player.labor)] == true) {
        if (achievements.indexOf('Why') == -1) {
          achievements.push("Why");
        }
      }
      
      Labors["TL" + String(player.labor)] = true
      player.labor = 0
    }
  }
  
}