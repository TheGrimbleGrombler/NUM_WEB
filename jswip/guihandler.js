const Decimal = window.Decimal;
function E(n) {
  
  return new Decimal().fromString(n)
  
}
import { player } from './script.js'
import { buy } from './upgrades.js'
import { togglelabor } from './labors.js'
import { purge } from './purge.js'
import { doreset } from './doreset.js'
import { automation1 } from './script.js'
import { automation2 } from './script.js'
import { getmatteronreset } from './script.js'
import { gettributesonreset } from './script.js'
import { getflaresonreset } from './script.js'
import { buymatterrank } from './ranks.js'
import { buymattertier } from './ranks.js'
import { upgrades } from './upgrades.js'
import { upgradeeffects } from './upgrades.js'
import { buyables } from './buyables.js'
import { getbuyablecost } from './buyables.js'
import { buyableeffects } from './buyables.js'
import { fix } from './script.js'
import { fix2 } from './script.js'
import { unlockedsubtabs } from './script.js'
import { particleeffects } from './gravity.js'
import { achievements } from './achievements.js'


var StardustDisplay = document.getElementById("StardustDisplay");
var SyphonDisplay = document.getElementById("SyphonDisplay");
var SyphonButton = document.getElementById("SyphonButton");
var CollectorDisplay = document.getElementById("CollectorDisplay");
var CollectorButton = document.getElementById("CollectorButton");
var FieldDisplay = document.getElementById("FieldDisplay");
var FieldButton = document.getElementById("FieldButton");
var UpgradeName = document.getElementById('UpgradeNameDisplay');
var UpgradeEffect = document.getElementById('UpgradeEffectDisplay');
var UpgradeCost = document.getElementById('UpgradeCostDisplay');
var Gravitational_WavesDisplay = document.getElementById('Gravitational_WavesDisplay');
var AParticleDisplay = document.getElementById('AParticleDisplay');
var BParticleDisplay = document.getElementById('BParticleDisplay');
var CParticleDisplay = document.getElementById('CParticleDisplay');
var APE1D = document.getElementById('AParticleEffect1Display');
var APE2D = document.getElementById('AParticleEffect2Display');
var APE3D = document.getElementById('AParticleEffect3Display');
var BPE1D = document.getElementById('BParticleEffect1Display');
var BPE2D = document.getElementById('BParticleEffect2Display');
var BPE3D = document.getElementById('BParticleEffect3Display');
var CPE1D = document.getElementById('CParticleEffect1Display');
var CPE2D = document.getElementById('CParticleEffect2Display');
var CPE3D = document.getElementById('CParticleEffect3Display');
var MatterDisplay = document.getElementById('MatterDisplay');
var WeightDisplay = document.getElementById("WeightDisplay");
var WeightButton = document.getElementById("WeightButton");
var MassResetButton = document.getElementById("MassResetButton");
var TributeResetButton = document.getElementById("TributeResetButton");
var FlareResetButton = document.getElementById("FlareResetButton");
var endgametext = document.getElementById("ENDGAME");
var TributeDisplay = document.getElementById('TributeDisplay');
var FlareDisplay = document.getElementById('FlareDisplay');
var CinderDisplay = document.getElementById('CinderDisplay');
var CatalystDisplay = document.getElementById("CatalystDisplay");
var CatalystButton = document.getElementById("CatalystButton");

document.getElementById('IncrementallistButton').addEventListener('click', function() {
  buy("incrementallist")  
});

document.getElementById('GravityButton').addEventListener('click', function() {
  buy("Gravity")  
});

document.getElementById('MEMButton').addEventListener('click', function() {
  buy("MEM")  
});

document.getElementById('FeedbackButton').addEventListener('click', function() {
  buy("feedbackloop")  
});

document.getElementById('UnknownButton').addEventListener('click', function() {
  buy("theunknown")  
});

document.getElementById('InfusionButton').addEventListener('click', function() {
  buy("Infusion")  
});

document.getElementById('SacredTextsButton').addEventListener('click', function() {
  buy("SacredTexts")  
});

document.getElementById('GravitonCatalystButton').addEventListener('click', function() {
  buy("gravitoncatalyst")  
});

document.getElementById('AutomatonsButton').addEventListener('click', function() {
  buy("automatons")  
});

