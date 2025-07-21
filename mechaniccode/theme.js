window.THEME = "default"
var THEMEHASTICKED = false
var PREVIOUSTHEME = "THEME"
window.UPDATETHEME = function() {
    var theme = window.THEME
    var list = document.getElementsByClassName(PREVIOUSTHEME + "_LARGEBORDER")
    for (let i = 0; i < list.length; i++) {
        list[i].className = "uiborderWhite " + theme + "_LARGEBORDER"
    }

    document.getElementById("BODY").className = "BODY" + theme

    THEMEHASTICKED = true
    PREVIOUSTHEME = theme
}
function CHECKTHEME() {
    var theme = window.THEME
    var dropdown = document.getElementById("SITE_THEME_SELECT")
    var value = dropdown.options[dropdown.selectedIndex].value
    if (value != theme) {
        window.THEME = value
        window.UPDATETHEME()
    }
}

document.addEventListener("DOMContentLoaded", function() {
  setInterval(CHECKTHEME,1000)
  window.UPDATETHEME()
});