const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}

const novaimg = "https://cdn.glitch.global/46c3a8b6-be2f-412f-a363-0daba898c283/NovaT.png?v=1725819268370"
const squareimg = "https://cdn.glitch.global/46c3a8b6-be2f-412f-a363-0daba898c283/SquareT.png?v=1725819268186"
const circleimg = "https://cdn.glitch.global/46c3a8b6-be2f-412f-a363-0daba898c283/CircleT.png?v=1725819268003"
const triangleimg = "https://cdn.glitch.global/46c3a8b6-be2f-412f-a363-0daba898c283/TriangleT.png?v=1725819267768"

import { player } from './script.js'
import { generalunlocks } from './script.js'
import { particleeffects } from './gravity.js'
import { buyables } from './buyables.js'

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

export let nodes = {
  1: {cost: E("25"), bought: false, description: "Triple Photon gain", name: "Root",Connection:NaN},
  2: {cost: E("250"), bought: false, description: "Photons boost their own production at a reduced rate", name: "Alpha-1",Connection:1},
  3: {cost: E("5000"), bought: false, description: "C-Particles boost Photon gain at a heavily reduced rate", name: "Beta-1",Connection:1},
  4: {cost: E("20000"), bought: false, description: "Photons boost A-Particle gain", name: "Gamma-1",Connection:1},
  5: {cost: E("100000"), bought: false, description: "10x Photon gain.", name: "Alpha-2",Connection:2},
  6: {cost: E("1e6"), bought: false, description: "Weights multiply Photon gain at a reduced rate.", name: "Beta-2",Connection:3},
  7: {cost: E("1e10"), bought: false, description: "Matter Rank cost ^0.25.", name: "Gamma-2",Connection:4},
  8: {cost: E("1e12"), bought: false, description: "Photon gain ^1.1", name: "Alpha-3",Connection:5},
  9: {cost: E("1e11"), bought: false, description: "Unspent Tributes boost Photon gain at a reduced rate", name: "Beta-3",Connection:6},
  10: {cost: E("5e10"), bought: false, description: "Matter Tier cost is reduced by a flat 100", name: "Gamma-3",Connection:7},
  11: {cost: E("1e16"), bought: false, description: "Photon gain x5", name: "Alpha-4",Connection:8},
  12: {cost: E("5e16"), bought: false, description: "Stardust boosts Photon gain at a heavily reduced rate", name: "Beta-4",Connection:9},
  13: {cost: E("1e17"), bought: false, description: "Photons boost Tribute gain", name: "Gamma-4",Connection:10},
};

export function nodeeffects(n) {
  var temp = E("1")
  if (n==1) {
    if (nodes[1].bought == true) {
       temp = E("3")
    }
  }
  if (n==2) {
    if (nodes[2].bought == true) {
       temp = player.photons.pow(E("0.5"))
    }
  }
  if (n==3) {
    if (nodes[3].bought == true) {
       temp = particleeffects(3,2)
    }
  }
  if (n==4) {
    if (nodes[4].bought == true) {
       temp = player.photons.log10().pow(E("0.5"))
      if (temp.gte(E("5"))) {
        temp = E("5").add(temp.sub(E("5")).log10())
      }
    }
  }
  if (n==5) {
    if (nodes[5].bought == true) {
       temp = E("10")
    }
  }
  if (n==6) {
    if (nodes[6].bought == true) {
       temp = buyables.weight.amount.pow(E("0.25"))
    }
  }
  if (n==7) {
    if (nodes[7].bought == true) {
       temp = E("0.25")
    }
  }
  if (n==8) {
    if (nodes[8].bought == true) {
       temp = E("1.1")
    }
  }
  if (n==9) {
    if (nodes[9].bought == true) {
       temp = player.tributes.pow("0.25")
    }
  }
  if (n==10) {
    if (nodes[10].bought == true) {
       temp = E("100")
    } else {
      temp = E("0")
    }
  }
  
  return temp
}

