
import { E } from './script.js'
import { player } from './script.js'
import { Labors } from './script.js'
import { fix } from './script.js'
import { generalunlocks } from './script.js'
import { upgrades } from './upgrades.js'


let buyables = {
    syphon: {amount: E("0"), manuals: E("0")},
    collector: {amount: E("0"), manuals: E("0")},
    field: {amount: E("0"), manuals: E("0")},
  
    weight: {amount: E("0"), manuals: E("0")},
  
  
  
    catalyst: {amount: E("0"), manuals: E("0")}

};

function buyableeffects(n) {
  var temp = E("1")
  if (n==1) {
    temp = buyables.syphon.amount
    if (upgrades.incrementallist.bought == true) {temp = temp.mul(upgradeeffects(1))}
    if (upgrades.SacredTexts.bought == true) {
      if (player.labor != 7) {
        if (player.labor != 9) {
          if (player.labor != 12) {
            temp = temp.mul(buyables.syphon.manuals)
          }
        }
      }
    }
    temp = temp.mul(timespeed)
  }
  if (n==2) {
    temp = buyables.collector.amount
    if (upgrades.Gravity.bought == true) {temp = temp.mul(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")))}
    if (upgrades.SacredTexts.bought == true) {
      if (player.labor != 7) {
        if (player.labor != 9) {
          if (player.labor != 12) {
            temp = temp.mul(buyables.collector.manuals)
          }
        }
      }
    }
    temp = temp.mul(timespeed)
  }
  if (n==3) {
    temp = buyables.field.amount
    if (upgrades.MEM.bought == true) {temp = temp.pow(upgradeeffects(3))}
    if (upgrades.SacredTexts.bought == true) {
      if (player.labor != 7) {
        if (player.labor != 9) {
          if (player.labor != 12) {
            temp = temp.mul(buyables.field.manuals)
          }
        }
      }
    }
    temp = temp.mul(timespeed)
  }
  if (n==4) {
    temp = E("10").add(upgradeeffects(14)).add(upgradeeffects(15)).add(upgradeeffects(21))
    if (player.flaremilestone >= 1) {temp = temp.add(E("5"))}
    if (cindereffects[2].gte(E("1"))) {temp = temp.add(cindereffects[2])}
    if (Labors.TL5 == true) {temp = temp.add(E("25"))}
    if (buyables.weight.amount.gte(E("31"))) {temp = temp.pow(E("30")).mul(E("3").pow(buyables.weight.amount.sub(E("30"))))} else {temp = temp.pow(buyables.weight.amount)}
    if (upgrades.scramboblingcromjombles.bought == true) {temp = temp.pow(upgradeeffects(19))}
    if (player.labor == 5) {temp = E("1")}
    if (player.labor == 7) {temp = E("1")}
    if (player.labor == 9) {temp = E("1")}
    if (Labors.TL7 == true) {temp = temp.pow(E("1.05"))}
    if (player.labor == 12) {temp = E("1")}
  }
  if (n==5) {
    temp = E("3").pow(buyables.catalyst.amount).sub(E("1")).div(E("1e10"))
  }
  
  
  
  return temp
}
