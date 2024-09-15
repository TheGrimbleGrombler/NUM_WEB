
var chosen = null
var chosenbutton = null
var chosenS = null
var chosenSbutton = null
var chosenstabs = null

const upg = window.UPGRADES
const ach = window.ACHIEVEMENTS
const player = window.player

function UPDATE() {
  
  if (chosen != null) {
    
    if (chosen.id == "tab3") {
      if (chosenS != null) {
        if (chosenS.id == "subtab9") {
          
          upg.update("efficiencyI","main")
          upg.update("efficiencyII","main")
          upg.update("efficiencyIII","main")
          upg.update("efficiencyIV","main")
          upg.update("efficiencyV","main")
          
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
          
          document.getElementById("dataDisplay").innerHTML = "Data:<br>" + String(window.format(player.data))
          
        }
      }
    }
    
  }
}

window.TABS = {
  choose: function(tabN,subtab) {
    
    if (subtab == true) {
      if (chosenS != null) {
        chosenS.style.display = "none"
        chosenS = null
        if (chosenSbutton != null) {
          chosenSbutton.className = "btn_stab"
          chosenSbutton = null
        }
      }
      chosenS = document.getElementById("subtab" + tabN)
      chosenSbutton = document.getElementById("subtab" + tabN + "button")
    } else {
      if (chosen != null) {
        chosen.style.display = "none"
        chosen = null
        if (chosenbutton != null) {
          chosenbutton.className = "btn_tab"
          chosenbutton = null
        }
        if (chosenstabs != null) {
          chosenstabs.style.display = "none"
        }
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
  }
}
document.addEventListener("DOMContentLoaded", function() {
  window.TABS.choose("0", false)
  window.TABS.choose("0", true)
  UPDATE();
  setInterval(UPDATE, 16);
});