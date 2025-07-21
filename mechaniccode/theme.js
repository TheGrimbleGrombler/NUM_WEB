window.THEME = "default"
var THEMEHASTICKED = false
var PREVIOUSTHEME = "THEME"
window.UPDATETHEME = function() {
    var theme = window.THEME
    var list = document.getElementsByClassName(PREVIOUSTHEME + "_LARGEBORDER")
    for (let i = 0; i < LARGEBORDER.length; i++) {
        list[i].className = "uiborderWhite " + theme + "_LARGEBORDER"
    }

    THEMEHASTICKED = true
    PREVIOUSTHEME = theme
}
CHECKTHEME = function() {
    var theme = window.THEME
    var dropdown = document.getElementById("SITE_THEME_SELECT")
    var value = dropdown.options[dropdown.selectedIndex].value
    if (value != theme) {
        window.THEME = value
        window.UPDATETHEME()
    }
}

document.addEventListener("DOMContentLoaded", function() {
  setinterval(CHECKTHEME,1000)
});