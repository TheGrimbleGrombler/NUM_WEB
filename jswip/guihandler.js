
var chosen = null
var chosenbutton = null
var chosenS = null
var chosenSbutton = null

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
      }
      chosen = document.getElementById("tab" + tabN)
      chosenbutton = document.getElementById("tab" + tabN + "button")
    }
    
    if (chosen != null) {
      chosen.style.display = ""
    }
    if (chosenbutton != null) {
      chosenbutton.className = "btn_tab chosen"
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