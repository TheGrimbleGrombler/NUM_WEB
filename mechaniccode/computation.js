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

var computationMax = E("1e10")

//Computation, A system based around a gradual increase that eventually culminates enough that it reaches its variable cap that then lets you reset for another currency in the same tab, Significant Data. Think replicanti from Antimatter Dimensions.

window.COMPUTATION = {

    gainComputation: function() {

        if (!player.computation.gte(E("100"))) {player.computation = E("100")}

        var gain = player.computation.div(E("10"))



        gain = gain.div(E("60"))
        player.computation = player.computation.add(gain)

        if (player.computation.gte(computationMax)) {player.computation = player.computationMax}

    }

}