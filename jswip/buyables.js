const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}

const player = window.player;
var upgradeinfo = document.getElementById("upgradeinfo")
const format = window.format;

window.BUYABLES = {
  data: {
    
    compressor: {
      displayName: "Compressor",
      description: "Data x 5^n",
      costType: "data",
      costAmount: function() {
        var temp = E("50000")
        
        temp = temp.mul(E("5").pow(this.bought))
        
        if (this.bought.gte(E("10"))) {temp = temp.mul(E("5").pow(this.bought.sub(E("4"))))}
        if (this.bought.gte(E("20"))) {temp = temp.mul(E("1e10").pow(this.bought.sub(E("19"))))}
        //if (temp.gte(E("10"))) {temp = temp.mul(E("1e10").pow(this.bought.sub(E("9"))))}
        
        return temp;
      },
      effectPrefix: "Data x",
      effectSuffix: ".",
      bought: E("0"),
      effect: function() {
        var temp = E("1")
        var base = E("5")
        if (window.BUYABLES.data.compounder.bought.gte(E("1"))) {base = base.add(window.BUYABLES.data.compounder.effect())}
        if (this.bought.gte(E("1"))) {temp = base.pow(this.bought)}
        return temp;
      },
      
    },
    
    compounder: {
      displayName: "Compounder",
      description: "Previous buyable base + n",
      costType: "data",
      costAmount: function() {
        var temp = E("25000000000000")
        
        temp = temp.mul(E("20").pow(this.bought))
        
        if (this.bought.gte(E("5"))) {temp = temp.mul(E("1e10").pow(this.bought.sub(E("4"))))}
        
        return temp;
      },
      effectPrefix: "Previous buyable base + ",
      effectSuffix: ".",
      bought: E("0"),
      effect: function() {
        var temp = E("0")
        if (this.bought.gte(E("1"))) {temp = this.bought}
        return temp;
      },
      
    },
    
  },
  update: function(n,m) {
    var elem = document.getElementById(n)
    if (elem != null) {
      var category = window.BUYABLES[String(m)]
      if (category != null) {
        var upgrade = category[String(n)]
        if (upgrade != null) {
          
          var nam = upgrade.displayName
          var desc = upgrade.description
          var amm = upgrade.bought
          var effdisplay = upgrade.effectPrefix + String(format(upgrade.effect(),5)) + upgrade.effectSuffix
          var costdisplay = "Cost: " + String(format(upgrade.costAmount(),5)) + " " + upgrade.costType
          
          elem.innerHTML = nam + "<br>" + desc + "<br>" + amm + "<br>" + effdisplay + "<br>" + costdisplay
          
          var bought = upgrade.bought
          
            var playercur = player[upgrade.costType]
            if (playercur.gte(upgrade.costAmount())) {
              elem.className = "btn_buyable buyable canbuy"
            } else {

              if (bought.gte(E("1"))) {
                elem.className = "btn_buyable buyable bought"
              } else {
                elem.className = "btn_buyable buyable unbought"
              }
              
            }
          
        }
      }
    }
  },
  display: function(n,m) {
    var category = window.BUYABLES[String(m)]
    if (category != null) {
      var upgrade = category[String(n)]
      if (upgrade != null) {
        
      }
    }
  },
  buy: function(n,m) {
    var category = window.BUYABLES[String(m)]
    if (category != null) {
      var upgrade = category[String(n)]
      if (upgrade != null) {
        var bought = upgrade.bought
        
        if (player[String(upgrade.costType)].gte(upgrade.costAmount())) {
          
          player[String(upgrade.costType)] = player[String(upgrade.costType)].sub(upgrade.costAmount())
          upgrade.bought = upgrade.bought.add(E("1"))
          
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