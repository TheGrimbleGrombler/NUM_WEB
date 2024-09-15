var achievementinfo = document.getElementById("achievementinfo")

const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}

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
  },
  update: function(n,m) {
    var elem = document.getElementById(n)
    if (elem != null) {
      var category = window.ACHIEVEMENTS[String(m)]
      if (category != null) {
        var upgrade = category[String(n)]
        if (upgrade != null) {
          var bought = upgrade.achieved
          
          if (bought == true) {
            elem.className = "achievement achieved"
          } else {
            elem.className = "achievement"
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