document.getElementById('DiscoveryButton').addEventListener('click', function() {
  buy("discovery")  
});

document.getElementById('DLCButton').addEventListener('click', function() {
  buy("dlc")  
});

document.getElementById('SpacetimeButton').addEventListener('click', function() {
  buy("spacetimerupture")  
});

document.getElementById('MinMaxButton').addEventListener('click', function() {
  buy("minmax")  
});

document.getElementById('HeavierButton').addEventListener('click', function() {
  buy("heavier")  
});

document.getElementById('CrushingButton').addEventListener('click', function() {
  buy("crushing")  
});

document.getElementById('ReplicationButton').addEventListener('click', function() {
  buy("replication")  
});

document.getElementById('ScramboblingCromjomblesButton').addEventListener('click', function() {
  buy("scramboblingcromjombles")  
});

document.getElementById('Scaler1Button').addEventListener('click', function() {
  buy("scaler1")  
});

document.getElementById('Scaler2Button').addEventListener('click', function() {
  buy("scaler2")  
});

document.getElementById('TaxEvasionButton').addEventListener('click', function() {
  buy("taxevasion")  
});

document.getElementById('RealityShiftButton').addEventListener('click', function() {
  buy("realityshift")  
});

document.getElementById('MechanizedButton').addEventListener('click', function() {
  buy("mechanized")  
});

document.getElementById('SlothButton').addEventListener('click', function() {
  buy("sloth")
});

document.getElementById('GazeehlingJoombahmbalaezeButton').addEventListener('click', function() {
  buy("gazeehlingjoombahmbalaeze")
});

document.getElementById('TomfooleryButton').addEventListener('click', function() {
  buy("tomfoolery")
});

document.getElementById('1Button').addEventListener('click', function() {
  buy("I")
});

document.getElementById('2Button').addEventListener('click', function() {
  buy("II")
});

document.getElementById('3Button').addEventListener('click', function() {
  buy("IIV")
});

document.getElementById('4Button').addEventListener('click', function() {
  buy("IV")
});

document.getElementById('5Button').addEventListener('click', function() {
  buy("V")
});

document.getElementById('6Button').addEventListener('click', function() {
  buy("VI")
});

document.getElementById('7Button').addEventListener('click', function() {
  buy("VII")
});

document.getElementById('8Button').addEventListener('click', function() {
  buy("IIX")
});

document.getElementById('9Button').addEventListener('click', function() {
  buy("IX")
});

document.getElementById('StarryEyesButton').addEventListener('click', function() {
  buy("starryeyes")
});

document.getElementById('PowerButton').addEventListener('click', function() {
  buy("power")
});

document.getElementById('BreakthroughButton').addEventListener('click', function() {
  buy("breakthrough")
});

document.getElementById('Labor1').addEventListener('click', function() {
  togglelabor(1)
});

document.getElementById('Labor2').addEventListener('click', function() {
  togglelabor(2)
});

document.getElementById('Labor3').addEventListener('click', function() {
  togglelabor(3)
});

document.getElementById('Labor4').addEventListener('click', function() {
  togglelabor(4)
});

document.getElementById('Labor5').addEventListener('click', function() {
  togglelabor(5)
});

document.getElementById('Labor6').addEventListener('click', function() {
  togglelabor(6)
});

document.getElementById('Labor7').addEventListener('click', function() {
  togglelabor(7)
});

document.getElementById('Labor8').addEventListener('click', function() {
  togglelabor(8)
});

document.getElementById('Labor9').addEventListener('click', function() {
  togglelabor(9)
});

document.getElementById('Labor10').addEventListener('click', function() {
  togglelabor(10)
});

document.getElementById('Labor11').addEventListener('click', function() {
  togglelabor(11)
});

document.getElementById('Labor12').addEventListener('click', function() {
  togglelabor(12)
});



