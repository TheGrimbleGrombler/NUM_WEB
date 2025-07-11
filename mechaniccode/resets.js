const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}

const upg = window.UPGRADES
const ach = window.ACHIEVEMENTS
const bya = window.BUYABLES
const player = window.player

const format = window.format
var upgradeinfo = document.getElementById("upgradeinfo")

window.RESETS = {
    reset: function(n) {

        if (n == 0) { // Computation to SignificantData

            player.computation = E("100")

        }

    }
}