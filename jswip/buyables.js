const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}

const player = window.player;
var upgradeinfo = document.getElementById("upgradeinfo")

window.BUYABLES = {
  data: {
    
    compressor: {
      displayName: "Compressor",
      description: "5x Data gain each",
      costType: "data",
      costAmount: function() {
        var temp = E("50000")
        
        temp = temp.mul(E("10").pow(this.bought))
        
        return temp;
      },
      effectPrefix: "Data x",
      effectSuffix: ".",
      bought: E("0"),
      effect: function() {
        var temp = E("1")
        if (this.bought.gte(E("1"))) {temp = E("5").pow(this.bought)}
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