document.getElementById('PurgeStardustButton').addEventListener('click', function() {
  purge(1)
});
document.getElementById('PurgeStardustBuyablesButton').addEventListener('click', function() {
  purge(2)
});
document.getElementById('PurgeStardustUpgradesButton').addEventListener('click', function() {
  purge(3)
});
document.getElementById('PurgeStardustLayerButton').addEventListener('click', function() {
  purge(4)
});
document.getElementById('PurgeMatterButton').addEventListener('click', function() {
  purge(5)
});
document.getElementById('PurgeMatterBuyablesButton').addEventListener('click', function() {
  purge(6)
});
document.getElementById('PurgeMatterUpgradesButton').addEventListener('click', function() {
  purge(7)
});
document.getElementById('PurgeMatterLayerButton').addEventListener('click', function() {
  purge(8)
});
document.getElementById('PurgeTributesButton').addEventListener('click', function() {
  purge(9)
});
document.getElementById('PurgeTributeBuyablesButton').addEventListener('click', function() {
  purge(10)
});
document.getElementById('PurgeTributeUpgradesButton').addEventListener('click', function() {
  purge(11)
});
document.getElementById('PurgeTributeLayerButton').addEventListener('click', function() {
  purge(12)
});
document.getElementById('BlackHoleAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Black Hole - Get infinite gravitational waves."
});
document.getElementById('TheNextStepAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "The Next Step - Perform a tribute reset."
});
document.getElementById('OverloadAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Overload - Obtain 10,000 (1e4) 'manually' bought syphons."
});
document.getElementById('EmpoweredAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Empowered - Obtain 100,000 (1e5) 'manually' bought syphons."
});
document.getElementById('BoundlessAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Boundless - Have infinite stardust."
});
document.getElementById('RankedAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Ranked - Get your first matter rank, The scaling on these is insane later."
});
document.getElementById('PastAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Back to the Past - Get some flares! d:"
});
document.getElementById('TieredAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Tiered - Get a matter tier!"
});
document.getElementById('Arbitrary1Achievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Arbitrary I - Reset for 1234 tributes at once."
});
document.getElementById('WhyAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Why????? - Secret #1"
});

document.getElementById('MatterRank1').addEventListener('click', function() {
  buymatterrank(E("0"))
});

document.getElementById('MatterTier1').addEventListener('click', function() {
  buymattertier(E("0"))
});

document.getElementById('MassResetButton').addEventListener('click', function() {
  if (getmatteronreset().gte(E("1"))) {
  player.matter = player.matter.add(getmatteronreset())
  doreset(1)
  }
});

document.getElementById('TributeResetButton').addEventListener('click', function() {
  if (gettributesonreset().gte(E("1"))) {
      if (gettributesonreset().gte(E("1234"))) {
        if (achievements.indexOf('Arbitrary1') == -1) {
          achievements.push("Arbitrary1");
        }
      }
  player.tributes = player.tributes.add(gettributesonreset())
  doreset(2)
  }
});

document.getElementById('FlareResetButton').addEventListener('click', function() {
  if (getflaresonreset().gte(E("1000"))) {
  player.flares = player.flares.add(getflaresonreset())
  doreset(3)
  }
});


document.getElementById('SyphonButton').addEventListener('click', function() {
  if (player.stardust.gte(getbuyablecost(1).floor().sub(E("0.1")))) {
    player.stardust = player.stardust.sub(getbuyablecost(1))
    buyables.syphon.amount = buyables.syphon.amount.add(E("1"))
    buyables.syphon.manuals = buyables.syphon.manuals.add(E("1"))
}});
document.getElementById('CollectorButton').addEventListener('click', function() {
  if (player.stardust.gte(getbuyablecost(2))) {
    player.stardust = player.stardust.sub(getbuyablecost(2))
    buyables.collector.manuals = buyables.collector.manuals.add(E("1"))
    buyables.collector.amount = buyables.collector.amount.add(E("1"))
}});
document.getElementById('FieldButton').addEventListener('click', function() {
  if (player.stardust.gte(getbuyablecost(3))) {
    player.stardust = player.stardust.sub(getbuyablecost(3))
    buyables.field.amount = buyables.field.amount.add(E("1"))
    buyables.field.manuals = buyables.field.manuals.add(E("1"))
}});

document.getElementById('WeightButton').addEventListener('click', function() {
  if (player.matter.gte(getbuyablecost(4))) {
    player.matter = player.matter.sub(getbuyablecost(4))
    buyables.weight.amount = buyables.weight.amount.add(E("1"))
    buyables.weight.manuals = buyables.weight.manuals.add(E("1"))
}});

