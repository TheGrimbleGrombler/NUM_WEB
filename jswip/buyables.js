const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}
import { player } from './script.js'
import { Labors } from './script.js'
import { fix } from './script.js'
import { generalunlocks } from './script.js'
import { upgrades } from './upgrades.js'
import { upgradeeffects } from './upgrades.js'
import { timespeed } from './script.js'
import { cindereffects } from './cinders.js'
import { achievements } from './achievements.js'


export let buyables = {
    syphon: {amount: E("0"), manuals: E("0")},
    collector: {amount: E("0"), manuals: E("0")},
    field: {amount: E("0"), manuals: E("0")},
  
    weight: {amount: E("0"), manuals: E("0")},
  
  
  
    catalyst: {amount: E("0"), manuals: E("0")}

};

export function buyableeffects(n) {
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

export function getbuyablecost(n,m) {
  var temp = E("1e99999")
  var modifier = E("0")
  if (m > 0) {
    modifier = m
  }
  
  if (n == 1) {
    var scaling = E("1")
    scaling = scaling.mul(upgradeeffects(17))
    scaling = scaling.mul(upgradeeffects(18))
    if (player.labor == 2) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 5) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 8) {scaling = scaling.mul(E("1e1000"))}
    if (player.labor == 12) {scaling = scaling.mul(E("1e1000"))}
    temp = E("1").mul(E("2").pow(buyables.syphon.manuals.add(modifier).mul(scaling)))
  }
  if (n == 2) {
    var scaling = E("1")
    scaling = scaling.mul(upgradeeffects(17))
    scaling = scaling.mul(upgradeeffects(18))
    if (player.labor == 2) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 5) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 8) {scaling = scaling.mul(E("1e1000"))}
    if (player.labor == 12) {scaling = scaling.mul(E("1e1000"))}
    temp = E("100").mul(E("3").pow(buyables.collector.manuals.add(modifier).mul(scaling)))
  }
  if (n == 3) {
    var scaling = E("1")
    scaling = scaling.mul(upgradeeffects(17))
    scaling = scaling.mul(upgradeeffects(18))
    if (player.labor == 2) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 5) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 8) {scaling = scaling.mul(E("1e1000"))}
    if (player.labor == 12) {scaling = scaling.mul(E("1e1000"))}
    temp = E("2000").mul(E("10").mul(upgradeeffects(16)).pow(buyables.field.manuals.add(modifier).mul(scaling)))
  }
  if (n == 4) {
    var scaling = E("1")
    if (player.labor == 2) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 5) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 8) {scaling = scaling.mul(E("1e1000"))}
    if (player.labor == 12) {scaling = scaling.mul(E("1e1000"))}
    temp = E("10").pow(buyables.weight.manuals.add(modifier).mul(scaling))
  }
  if (n == 5) {
    var scaling = E("1")
    temp = E("100").add(E("100").mul(buyables.catalyst.manuals.add(modifier)).pow(buyables.catalyst.manuals.add(E("10")).log10()))
  }
  return temp
}

export function gainbuyables(){
  
  var temp = buyableeffects(3)
  temp = temp.div(E("60"))
  temp = temp.mul(timespeed)
  buyables.collector.amount = buyables.collector.amount.add(temp)
  var temp = buyableeffects(2)
  temp = temp.mul(timespeed)
  temp = temp.div(E("60"))
  buyables.syphon.amount = buyables.syphon.amount.add(temp)
  
  
}