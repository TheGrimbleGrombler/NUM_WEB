const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}

const novaimg = "https://cdn.glitch.global/46c3a8b6-be2f-412f-a363-0daba898c283/NovaT.png?v=1725819268370"
const squareimg = "https://cdn.glitch.global/46c3a8b6-be2f-412f-a363-0daba898c283/SquareT.png?v=1725819268186"
const circleimg = "https://cdn.glitch.global/46c3a8b6-be2f-412f-a363-0daba898c283/CircleT.png?v=1725819268003"
const triangleimg = "https://cdn.glitch.global/46c3a8b6-be2f-412f-a363-0daba898c283/TriangleT.png?v=1725819267768"

import { player } from './script.js'

export function buynode(n) {
  var c = nodes[n].cost
  var b = nodes[n].bought
  if (b == false) {
     if (player["photons"].gte(c)) {
       
      player["photons"] = player["photons"].sub(c)
      nodes[n].bought = true
       
    }
  }
}

export let nodes = [
  {cost: E("100"), bought: false, description: "Triple Light gain", name: "Root",image: novaimg},
];

export function nodeeffects(n) {
  var temp = E("1")
  if (n==1) {
    if (nodes[1].bought == true) {
       temp = E("3")
    }
  }
  
  return temp
}

export function displayupgrades() {
  
  displaynode("Incrementallist","incrementallist")
  
}




export function displaynode(idname,upname) {
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