export function displaynodes() {
  
  displaynode(1)
  displaynode(2)
  displaynode(3)
  displaynode(4)
  displaynode(5)
  displaynode(6)
  displaynode(7)
  displaynode(8)
  displaynode(9)
  displaynode(10)
  
}

function prereq(n) {
  var temp = nodes[n].Connection
  return temp;
}

export function clearnodes() {
  
  var remaining = document.getElementsByClassName("lightnode");
  
  for (var i = 0; i < remaining.length; i++) {
    
    remaining[i].remove();
    
  }
  
}

export function getlightgain() {
  if (generalunlocks["Light"] == true) {
    var temp = E("1")
    
    if (nodes[1].bought == true) {temp = temp.mul(nodeeffects(1))}
    if (nodes[2].bought == true) {temp = temp.mul(nodeeffects(2))}
    if (nodes[3].bought == true) {temp = temp.mul(nodeeffects(3))}
    if (nodes[5].bought == true) {temp = temp.mul(nodeeffects(5))}
    if (nodes[6].bought == true) {temp = temp.mul(nodeeffects(6))}
    if (nodes[9].bought == true) {temp = temp.mul(nodeeffects(9))}
    
    if (nodes[8].bought == true) {temp = temp.pow(nodeeffects(8))}
    
    player.photons = player.photons.add(temp.div(E("60")))
  }
}

export function displaynode(nodeid) {
  var prer = prereq(nodeid)
  var pre = NaN
  if (!isNaN(prer)) {
    pre = nodes[prer]
  }
  var a = false
  if (isNaN(prer)) {a = true} else {
    if (pre.bought == true) {a = true}
  }
  if (a == true) {
    if (nodes[nodeid].bought == true) {
        document.getElementById(String(nodeid) + "Node").style.boxShadow = "0 0 25px 5px rgba(0, 255, 0, 1)";
        document.getElementById(String(nodeid) + "Node").style.borderRadius = "25px";
        document.getElementById(String(nodeid) + "Node").style.borderColor = "rgb(0,255,0)";
    } else {
      if (player["photons"].gte(nodes[nodeid].cost)) {
        document.getElementById(String(nodeid) + "Node").style.boxShadow = "0 0 25px 5px rgba(255, 255, 0, 1)";
        document.getElementById(String(nodeid) + "Node").style.borderRadius = "25px";
        document.getElementById(String(nodeid) + "Node").style.borderColor = "rgb(255,255,0)";
      } else {
        document.getElementById(String(nodeid) + "Node").style.boxShadow = "0 0 25px 5px rgba(255, 0, 0, 1)";
        document.getElementById(String(nodeid) + "Node").style.borderRadius = "25px";
        document.getElementById(String(nodeid) + "Node").style.borderColor = "rgb(255,0,0)";
      }
    }
  } else {
        document.getElementById(String(nodeid) + "Node").style.boxShadow = "0 0 25px 5px rgba(56, 56, 56, 1)";
        document.getElementById(String(nodeid) + "Node").style.borderRadius = "25px";
        document.getElementById(String(nodeid) + "Node").style.borderColor = "rgb(56,56,56)";
  }
}

document.getElementById('1Node').addEventListener('click', function() { 
  buynode(1)    
});
document.getElementById('2Node').addEventListener('click', function() { 
  buynode(2)    
});
document.getElementById('3Node').addEventListener('click', function() { 
  buynode(3)    
});
document.getElementById('4Node').addEventListener('click', function() { 
  buynode(4)    
});
document.getElementById('5Node').addEventListener('click', function() { 
  buynode(5)    
});
document.getElementById('6Node').addEventListener('click', function() { 
  buynode(6)    
});
document.getElementById('7Node').addEventListener('click', function() { 
  buynode(7)    
});
document.getElementById('8Node').addEventListener('click', function() { 
  buynode(8)    
});
document.getElementById('9Node').addEventListener('click', function() { 
  buynode(9)    
});
document.getElementById('10Node').addEventListener('click', function() { 
  buynode(10)    
});