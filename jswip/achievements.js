var achievementinfo = document.getElementById("achievementinfo")

const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}

var player = window.player

window.ACHIEVEMENTS = {
  main: {
    datacollector: {
      displayName: "Data Collector I",
      description: "Collect 1000 Data",
      reqType: "data",
      reqAmount: E("1000"),
      tip: "",
      achieved: false,
    },
    datacollector2: {
      displayName: "Data Collector II",
      description: "Collect 100000 Data",
      reqType: "data",
      reqAmount: E("100000"),
      tip: "",
      achieved: false,
    },
    datacollector3: {
      displayName: "Data Collector III",
      description: "Collect 10000000 Data",
      reqType: "data",
      reqAmount: E("10000000"),
      tip: "",
      achieved: false,
    },
    datacollector4: {
      displayName: "Data Collector IV",
      description: "Collect 1000000000 Data",
      reqType: "data",
      reqAmount: E("1000000000"),
      tip: "",
      achieved: false,
    },
    datacollector5: {
      displayName: "Data Collector V",
      description: "Collect 100000000000 Data",
      reqType: "data",
      reqAmount: E("100000000000"),
      tip: "",
      achieved: false,
    },
  },
  update: function(n,m) {
    var elem = document.getElementById(n)
    if (elem != null) {
      var category = window.ACHIEVEMENTS[String(m)]
      if (category != null) {
        var upgrade = category[String(n)]
        if (upgrade != null) {
          var bought = upgrade.achieved
          
          if (bought == false) {
            if (upgrade.reqType != "Special") {
              if (player[upgrade.reqType].gte(upgrade.reqAmount)) {
                upgrade.achieved = true                
              }
            }
          }
          
          if (bought == true) {
            elem.className = "achievement achieved"
          } else {
            elem.className = "achievement unachieved"
          }
          
        }
      }
    }
  },
  display: function(n,m) {
    var category = window.ACHIEVEMENTS[String(m)]
    if (category != null) {
      var upgrade = category[String(n)]
      if (upgrade != null) {
        var bought = upgrade.achieved
        
        var nam = upgrade.displayName
        var desc = upgrade.description
        var tip = upgrade.tip
        
        achievementinfo.innerHTML = nam + "<br>" + desc + "<br>" + tip
        
      }
    }
  },
}