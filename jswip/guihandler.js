
var chosen = null
var chosenbutton = null
var chosenS = null
var chosenSbutton = null
var chosenstabs = null

const upg = window.UPGRADES

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
});