import { E } from './script.js'
import { player } from './script.js'
import { Labors } from './script.js'
import { fix } from './script.js'
import { generalunlocks } from './script.js'
import { upgrades } from './upgrades.js'
import { upgradeeffects } from './upgrades.js'
import { buyables } from './buyables.js'
import { buyableeffects } from './buyables.js'
import { doreset } from './doreset.js'

function purge(x) {
  if (x==1) {
    player.stardust = E("1");
    player.gravitational_waves = E("0");
    player.a_particles = E("1");
    player.b_particles = E("1");
    player.c_particles = E("1");
  }
  if (x==2) {
    buyables.syphon = {cost: E("1"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.mul(upgradeeffects(1))} else {return buyables.syphon.amount}}}
    buyables.collector = {cost: E("100"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.Gravity.bought == false) {return buyables.collector.amount} else {return buyables.collector.amount.mul(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")))}}}
    buyables.field = {cost: E("2000"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.MEM.bought == false) {return buyables.field.amount} else {return buyables.field.amount.pow(upgradeeffects(3))}}}
  }
  if (x==3) {
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
  }
  if (x==4) {
    doreset(1)
  }
  if (x==5) {
    player.matter = E("0");
  }
  if (x==6) {
    buyables.weight = {cost: E("1"), amount: E("0"), manuals: E("0"), effect: function() {return E("10").pow(buyables.weight.amount)}}
    player.matterrank = E("0")
    player.mattertier = E("0")
  }
  if (x==7) {
    upgrades.Infusion.bought = false
    upgrades.SacredTexts.bought = false
    upgrades.GravitonCatalyst.bought = false
    upgrades.discovery.bought = false
    upgrades.dlc.bought = false
    upgrades.automatons.bought = false
  }
  if (x==8) {
    doreset(2)
  }
  if (x==9) {
    player.tributes = E("0")
  }
  if (x==10) {
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
  }
  if (x==11) {
    upgrades.scaler1.bought = false
    upgrades.scramboblingcromjombles.bought = false
    upgrades.taxevasion.bought = false
    upgrades.realityshift.bought = false
    upgrades.mechanized.bought = false
    upgrades.scaler2.bought = false
    upgrades.sloth.bought = false
    upgrades.gazeehlingjoombahmbalaeze.bought = false
    upgrades.tomfoolery.bought = false
  }
  if (x==12) {
    doreset(3)
  }
  
}