document.getElementById('CatalystButton').addEventListener('click', function() {
  if (player.flares.gte(getbuyablecost(5))) {
    player.flares = player.flares.sub(getbuyablecost(5))
    buyables.catalyst.amount = buyables.catalyst.amount.add(E("1"))
    buyables.catalyst.manuals = buyables.catalyst.manuals.add(E("1"))
}});

function openTab(tabName) {
  // Get all elements with class "tabcontent"
  var tabContents = document.getElementsByClassName("tabcontent");
  
  // Loop through the tab content elements
  for (var i = 0; i < tabContents.length; i++) {
    // Hide the tab content that doesn't match the selected tab
    if (tabContents[i].id === tabName) {
      tabContents[i].style.display = "block";
      
        // Get all elements with class "tabcontent"
        var tabContents2 = document.getElementsByClassName("subtabbutton");
  
        // Loop through the tab content elements
        for (var j = 0; j < tabContents2.length; j++) {
          // Hide the tab content that doesn't match the selected tab
          if (unlockedsubtabs[tabContents2[j].id]) {
            tabContents2[j].style.display = "block";
          } else {
            tabContents2[j].style.display = "none";
          }
        }
      
    } else {
      tabContents[i].style.display = "none";
    }
  }
}

function openSubtab(tabName) {
  // Get all elements with class "tabcontent"
  var tabContents = document.getElementsByClassName("subtabcontent");
  
  // Loop through the tab content elements
  for (var i = 0; i < tabContents.length; i++) {
    // Hide the tab content that doesn't match the selected tab
    if (tabContents[i].id === tabName) {
      tabContents[i].style.display = "block";
    } else {
      tabContents[i].style.display = "none";
    }
  }
}

document.getElementById('tab1button').addEventListener('click', function() {
  openTab("tab1")
});
document.getElementById('tab2button').addEventListener('click', function() {
  openTab("tab2")
});
document.getElementById('tab3button').addEventListener('click', function() {
  openTab("tab3")
});
document.getElementById('purgebutton').addEventListener('click', function() {
  openTab("tab4")
});
document.getElementById('achievementbutton').addEventListener('click', function() {
  openTab("tab5")
});
document.getElementById('changelogbutton').addEventListener('click', function() {
  openTab("tab8")
});
document.getElementById('tab6button').addEventListener('click', function() {
  openTab("tab6")
});
document.getElementById('tab7button').addEventListener('click', function() {
  openTab("tab7")
});
document.getElementById('settingsbutton').addEventListener('click', function() {
  openTab("tab9")
});
document.getElementById('subtab1button').addEventListener('click', function() {
  openSubtab("subtab1")
});
document.getElementById('subtab2button').addEventListener('click', function() {
  openSubtab("subtab2")
});
document.getElementById('tributesubtab1button').addEventListener('click', function() {
  openSubtab("tributesubtab1")
});
document.getElementById('tributesubtab2button').addEventListener('click', function() {
  openSubtab("tributesubtab2")
});
document.getElementById('flaresubtab1button').addEventListener('click', function() {
  openSubtab("flaresubtab1")
});
document.getElementById('flaresubtab2button').addEventListener('click', function() {
  openSubtab("flaresubtab2")
});
document.getElementById('flaresubtab3button').addEventListener('click', function() {
  openSubtab("flaresubtab3")
});
document.getElementById('flaresubtab4button').addEventListener('click', function() {
  openSubtab("flaresubtab4")
});
document.getElementById('masssubtab1button').addEventListener('click', function() {
  openSubtab("masssubtab1")
});

document.getElementById('IncrementallistButton').addEventListener('mouseover', function(event) {
    if (upgrades.incrementallist.bought == true) {UpgradeName.innerHTML = "Incrementallist (Bought)"} else {UpgradeName.innerHTML = "Incrementallist (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.incrementallist.display) + ", Currently " + String(fix(upgradeeffects(1))) + "x."
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.incrementallist.cost) + " Stardust"
});

document.getElementById('GravityButton').addEventListener('mouseover', function(event) {
    if (upgrades.Gravity.bought == true) {UpgradeName.innerHTML = "Gravity (Bought)"} else {UpgradeName.innerHTML = "Gravity (Unbought)"}
    UpgradeEffect.innerHTML = String(upgradeeffects(2));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.Gravity.cost) + " Stardust"
});

