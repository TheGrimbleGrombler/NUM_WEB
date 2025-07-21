window.THEME = "default"
var THEMEHASTICKED = false
var PREVIOUSTHEME = "THEME"
window.UPDATETHEME = function() {
    var theme = window.THEME
    var list = document.getElementsByClassName(PREVIOUSTHEME + "_LARGEBORDER")
    for (let i = 0; i < list.length; i++) {
        list[i].className = "uiborderWhite " + theme + "_LARGEBORDER"
    }
    var list = document.getElementsByClassName(PREVIOUSTHEME + "_RESET")
    for (let i = 0; i < list.length; i++) {
        list[i].className = "btn_reset ghost " + theme + "_RESET"
    }

    document.getElementById("BODY").className = "BODY" + theme
    document.getElementById("MAINDIV").className = "MAIN_" + theme

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