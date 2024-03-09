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

export function particleeffects(a,b) {
  var temp = E("0")
  if (a==1) {
    
    if (b==1) {
      temp = player.a_particles.log10().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==2) {
      temp = player.a_particles.log10().pow(E("0.5")).add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==3) {
      temp = E("1")
    }
    
    
  }  
  if (a==2) {
    
    if (b==1) {
      temp = player.b_particles.log10().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==2) {
      temp = player.b_particles.log2().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==3) {
      temp = E("1")
    }
    
    
  }  
  if (a==3) {
    
    if (b==1) {
      temp = player.c_particles.log10().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==2) {
      temp = player.c_particles.log10().add(E("1")).pow(E("0.5")).pow(E("0.5")).pow(E("0.5")).pow(E("0.5"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==3) {
      temp = E("1")
    }
    
    
  }  
  
  
  
  
  
  return temp
}

export function gainparticles(){
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.c_particles.gte(E("1"))) {gain = gain.mul(particleeffects(3,1))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  if (player.tributemilestone >= 5) {gain = gain.pow(E("2"))}
  if (player.labor == 4) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  if (player.labor == 8) {gain = gain.pow(E("0.03125"))}
  if (player.labor == 12) {gain = gain.pow(E("0.03125"))}
  gain = gain.mul(timespeed)
  if (player.labor == 1) {gain = E("0")}
  if (Labors.TL11 == true) {gain = gain.add(E("1e100"))}
  player.a_particles = player.a_particles.add(gain.div(E("60")))
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.a_particles.gte(E("1"))) {gain = gain.mul(particleeffects(1,1))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  if (player.tributemilestone >= 5) {gain = gain.pow(E("2"))}
  if (player.labor == 4) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  gain = gain.mul(timespeed)
  if (player.labor == 1) {gain = E("0")}
  if (Labors.TL11 == true) {gain = gain.add(E("1e100"))}
  player.b_particles = player.b_particles.add(gain.div(E("60")))
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.b_particles.gte(E("1"))) {gain = gain.mul(particleeffects(2,1))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  if (player.tributemilestone >= 5) {gain = gain.pow(E("2"))}
  if (player.labor == 4) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  if (player.labor == 8) {gain = gain.pow(E("0.0000001"))}
  if (player.labor == 12) {gain = gain.pow(E("0.0000001"))}
  gain = gain.mul(timespeed)
  if (player.labor == 1) {gain = E("0")}
  if (Labors.TL11 == true) {gain = gain.add(E("1e100"))}
  player.c_particles = player.c_particles.add(gain.div(E("60")))
  
}

export function gaingravitationalwaves(){
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  
  if (player.b_particles.gte(E("1"))) {gain = gain.mul(particleeffects(2,2))}
  
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  
  if (Labors.TL1 == true) {gain = gain.pow(upgradeeffects(8))}
  
  if (player.tributemilestone >= 5) {gain = gain.pow(E("2"))}
  
  gain = gain.mul(timespeed)
  
  gain = gain.mul(GlobalResourceMultiplier)
  
  if (player.labor == 1) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  //if (player.labor == 8) {gain = E("0")}
  
  player.gravitational_waves = player.gravitational_waves.add(gain.div(E("60")))
  
}