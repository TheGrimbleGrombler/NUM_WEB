var upg = window.UPGRADES
var bya = window.BUYABLES
var plr = window.player
var ach = window.ACHIEVEMENTS

var statsOverview = document.getElementById("statsOverview")
var statsBoosts = document.getElementById("statsBoosts")
var statsSoftcaps = document.getElementById("statsSoftcaps")
var statsScaling = document.getElementById("statsScaling")

window.STATINDEX = {
    DISPLAY: function(statName, category) {
        if (statName == "data") {

            if (category == "overview") {

                statsOverview.innerHTML += "Base: 1/s<br>"
                if (upg.main.efficiencyI.bought == true) {statsOverview.innerHTML += "Efficiency 1: x" + String(upgmain.efficiencyI.effect())}
                if (upg.main.efficiencyII.bought == true) {statsOverview.innerHTML += "Efficiency 2: x" + String(upgmain.efficiencyII.effect())}
                if (upg.main.efficiencyIII.bought == true) {statsOverview.innerHTML += "Efficiency 3: x" + String(upgmain.efficiencyIII.effect())}
                if (upg.main.efficiencyIV.bought == true) {statsOverview.innerHTML += "Efficiency 4: x" + String(upgmain.efficiencyIV.effect())}
                if (upg.main.efficiencyV.bought == true) {statsOverview.innerHTML += "Efficiency 5: ^" + String(upgmain.efficiencyV.effect())}
                if (bya.data.compressor.bought.gte(E("1"))) {statsOverview.innerHTML += "Compressors: x" + String(bya.data.compressor.effect())}
 
            }

            if (category == "boosts") {

                statsBoosts.innerHTML += "Base: 1/s<br>"
                if (upg.main.efficiencyI.bought == true) {statsBoosts.innerHTML += "Efficiency 1: x" + String(upgmain.efficiencyI.effect())}
                if (upg.main.efficiencyII.bought == true) {statsBoosts.innerHTML += "Efficiency 2: x" + String(upgmain.efficiencyII.effect())}
                if (upg.main.efficiencyIII.bought == true) {statsBoosts.innerHTML += "Efficiency 3: x" + String(upgmain.efficiencyIII.effect())}
                if (upg.main.efficiencyIV.bought == true) {statsBoosts.innerHTML += "Efficiency 4: x" + String(upgmain.efficiencyIV.effect())}
                if (upg.main.efficiencyV.bought == true) {statsBoosts.innerHTML += "Efficiency 5: ^" + String(upgmain.efficiencyV.effect())}
                if (bya.data.compressor.bought.gte(E("1"))) {statsBoosts.innerHTML += "Compressors: x" + String(bya.data.compressor.effect())}

            }

            if (category == "softcaps") {



            }

            if (category == "scaling") {



            }

        }

        if (statName == "computation") {

            if (category == "overview") {

                statsOverview.innerHTML += "Base: +n*m per second where m starts as 0.1"

                if (bya.significantData.coProcessor.bought.gte(E("1"))) {statsOverview.innerHTML += "CoProcessors: m * " + String(bya.significantData.coProcessor.effect())}
                if (bya.significantData.multithreader.bought.gte(E("1"))) {statsOverview.innerHTML += "Multithreaders: m * " + String(bya.significantData.multithreader.effect())}
 
            }

            if (category == "boosts") {

                statsBoosts.innerHTML += "Base: +n*m per second where m starts as 0.1"

                if (bya.significantData.coProcessor.bought.gte(E("1"))) {statsBoosts.innerHTML += "CoProcessors: m * " + String(bya.significantData.coProcessor.effect())}
                if (bya.significantData.multithreader.bought.gte(E("1"))) {statsBoosts.innerHTML += "Multithreaders: m * " + String(bya.significantData.multithreader.effect())}

            }

            if (category == "softcaps") {



            }

            if (category == "scaling") {



            }

        }

        if (statName == "significantData") {

            if (category == "overview") {

                statsOverview.innerHTML += "Base: Floor(Log10(computation) - 4)"
 
            }

            if (category == "boosts") {

                statsBoosts.innerHTML += "Base: Floor(Log10(computation) - 4)"

            }

            if (category == "softcaps") {



            }

            if (category == "scaling") {



            }

        }
    }
}

window.AUTODISPLAY = function(name) {
    if (window.SUBTABNAME == 3) {
        window.STATINDEX(name,"overview")
    }
    if (window.SUBTABNAME == 4) {
        window.STATINDEX(name,"boosts")
    }
    if (window.SUBTABNAME == 5) {
        window.STATINDEX(name,"scaling")
    }
    if (window.SUBTABNAME == 6) {
        window.STATINDEX(name,"softcaps")
    }
}