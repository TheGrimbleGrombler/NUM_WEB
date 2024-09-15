const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}

const player = window.player;
var upgradeinfo = document.getElementById("upgradeinfo")

window.UPGRADES = {
  main: {
    efficiencyI: {
      displayName: "Efficency - I",
      description: "Double Data gain",
      image: "https://cdn.glitch.global/5ecf2822-9c4a-4be8-9d23-05f1ff302473/Eff1.png?v=1726407804499",
      costType: "data",
      costAmount: function() {
        var temp = E("10")
        
        return temp;
      },
      effectPrefix: "Currently: Data x",
      effectSuffix: ".",
      bought: false,
      effect: function() {
        var temp = E("1")
        if (this.bought == true) {temp = E("2")}
        return temp;
      },
    },
    efficiencyII: {
      displayName: "Efficency - II",
      description: "Data gain is tripled",
      image: "https://cdn.glitch.global/5ecf2822-9c4a-4be8-9d23-05f1ff302473/Eff2.png?v=1726407804652",
      costType: "data",
      costAmount: function() {
        var temp = E("25")
        
        return temp;
      },
      effectPrefix: "Currently: Data x",
      effectSuffix: ".",
      bought: false,
      effect: function() {
        var temp = E("1")
        if (this.bought == true) {temp = E("3")}
        return temp;
      },
    },
    efficiencyIII: {
      displayName: "Efficency - III",
      description: "Data gain is quadrupled",
      image: "https://cdn.glitch.global/5ecf2822-9c4a-4be8-9d23-05f1ff302473/Eff2.png?v=1726407804652",
      costType: "data",
      costAmount: function() {
        var temp = E("100")
        
        return temp;
      },
      effectPrefix: "Currently: Data x",
      effectSuffix: ".",
      bought: false,
      effect: function() {
        var temp = E("1")
        if (this.bought == true) {temp = E("4")}
        return temp;
      },
    },
    efficiencyIV: {
      displayName: "Efficency - IV",
      description: "Data gain boosts itself at a reduced rate",
      image: "https://cdn.glitch.global/5ecf2822-9c4a-4be8-9d23-05f1ff302473/Eff2.png?v=1726407804652",
      costType: "data",
      costAmount: function() {
        var temp = E("500")
        
        return temp;
      },
      effectPrefix: "Currently: Data x",
      effectSuffix: ".",
      bought: false,
      effect: function() {
        var temp = E("1")
        if (this.bought == true) {temp = player.data.add(E("1")).pow(E("0.25"))}
        return temp;
      },
    },
    efficiencyV: {
      displayName: "Efficency - V",
      description: "Data gain is slightly exponentiated.",
      image: "https://cdn.glitch.global/5ecf2822-9c4a-4be8-9d23-05f1ff302473/Eff2.png?v=1726407804652",
      costType: "data",
      costAmount: function() {
        var temp = E("5000")
        
        return temp;
      },
      effectPrefix: "Currently: Data ^",
      effectSuffix: ".",
      bought: false,
      effect: function() {
        var temp = E("1")
        if (this.bought == true) {temp = E("1.1")}
        return temp;
      },
    },
  },
  update: function(n,m) {
    var elem = document.getElementById(n)
    if (elem != null) {
      var category = window.UPGRADES[String(m)]
      if (category != null) {
        var upgrade = category[String(n)]
        if (upgrade != null) {
          var bought = upgrade.bought
          
          if (bought == true) {
            elem.className = "upgrade bought"
          } else {
            var playercur = player[upgrade.costType]
            if (playercur.gte(upgrade.costAmount())) {
              elem.className = "upgrade canbuy"
            } else {
              elem.className = "upgrade unbought"
            }
          }
          
        }
      }
    }
  },
  display: function(n,m) {
    var category = window.UPGRADES[String(m)]
    if (category != null) {
      var upgrade = category[String(n)]
      if (upgrade != null) {
        var bought = upgrade.bought
        
        var nam = upgrade.displayName
        var desc = upgrade.description
        var effdisplay = upgrade.effectPrefix + String(window.format(upgrade.effect(),5)) + upgrade.effectSuffix
        var costdisplay = null
        if (bought == false) {
          costdisplay = "Cost: " + String(upgrade.costAmount()) + " " + upgrade.costType
        } else {
          costdisplay = effdisplay
        }
        
        upgradeinfo.innerHTML = nam + "<br>" + desc + "<br>" + costdisplay
        
      }
    }
  },
  buy: function(n,m) {
    var category = window.UPGRADES[String(m)]
    if (category != null) {
      var upgrade = category[String(n)]
      if (upgrade != null) {
        var bought = upgrade.bought
        
        if (bought == false) {
          
          if (player[String(upgrade.costType)].gte(upgrade.costAmount)) {
            
            upgrade.bought = true
            player[String(upgrade.costType)] = player[String(upgrade.costType)].sub(upgrade.costAmount)
            
          }
          
        }
        
      }
    }
  }
}

/* UPGRADE FORMAT

    UPGRADE NAME IN CODE: {
      displayName: "",
      description: "",
      image: "",
      costType: "",
      costAmount: function() {
        var temp = E("")
        
        return temp;
      },
      effectPrefix: "Currently: ___",
      effectSuffix: "",
      bought: false,
      effect: function() {
        var temp = E("1")
        if (this.bought == true) {temp = E("2")} //Example
        return temp;
      },
    }
  }


*/