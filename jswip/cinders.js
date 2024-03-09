const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}
import { player } from './script.js'
import { Labors } from './labors.js'
import { fix } from './script.js'
import { fix2 } from './script.js'
import { generalunlocks } from './script.js'
import { upgrades } from './upgrades.js'
import { upgradeeffects } from './upgrades.js'
import { buyables } from './buyables.js'
import { buyableeffects } from './buyables.js'
import { achievements } from './achievements.js'

export let cindereffects = [
  E("1"),
  E("1"),
  E("1"),
  E("1"),
  E("1"),
  E("1"),
  E("1"),
  E("1")
]

export function getcindereffects() {
  cindereffects[1] = player.cinders.mul(E("1e10")).pow(E("0.005")).clampMin(E("1"))
  cindereffects[2] = player.cinders.sub(E("0.00000001")).clampMin(E("0")).mul(E("1e9")).pow(E("0.0625")).mul(E("20"))
  cindereffects[3] = player.cinders.mul(E("1e10")).pow(E("0.25")).clampMin(E("1"))
  cindereffects[4] = player.cinders.mul(E("1e8")).pow(E("0.001")).clampMin(E("1"))
  cindereffects[5] = E("0.9999").pow(player.cinders.mul(E("1e10")).pow(E("0.5")).clampMin(E("1e-100"))).clampMax(E("1"))
  cindereffects[6] = E("1")
  cindereffects[7] = E("1")
  cindereffects[8] = E("1")
  
  document.getElementById("CinderEffect1Display").innerHTML = "Stardust gain ^" + String(fix2(cindereffects[1],5))
  document.getElementById("CinderEffect2Display").innerHTML = "Weight effect +" + String(fix2(cindereffects[2],5))
  document.getElementById("CinderEffect3Display").innerHTML = "Matter gain x" + String(fix2(cindereffects[3],5))
  document.getElementById("CinderEffect4Display").innerHTML = "Infusion effect base +" + String(fix2(cindereffects[4],5))
  document.getElementById("CinderEffect5Display").innerHTML = "Buyable cost scaling ^ " + String(fix2(cindereffects[5],5))
  document.getElementById("CinderEffect6Display").innerHTML = "TBD: " + String(fix2(cindereffects[6],5))
  document.getElementById("CinderEffect7Display").innerHTML = "TBD: " + String(fix2(cindereffects[7],5))
  document.getElementById("CinderEffect8Display").innerHTML = "TBD: " + String(fix2(cindereffects[8],5))
}