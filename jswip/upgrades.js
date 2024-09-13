const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}
import { player } from './script.js'
import { fix } from './script.js'

export function buy(n) {
  var c = upgrades[n].cost
  var ct = upgrades[n].costtype
  var b = upgrades[n].bought
  if (b == false) {
     if (player[ct].gte(c)) {
      
      player[ct] = player[ct].sub(c)
      upgrades[n].bought = true
       
       
    }
  }
}

export let upgrades = {
  incrementallist: {cost: E("25000"), costtype: "stardust", bought: false, display: "Syphons boost their own effect", display2: "Currently: x"},
};

export function upgradeeffects(n) {
  var temp = E("1")
  if (n==1) {
    temp = E("2")
  }
  
  return temp
}

export function displayupgrades() {
  
}

export function displayupgrade(idname,upname) {
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