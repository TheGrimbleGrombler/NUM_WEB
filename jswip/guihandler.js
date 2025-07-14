
var chosen = null
var chosenbutton = null
var chosenS = null
var chosenSbutton = null
var chosenstabs = null
var chosenSdiv = null

var Tick = 0

const upg = window.UPGRADES
const ach = window.ACHIEVEMENTS
const bya = window.BUYABLES
const player = window.player
const resets = window.RESETS

const format = window.format
var upgradeinfo = document.getElementById("upgradeinfo")

function UPDATE() {
  
  if (chosen != null) {
    
    if (chosen.id == "tab1") {

      //Reveal subtabs
      if (player.progression >= 2) {
        document.getElementById("subtab1button").style.display = "block"
      } else {
        document.getElementById("subtab1button").style.display = "none"
      }
      document.getElementById("subtab2button").style.display = "none"

    }

    if (chosen.id == "tab3") {
      if (chosenS != null) {
        if (chosenS.id == "subtab9") {
          
          
          var n = window.UPGRADES.lastdisplay;
          var m = window.UPGRADES.lastdisplay2;
          
          if (n != "NONE") {
            if (m != "NONE") {
              
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
              
            }
          }
          
          upg.update("efficiencyI","main")
          upg.update("efficiencyII","main")
          upg.update("efficiencyIII","main")
          upg.update("efficiencyIV","main")
          upg.update("efficiencyV","main")
          upg.update("realpowerI","main")
          upg.update("realpowerII","main")
          upg.update("realpowerIII","main")
          upg.update("realpowerIV","main")
          upg.update("realpowerV","main")
          
        }
      }
    }
    if (chosen.id == "tab4") {
      if (chosenS != null) {
        if (chosenS.id == "subtab10") {
          
          ach.update("datacollector","main")
          ach.update("datacollector2","main")
          ach.update("datacollector3","main")
          ach.update("datacollector4","main")
          ach.update("datacollector5","main")
          
        }
      }
    }
    
    if (chosen.id == "tab0") {
      if (chosenS != null) {
        if (chosenS.id == "subtab0") {
          
          document.getElementById("dataDisplay").innerHTML = "Data:<br>" + String(format(player.data,5))
          bya.update("compressor","data")
          bya.update("compounder","data")
          bya.update("incrementallist","data")
          
        }
        if (chosenS.id == "subtab1") {

          //resetComputation" onclick="window.RESETS.reset(0)" class="btn_buyable buyable unbought">Collapse computation for<br>AMOUNT<br>Significant Data</button></div>

          document.getElementById("computationDisplay").innerHTML = "Computation: " + String(format(player.computation,5))
          document.getElementById("significantDataDisplay").innerHTML = "Significant Data: " + String(format(player.significantData,5))
          
          document.getElementById("resetComputation").innerHTML = "Collapse Computation for:<br>" + format(resets.calculateReturn(0),1) + "<br>Significant Data"

        }
      }
    }
    
  }

  document.getElementById("primaryDisplayData").innerHTML = toString(player.data.toFixed(5))
  if (player.progression >= 2) {
    document.getElementById("displayCluster0").style.display = "block"
    document.getElementById("primaryDisplayComputation").innerHTML = toString(player.computation.toFixed(5))
    document.getElementById("primaryDisplaySignificantData").innerHTML = toString(player.significantData.toFixed(5))
  } else {
    document.getElementById("displayCluster0").style.display = "none"
  }

}

function updateVisuals() {
  
  Tick += 1
  if (chosen != null) {
    if (chosenS != null) {

      if (chosen.id == "tab0") {
        if (chosenS.id == "subtab1") {
              document.getElementById("spinner").style.backgroundPosition = String(Tick) + "px " + String(Tick) + "px"
              document.getElementById("spinner2").style.backgroundPosition = String(Tick) + "px " + String(Tick) + "px"
              document.getElementById("spinner3").style.backgroundPosition = String(Tick) + "px " + String(Tick) + "px"
              document.getElementById("spinner4").style.backgroundPosition = String(Tick) + "px " + String(Tick) + "px"
              document.getElementById("spinner5").style.backgroundPosition = String(Tick) + "px " + String(Tick) + "px"
              
              document.getElementById("spinner").style.rotate = String(Math.sin(Tick/300*3.14)*10) + "deg"
              document.getElementById("spinner2").style.rotate = String(22.5+Math.sin(0.785+Tick/300*3.14)*10) + "deg"
              document.getElementById("spinner3").style.rotate = String(45+Math.sin(1.57+Tick/300*3.14)*10) + "deg"
              document.getElementById("spinner4").style.rotate = String(67.5+Math.sin(2.355+Tick/300*3.14)*10) + "deg"
              document.getElementById("spinner5").style.rotate = String(90+Math.sin(3.14+Tick/300*3.14)*10) + "deg"
        }
      }

    }
  }

}

window.TABS = {
  choose: function(tabN,subtab) {
    
    if (subtab == true) {
      if (chosenSdiv != null) {
        chosenSdiv = null
      }
      if (chosenS != null) {
        chosenS.style.display = "none"
        chosenS = null
      }
      if (chosenSbutton != null) {
        chosenSbutton.className = "btn_stab"
        chosenSbutton = null
      }
      chosenS = document.getElementById("subtab" + tabN)
      chosenSbutton = document.getElementById("subtab" + tabN + "button")
      chosenSdiv = document.getElementById("subtab" + tabN + "div")
    } else {
      if (chosen != null) {
        chosen.style.display = "none"
        chosen = null
      }
      if (chosenbutton != null) {
        chosenbutton.className = "btn_tab"
        chosenbutton = null
      }
      if (chosenstabs != null) {
        chosenstabs.style.display = "none"
      }

      chosen = document.getElementById("tab" + tabN)
      chosenbutton = document.getElementById("tab" + tabN + "button")
      chosenstabs = document.getElementById("stabs" + tabN)
    }
    
    if (chosen != null) {
      chosen.style.display = ""
    }
    if (chosenbutton != null) {
      chosenbutton.className = "btn_tab chosen"
    }
    if (chosenstabs != null) {
      chosenstabs.style.display = ""
    }
    if (chosenS != null) {
      chosenS.style.display = ""
    }
    if (chosenSbutton != null) {
      chosenSbutton.className = "btn_stab chosen"
    }
    if (chosenSdiv != null) {
      chosenSdiv.style.display = ""
    }
    
    if (subtab == false) {
      if (tabN == 0) {this.choose("0",true)}
      if (tabN == 1) {this.choose("3",true)}
      if (tabN == 2) {this.choose("8",true)}
      if (tabN == 3) {this.choose("9",true)}
      if (tabN == 4) {this.choose("10",true)}
    }

  }
}

document.addEventListener("DOMContentLoaded", function() {
  window.TABS.choose("0", false)
  window.TABS.choose("0", true)
  UPDATE();
  setInterval(UPDATE, 200);
  setInterval(updateVisuals, 16);
});