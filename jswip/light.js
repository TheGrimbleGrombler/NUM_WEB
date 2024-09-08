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
  {cost: E("100"), bought: false, description: "Triple Light gain", name: "Root",image: novaimg,X:500,Y:500,Connection:null},
  {cost: E("100"), bought: false, description: "Light boosts it's own production at a reduced rate", name: "Self Improvement",image: triangleimg,X:500,Y:750,Connection:1},
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

export function displaynodes() {
  
  displaynode(1)
  displaynode(2)
  
}

function prereq(n) {
  var temp = nodes[n].Connection
  if (temp != null) {
    temp = nodes[temp]
  }
  return temp;
}

export function clearnodes() {
  
  var remaining = document.getElementsByClassName("lightnode");
  
  for (var i = 0; i < remaining.length; i++) {
    
    remaining[i].remove();
    
  }
  
}

export function displaynode(nodeid) {
  var pre = nodes[prereq(nodeid)]
  document.getElementById(String(nodeid)+"Node").div.img.src = nodes[nodeid].image
  var a = false
  if (pre == null) {a = true} else {
    if (pre.bought == true) {a = true}
  }
  if (a == true) {
    if (nodes[nodeid].bought == true) {
      document.getElementById(String(nodeid) + "Node").style.boxShadow = "0 0 3px 2px rgba(0, 255, 0, 1)";
    } else {
      if (player["photons"].gte(nodes[nodeid].cost)) {
        document.getElementById(String(nodeid) + "Node").style.boxShadow = "0 0 3px 2px rgba(255, 255, 0, 1)";
      } else {
        document.getElementById(String(nodeid) + "Node").style.boxShadow = "0 0 3px 2px rgba(255, 0, 0, 1)";
      }
    }
  } else {
      document.getElementById(String(nodeid) + "Node").style.boxShadow = "0 0 3px 2px rgba(56, 56, 56, 0.5)";
  }
}