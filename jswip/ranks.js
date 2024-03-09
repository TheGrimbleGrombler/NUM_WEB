const Decimal = window.Decimal;
import { E } from './script.js'
import { player } from './script.js'
import { Labors } from './labors.js'
import { fix } from './script.js'
import { generalunlocks } from './script.js'

export function getrankreq(modifier) {
  var temp = E("1e5")
  
  var scalingmult = E("1")
  
  if (Labors.TL10 == true) {scalingmult = scalingmult.mul(E("0.8"))}
  if (player.tributemilestone >= 11) {scalingmult = scalingmult.mul(E("0.7"))}
  if (player.tributemilestone >= 14) {scalingmult = scalingmult.mul(E("0.5"))}
  
  temp = temp.mul(E("1e100").pow(player.matterrank.add(modifier).mul(scalingmult)))
  
  if (player.matterrank.gte(E("100"))) {temp = temp.pow(player.matterrank.div(E("100").mul(scalingmult)))}
  if (player.matterrank.gte(E("1000"))) {temp = temp.pow(player.matterrank.div(E("1000").mul(scalingmult)))}
  if (player.matterrank.gte(E("1000000"))) {temp = temp.pow(player.matterrank.div(E("1000000").mul(scalingmult)))}
  
  return temp
}

export function gettierreq(modifier) {
  var temp = E("101")
  
  var scalingmult = E("1")
  
  temp = temp.mul(E("3").pow(player.mattertier))
  
  return temp
}

export function getrankeffect() {
  var temp = E("1")
  var modifier = E("1e2")
  
  temp = temp.mul(modifier.pow(player.matterrank))
  
  return temp
}

export function gettiereffect() {
  var temp = E("0.02")
  var modifier = E("1")
  
  temp = modifier.add(temp.mul(player.mattertier))
  
  return temp
}

export function renderrank() {
  if (generalunlocks["MatterRanks"] == true) {
    var mr = document.getElementById("MatterRank1")
    mr.innerHTML = "Matter Rank: <br>" + String(fix(player.matterrank)) + "<br> Cost in matter: <br>" + String(fix(getrankreq(E("0")))) + "<br> Stardust effect: <br>x" + String(fix(getrankeffect()))
  }
  if (generalunlocks["MatterTiers"] == true) {
    var mr = document.getElementById("MatterTier1")
    mr.innerHTML = "Matter Tier: <br>" + String(fix(player.mattertier)) + "<br> Required Matterranks: <br>" + String(fix(gettierreq(E("0")))) + "<br> Stardust effect: <br>^" + String(fix(gettiereffect()))
  }
}

export function buymatterrank(modifier) {
  var cost = getrankreq(modifier)
  if (player.matter.gte(cost)) {
    player.matter = player.matter.sub(cost)
    player.matterrank = player.matterrank.add(E("1").add(modifier))
  }
}

export function buymattertier(modifier) {
  var cost = gettierreq(modifier)
  if (player.matterrank.gte(cost)) {
    player.matterrank = E("0")
    player.mattertier = player.mattertier.add(E("1").add(modifier))
  }
}