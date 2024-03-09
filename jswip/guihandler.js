
import { player } from './script.js'
import { buy } from './upgrades.js'
import { togglelabor } from './labors.js'
import { purge } from './purge.js'
import { doreset } from './purge.js'

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


document.getElementById('savebutton').addEventListener('click', function() {
  save()
});

document.getElementById('loadbutton').addEventListener('click', function() {
  load()
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
document.getElementById('automation1button').addEventListener('click', function() {
  automation1 = !automation1
  automation1button.innerHTML = "Automation: " + String(automation1)
});
document.getElementById('automation2button').addEventListener('click', function() {
  automation2 = !automation2
  document.getElementById("automation2button").innerHTML = "Automation: " + String(automation2)
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
document.getElementById('WhyAchievement').addEventListener('mouseover', function() {
  document.getElementById("AchievementDisplay").innerHTML = "Why????? - Secret #1"
});

document.getElementById('MatterRank1').addEventListener('click', function() {
  buymatterrank(E("0"))
});

document.getElementById('MassResetButton').addEventListener('click', function() {
  if (getmatteronreset().gte(E("1"))) {
  player.matter = player.matter.add(getmatteronreset())
  doreset(1)
  }
});

document.getElementById('TributeResetButton').addEventListener('click', function() {
  if (gettributesonreset().gte(E("1"))) {
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

document.getElementById('CloseBannerButton').addEventListener('click', function() {
  document.getElementById('CloseBannerButton').style.display = "none"
  document.getElementById('Banner').style.display = "none"
});