document.getElementById('MEMButton').addEventListener('mouseover', function(event) {
    if (upgrades.MEM.bought == true) {UpgradeName.innerHTML = "More Efficient Tactics (Bought)"} else {UpgradeName.innerHTML = "More Efficient Tactics (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.MEM.display) + String(fix(upgradeeffects(3)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.MEM.cost) + " Stardust"
});

document.getElementById('FeedbackButton').addEventListener('mouseover', function(event) {
    if (upgrades.feedbackloop.bought == true) {UpgradeName.innerHTML = "Feedback Loop (Bought)"} else {UpgradeName.innerHTML = "Feedback Loop (Unbought)"}
    UpgradeEffect.innerHTML = String(upgrades.feedbackloop.display) + String(fix(upgradeeffects(4)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.feedbackloop.cost) + " Stardust"
});

document.getElementById('UnknownButton').addEventListener('mouseover', function(event) {
    if (upgrades.theunknown.bought == true) {UpgradeName.innerHTML = "The Unknown (Bought)"} else {UpgradeName.innerHTML = "The Unknown (Unbought)"}
    UpgradeEffect.innerHTML = String(upgradeeffects(5));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.theunknown.cost) + " Stardust"
});

document.getElementById('InfusionButton').addEventListener('mouseover', function(event) {
    if (upgrades.Infusion.bought == true) {UpgradeName.innerHTML = "Infusion (Bought)"} else {UpgradeName.innerHTML = "Infusion (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.Infusion.display + String(fix(upgradeeffects(6)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.Infusion.cost) + " Matter"
});

document.getElementById('SacredTextsButton').addEventListener('mouseover', function(event) {
    if (upgrades.SacredTexts.bought == true) {UpgradeName.innerHTML = "Sacred Texts (Bought)"} else {UpgradeName.innerHTML = "Sacred Texts (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.SacredTexts.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.SacredTexts.cost) + " Matter"
});
function checkifgravcatiscapped() {if(upgradeeffects(8).gte(E("10"))){return " (softcapped)"}else{return ""}}
document.getElementById('GravitonCatalystButton').addEventListener('mouseover', function(event) {
    if (upgrades.gravitoncatalyst.bought == true) {UpgradeName.innerHTML = "Graviton Catalyst (Bought)"} else {UpgradeName.innerHTML = "Graviton Catalyst (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.gravitoncatalyst.display + String(fix(upgradeeffects(8))) + checkifgravcatiscapped();
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.gravitoncatalyst.cost) + " Matter"
});

document.getElementById('AutomatonsButton').addEventListener('mouseover', function(event) {
    if (upgrades.automatons.bought == true) {UpgradeName.innerHTML = "Automatons (Bought)"} else {UpgradeName.innerHTML = "Automatons (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.automatons.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.automatons.cost) + " Matter"
});

document.getElementById('DiscoveryButton').addEventListener('mouseover', function(event) {
    if (upgrades.discovery.bought == true) {UpgradeName.innerHTML = "Discovery (Bought)"} else {UpgradeName.innerHTML = "Discovery (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.discovery.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.discovery.cost) + " Matter"
});

document.getElementById('DLCButton').addEventListener('mouseover', function(event) {
    if (upgrades.dlc.bought == true) {UpgradeName.innerHTML = "DLC (Bought)"} else {UpgradeName.innerHTML = "DLC (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.dlc.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.dlc.cost) + " Matter"
});

document.getElementById('SpacetimeButton').addEventListener('mouseover', function(event) {
    if (upgrades.spacetimerupture.bought == true) {UpgradeName.innerHTML = "Spacetime Rupture (Bought)"} else {UpgradeName.innerHTML = "Spacetime Rupture (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.spacetimerupture.display + String(fix(upgradeeffects(12)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.spacetimerupture.cost) + " Stardust"
});

document.getElementById('MinMaxButton').addEventListener('mouseover', function(event) {
    if (upgrades.minmax.bought == true) {UpgradeName.innerHTML = "Min-Max (Bought)"} else {UpgradeName.innerHTML = "Min-Max (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.minmax.display + String(fix(upgradeeffects(13)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.minmax.cost) + " Stardust"
});

document.getElementById('HeavierButton').addEventListener('mouseover', function(event) {
    if (upgrades.heavier.bought == true) {UpgradeName.innerHTML = "Heavier (Bought)"} else {UpgradeName.innerHTML = "Heavier (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.heavier.display + String(fix(upgradeeffects(14)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.heavier.cost) + " Stardust"
});

document.getElementById('CrushingButton').addEventListener('mouseover', function(event) {
    if (upgrades.crushing.bought == true) {UpgradeName.innerHTML = "Crushing (Bought)"} else {UpgradeName.innerHTML = "Crushing (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.crushing.display + String(fix(upgradeeffects(15)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.crushing.cost) + " Stardust"
});

document.getElementById('ReplicationButton').addEventListener('mouseover', function(event) {
    if (upgrades.replication.bought == true) {UpgradeName.innerHTML = "Replication (Bought)"} else {UpgradeName.innerHTML = "Replication (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.replication.display + String(fix(upgradeeffects(16)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.replication.cost) + " Stardust"
});

document.getElementById('ScramboblingCromjomblesButton').addEventListener('mouseover', function(event) {
    if (upgrades.scramboblingcromjombles.bought == true) {UpgradeName.innerHTML = "Scrambobling Cromjombles (Bought)"} else {UpgradeName.innerHTML = "Scrambobling Cromjombles (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.scramboblingcromjombles.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.scramboblingcromjombles.cost) + " Tributes"
});

document.getElementById('Scaler1Button').addEventListener('mouseover', function(event) {
    if (upgrades.scaler1.bought == true) {UpgradeName.innerHTML = "Scaler 1 (Bought)"} else {UpgradeName.innerHTML = "Scaler 1 (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.scaler1.display + " Currently: x" + String(fix(upgradeeffects(17)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.scaler1.cost) + " Tributes"
});

document.getElementById('Scaler2Button').addEventListener('mouseover', function(event) {
    if (upgrades.scaler2.bought == true) {UpgradeName.innerHTML = "Scaler 2 (Bought)"} else {UpgradeName.innerHTML = "Scaler 2 (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.scaler2.display + " Currently: x" + String(fix(upgradeeffects(18)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.scaler2.cost) + " Tributes"
});

document.getElementById('TaxEvasionButton').addEventListener('mouseover', function(event) {
    if (upgrades.taxevasion.bought == true) {UpgradeName.innerHTML = "Tax Evasion (Bought)"} else {UpgradeName.innerHTML = "Tax Evasion (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.taxevasion.display + " Currently: ^" + String(fix(upgradeeffects(20)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.taxevasion.cost) + " Tributes"
});

document.getElementById('RealityShiftButton').addEventListener('mouseover', function(event) {
    if (upgrades.realityshift.bought == true) {UpgradeName.innerHTML = "Reality Shift (Bought)"} else {UpgradeName.innerHTML = "Reality Shift (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.realityshift.display + " Currently: +" + String(fix(upgradeeffects(21)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.realityshift.cost) + " Tributes"
});

document.getElementById('MechanizedButton').addEventListener('mouseover', function(event) {
    if (upgrades.mechanized.bought == true) {UpgradeName.innerHTML = "Mechanized (Bought)"} else {UpgradeName.innerHTML = "Mechanized (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.mechanized.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.mechanized.cost) + " Tributes"
});

document.getElementById('SlothButton').addEventListener('mouseover', function(event) {
    if (upgrades.sloth.bought == true) {UpgradeName.innerHTML = "Sloth Totem (Bought)"} else {UpgradeName.innerHTML = "Sloth Totem (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.sloth.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.sloth.cost) + " Tributes"
});

document.getElementById('GazeehlingJoombahmbalaezeButton').addEventListener('mouseover', function(event) {
    if (upgrades.gazeehlingjoombahmbalaeze.bought == true) {UpgradeName.innerHTML = "Gazeehling Joombahmbalaeze (Bought)"} else {UpgradeName.innerHTML = "Gazeehling Joombahmbalaeze (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.gazeehlingjoombahmbalaeze.display + " Currently: ^" + String(fix(upgradeeffects(22)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.gazeehlingjoombahmbalaeze.cost) + " Tributes"
});

document.getElementById('TomfooleryButton').addEventListener('mouseover', function(event) {
    if (upgrades.tomfoolery.bought == true) {UpgradeName.innerHTML = "Tomfoolery (Bought)"} else {UpgradeName.innerHTML = "Tomfoolery (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.tomfoolery.display + " Currently: +" + String(fix(upgradeeffects(23)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.tomfoolery.cost) + " Tributes"
});

document.getElementById('1Button').addEventListener('mouseover', function(event) {
    if (upgrades.I.bought == true) {UpgradeName.innerHTML = "I (Bought)"} else {UpgradeName.innerHTML = "I (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.I.display + " Currently: *" + String(fix(upgradeeffects(24)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.I.cost) + " Flares"
});

document.getElementById('2Button').addEventListener('mouseover', function(event) {
    if (upgrades.II.bought == true) {UpgradeName.innerHTML = "II (Bought)"} else {UpgradeName.innerHTML = "II (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.II.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.II.cost) + " Flares"
});

document.getElementById('3Button').addEventListener('mouseover', function(event) {
    if (upgrades.IIV.bought == true) {UpgradeName.innerHTML = "IIV (Bought)"} else {UpgradeName.innerHTML = "IIV (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.IIV.display + " Currently: +" + String(fix(upgradeeffects(26)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.IIV.cost) + " Flares"
});

document.getElementById('4Button').addEventListener('mouseover', function(event) {
    if (upgrades.IV.bought == true) {UpgradeName.innerHTML = "IV (Bought)"} else {UpgradeName.innerHTML = "IV (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.IV.display + " Currently: +" + String(fix(upgradeeffects(27)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.IV.cost) + " Flares"
});

document.getElementById('5Button').addEventListener('mouseover', function(event) {
    if (upgrades.V.bought == true) {UpgradeName.innerHTML = "V (Bought)"} else {UpgradeName.innerHTML = "V (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.V.display + " Currently: +" + String(fix(upgradeeffects(28)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.V.cost) + " Flares"
});

document.getElementById('6Button').addEventListener('mouseover', function(event) {
    if (upgrades.VI.bought == true) {UpgradeName.innerHTML = "VI (Bought)"} else {UpgradeName.innerHTML = "VI (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.VI.display + " Currently: +" + String(fix(upgradeeffects(29)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.VI.cost) + " Flares"
});

document.getElementById('7Button').addEventListener('mouseover', function(event) {
    if (upgrades.VII.bought == true) {UpgradeName.innerHTML = "VII (Bought)"} else {UpgradeName.innerHTML = "VII (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.VII.display + " Currently: +" + String(fix(upgradeeffects(30)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.VII.cost) + " Flares"
});

document.getElementById('8Button').addEventListener('mouseover', function(event) {
    if (upgrades.IIX.bought == true) {UpgradeName.innerHTML = "IIX (Bought)"} else {UpgradeName.innerHTML = "IIX (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.IIX.display + " Currently: +" + String(fix(upgradeeffects(31)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.IIX.cost) + " Flares"
});

document.getElementById('9Button').addEventListener('mouseover', function(event) {
    if (upgrades.IX.bought == true) {UpgradeName.innerHTML = "IX (Bought)"} else {UpgradeName.innerHTML = "IX (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.IX.display + " Currently: +" + String(fix(upgradeeffects(32)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.IX.cost) + " Flares"
});

document.getElementById('StarryEyesButton').addEventListener('mouseover', function(event) {
    if (upgrades.starryeyes.bought == true) {UpgradeName.innerHTML = "Starry Eyes (Bought)"} else {UpgradeName.innerHTML = "Starry Eyes (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.starryeyes.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.starryeyes.cost) + " Stardust"
});

document.getElementById('PowerButton').addEventListener('mouseover', function(event) {
    if (upgrades.power.bought == true) {UpgradeName.innerHTML = "Power (Bought)"} else {UpgradeName.innerHTML = "Power (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.power.display + " Currently: ^^" + String(fix(upgradeeffects(34)));
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.power.cost) + " Stardust"
});

document.getElementById('BreakthroughButton').addEventListener('mouseover', function(event) {
    if (upgrades.breakthrough.bought == true) {UpgradeName.innerHTML = "Breakthrough (Bought)"} else {UpgradeName.innerHTML = "Breakthrough (Unbought)"}
    UpgradeEffect.innerHTML = upgrades.breakthrough.display;
    UpgradeCost.innerHTML = "Cost: " + String(upgrades.breakthrough.cost) + " Stardust"
});

  
export function guitick() {
  
  StardustDisplay.innerHTML = String(fix(player.stardust,2));
  SyphonDisplay.innerHTML = "You have " + String(fix(buyables.syphon.amount,0)) + " (" + String(fix(buyables.syphon.manuals,0)) +") Syphons, Boosting Stardust gain by +" + String(fix(buyableeffects(1),0)) + "/s";
  SyphonButton.innerHTML = "Cost: " + String(fix(getbuyablecost(1),0)) + " Stardust";
  CollectorDisplay.innerHTML = "You have " + String(fix(buyables.collector.amount,0)) + " (" + String(fix(buyables.collector.manuals,0)) +") Collectors, Producing " + String(fix(buyableeffects(2),0)) + " syphons/s";
  CollectorButton.innerHTML = "Cost: " + String(fix(getbuyablecost(2),0)) + " Stardust";
  FieldDisplay.innerHTML = "You have " + String(fix(buyables.field.amount,0)) + " (" + String(fix(buyables.field.manuals,0)) +") Fields, Producing " + String(fix(buyableeffects(3),0)) + " collectors/s";
  FieldButton.innerHTML = "Cost: " + String(fix(getbuyablecost(3),0)) + " Stardust";
  Gravitational_WavesDisplay.innerHTML = "You have " + String(fix(player.gravitational_waves,0)) + " Gravitational Waves, Collector effect * " + String(fix(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")),2));
  
  AParticleDisplay.innerHTML = "You have " + String(fix(player.a_particles,0)) + " A-Particles, Boosts:"
  
  APE1D.innerHTML = "B-Particle gain x" + String(fix(particleeffects(1,1)))
  APE2D.innerHTML = "Stardust gain x" + String(fix(particleeffects(1,2)))
  APE3D.innerHTML = ""
  
  BParticleDisplay.innerHTML = "You have " + String(fix(player.b_particles,0)) + " B-Particles, Boosts:"
  
  BPE1D.innerHTML = "C-Particle gain x" + String(fix(particleeffects(2,1)))
  BPE2D.innerHTML = "Gravitational Waves x" + String(fix(particleeffects(2,2)))
  BPE3D.innerHTML = ""
  
  CParticleDisplay.innerHTML = "You have " + String(fix(player.c_particles,0)) + " C-Particles, Boosts:"
  CPE1D.innerHTML = "A-Particle gain x" + String(fix(particleeffects(3,1)))
  CPE2D.innerHTML = "??? x" + String(fix(particleeffects(3,2)))
  CPE3D.innerHTML = ""
  
  MassResetButton.innerHTML ="Reset all previous progress for " + String(fix(getmatteronreset(),2)) + " Matter"
  TributeResetButton.innerHTML ="Reset all previous progress for " + String(fix(gettributesonreset(),0)) + " Tributes"
  FlareResetButton.innerHTML ="Reset all previous progress for " + String(fix(getflaresonreset(),0)) + " Flares"
  
  MatterDisplay.innerHTML =String(fix(player.matter,0))
  WeightDisplay.innerHTML = "You have " + String(fix(buyables.weight.amount,0)) + " (" + String(fix(buyables.weight.manuals,0)) +") Weights, Multiplying stardust gain by " + String(fix(buyableeffects(4),0)) + "x";
  WeightButton.innerHTML = "Cost: " + String(fix(getbuyablecost(4),0)) + " Matter";
  
  TributeDisplay.innerHTML =String(fix(player.tributes,0))
  
  FlareDisplay.innerHTML = String(fix(player.flares,0))
  
  CinderDisplay.innerHTML ="Cinders: " + String(fix2(player.cinders,10))
  CatalystDisplay.innerHTML = "You have " + String(fix(buyables.catalyst.amount,0)) + " (" + String(fix(buyables.catalyst.manuals,0)) +") Catalysts, Generating cinders: " + String(fix2(buyableeffects(5),10)) + "/s";
  CatalystButton.innerHTML = "Cost: " + String(fix(getbuyablecost(5),0)) + " Flares";
  
  if (upgrades.power.bought == true) {endgametext.innerHTML = "You have reached the current endgame!"} else {endgametext.innerHTML = " "}
}