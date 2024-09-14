
var chosen = null
var chosenS = null

export const TABS = {
  choose(tabN,subtab) {
    
    if (subtab == true) {
      if (chosenS != null) {
        chosenS.style.display = "none"
        chosenS = null
      }
      chosenS = document.getElementById("subtab" + tabN)
    } else {
      if (chosen != null) {
        chosen.style.display = "none"
        chosen = null
      }
      chosen = document.getElementById("tab" + tabN)
    }
    
    if (chosen != null) {
      chosen.style.display = ""
    }
    if (chosenS != null) {
      chosenS.style.display = ""
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  TABS.choose("0", false)
});