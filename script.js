const Decimal = window.Decimal;
var tick = 1;

function E(n) {
  
  return new Decimal().fromString(n)
  
}

var automation1button = document.getElementById("automation1button");
var automation2button = document.getElementById("automation2button");

var timespeed = E("1")

function fix(n,e) {
  
  return n.toFixed(2)
  
}

function fix2(n,e) {
  
  return n.toFixed(e)
  
}

function buyableeffects(n) {
  var temp = E("1")
  if (n==1) {
    temp = buyables.syphon.amount
    if (upgrades.incrementallist.bought == true) {temp = temp.mul(upgradeeffects(1))}
    if (upgrades.SacredTexts.bought == true) {
      if (player.labor != 7) {
        if (player.labor != 9) {
          if (player.labor != 12) {
            temp = temp.mul(buyables.syphon.manuals)
          }
        }
      }
    }
    temp = temp.mul(timespeed)
  }
  if (n==2) {
    temp = buyables.collector.amount
    if (upgrades.Gravity.bought == true) {temp = temp.mul(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")))}
    if (upgrades.SacredTexts.bought == true) {
      if (player.labor != 7) {
        if (player.labor != 9) {
          if (player.labor != 12) {
            temp = temp.mul(buyables.collector.manuals)
          }
        }
      }
    }
    temp = temp.mul(timespeed)
  }
  if (n==3) {
    temp = buyables.field.amount
    if (upgrades.MEM.bought == true) {temp = temp.pow(upgradeeffects(3))}
    if (upgrades.SacredTexts.bought == true) {
      if (player.labor != 7) {
        if (player.labor != 9) {
          if (player.labor != 12) {
            temp = temp.mul(buyables.field.manuals)
          }
        }
      }
    }
    temp = temp.mul(timespeed)
  }
  if (n==4) {
    temp = E("10").add(upgradeeffects(14)).add(upgradeeffects(15)).add(upgradeeffects(21))
    if (Labors.TL5 == true) {temp = temp.add(E("25"))}
    if (buyables.weight.amount.gte(E("31"))) {temp = temp.pow(E("30")).mul(E("3").pow(buyables.weight.amount.sub(E("30"))))} else {temp = temp.pow(buyables.weight.amount)}
    if (upgrades.scramboblingcromjombles.bought == true) {temp = temp.pow(upgradeeffects(19))}
    if (player.labor == 5) {temp = E("1")}
    if (player.labor == 7) {temp = E("1")}
    if (player.labor == 9) {temp = E("1")}
    if (Labors.TL7 == true) {temp = temp.pow(E("1.05"))}
    if (player.labor == 12) {temp = E("1")}
  }
  if (n==5) {
    temp = E("3").pow(buyables.catalyst.amount).sub(E("1")).div(E("1e10"))
  }
  
  
  
  return temp
}

function upgradeeffects(n) {
  var temp = E("1")
  if (n==1) {
    if (upgrades.incrementallist.bought==true) {temp = buyables.syphon.amount.add(E("10")).log10()}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==2) {
    if (upgrades.Gravity.bought==true) {temp = "It is done."} else {temp = "Currently no gravity... Maybe it's better this way."}
  }
  if (n==3) {
    if (upgrades.MEM.bought==true) {temp = E("2")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==4) {
    if (upgrades.feedbackloop.bought==true) {temp = E("1.1").pow(buyables.syphon.manuals.add(buyables.collector.manuals).add(buyables.field.manuals))}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==5) {
    if (upgrades.theunknown.bought==true) {temp = "Endless growth begins."} else {temp = "Gravity with no matter?"}
  }
  if (n==6) {
    if (upgrades.Infusion.bought==true) {temp = E("3").pow(player.matter.add(E("1")).log10().div(2).floor()).mul(E("3"))}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==7) {
    temp = E("0")
  }
  if (n==8) {
    if (upgrades.gravitoncatalyst.bought==true) {temp = player.matter.add(E("10")).log10().pow(E("0.75"))}
    if (temp.gte(E("10"))) {temp = E("10").add(temp.sub(E("9")).pow(E("0.2")).sub(E("1")))}
    if (player.labor == 7) {temp = E("1")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (Labors.TL9 == true) {temp = temp.mul(E("2"))}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==9) {
    temp = E("0")
  }
  if (n==10) {
    if (upgrades.discovery.bought==true) {temp = E("3")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==11) {
    temp = E("0")
  }
  if (n==12) {
    if (upgrades.spacetimerupture.bought==true) {temp = E("100")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==13) {
    if (upgrades.minmax.bought==true) {temp = E("1.05").pow(player.stardust.add(E("10")).log10())}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==14) {
    temp = E("0")
    if (upgrades.heavier.bought==true) {temp = E("2")}
    if (player.labor == 9) {temp = E("0")}
    if (player.labor == 10) {temp = E("1").sub(temp)}
    if (player.labor == 12) {temp = E("1").sub(temp)}
  }
  if (n==15) {
    temp = E("0")
    if (upgrades.crushing.bought==true) {temp = E("2")}
    if (player.labor == 9) {temp = E("0")}
    if (player.labor == 10) {temp = E("1").sub(temp)}
    if (player.labor == 12) {temp = E("1").sub(temp)}
  }
  if (n==16) {
    if (upgrades.replication.bought==true) {temp = E("0.3")}
    if (player.labor == 9) {temp = E("1")}
    if (player.labor == 10) {temp = E("1").div(temp)}
    if (player.labor == 12) {temp = E("1").div(temp)}
  }
  if (n==17) {
    if (upgrades.scaler1.bought==true) {temp = E("0.97").pow(player.beststardust.add(E("10")).log10())}
  }
  if (n==18) {
    if (upgrades.scaler2.bought==true) {temp = E("0.99").pow(player.beststardust.add(E("10")).log10())}
  }
  if (n==19) {
    if (upgrades.scramboblingcromjombles.bought==true) {temp = E("1.1")}
  }
  if (n==20) {
    if (upgrades.taxevasion.bought==true) {temp = E("1.13")}
  }
  if (n==21) {
    if (upgrades.realityshift.bought==true) {temp = E("10")} else {temp = E("0")}
  }
  if (n==22) {
    if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = E("2")}
  }
  if (n==23) {
    if (upgrades.tomfoolery.bought==true) {temp = E("1e80")}
  }
  
  
  
  return temp
}


function getbuyablecost(n,m) {
  var temp = E("1e99999")
  var modifier = E("0")
  if (m > 0) {
    modifier = m
  }
  
  if (n == 1) {
    var scaling = E("1")
    scaling = scaling.mul(upgradeeffects(17))
    scaling = scaling.mul(upgradeeffects(18))
    if (player.labor == 2) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 5) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 8) {scaling = scaling.mul(E("1e1000"))}
    if (player.labor == 12) {scaling = scaling.mul(E("1e1000"))}
    temp = E("1").mul(E("2").pow(buyables.syphon.manuals.add(modifier).mul(scaling)))
  }
  if (n == 2) {
    var scaling = E("1")
    scaling = scaling.mul(upgradeeffects(17))
    scaling = scaling.mul(upgradeeffects(18))
    if (player.labor == 2) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 5) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 8) {scaling = scaling.mul(E("1e1000"))}
    if (player.labor == 12) {scaling = scaling.mul(E("1e1000"))}
    temp = E("100").mul(E("3").pow(buyables.collector.manuals.add(modifier).mul(scaling)))
  }
  if (n == 3) {
    var scaling = E("1")
    scaling = scaling.mul(upgradeeffects(17))
    scaling = scaling.mul(upgradeeffects(18))
    if (player.labor == 2) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 5) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 8) {scaling = scaling.mul(E("1e1000"))}
    if (player.labor == 12) {scaling = scaling.mul(E("1e1000"))}
    temp = E("2000").mul(E("10").mul(upgradeeffects(16)).pow(buyables.field.manuals.add(modifier).mul(scaling)))
  }
  if (n == 4) {
    var scaling = E("1")
    if (player.labor == 2) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 5) {scaling = scaling.mul(E("1000"))}
    if (player.labor == 8) {scaling = scaling.mul(E("1e1000"))}
    if (player.labor == 12) {scaling = scaling.mul(E("1e1000"))}
    temp = E("10").pow(buyables.weight.manuals.add(modifier).mul(scaling))
  }
  if (n == 5) {
    var scaling = E("1")
    temp = E("100").add(E("100").mul(buyables.catalyst.manuals.add(modifier)).pow(buyables.catalyst.manuals.add(E("10")).log10()))
  }
  return temp
}

function getcindereffects() {
  cindereffects[1] = player.cinders.mul(E("1e10")).pow(E("0.005")).clampMin(E("1"))
  cindereffects[2] = player.cinders.sub(E("0.00001")).clampMin(E("0")).mul(E("1e5")).pow(E("0.0625"))
  cindereffects[3] = E("1")
  cindereffects[4] = E("1")
  cindereffects[5] = E("1")
  cindereffects[6] = E("1")
  cindereffects[7] = E("1")
  cindereffects[8] = E("1")
  
  document.getElementById("CinderEffect1Display").innerHTML = "Stardust gain ^" + String(fix2(cindereffects[1],5))
  document.getElementById("CinderEffect2Display").innerHTML = "Weight effect +" + String(fix2(cindereffects[2],5))
  document.getElementById("CinderEffect3Display").innerHTML = "TBD: " + String(fix2(cindereffects[3],5))
  document.getElementById("CinderEffect4Display").innerHTML = "TBD: " + String(fix2(cindereffects[4],5))
  document.getElementById("CinderEffect5Display").innerHTML = "TBD: " + String(fix2(cindereffects[5],5))
  document.getElementById("CinderEffect6Display").innerHTML = "TBD: " + String(fix2(cindereffects[6],5))
  document.getElementById("CinderEffect7Display").innerHTML = "TBD: " + String(fix2(cindereffects[7],5))
  document.getElementById("CinderEffect8Display").innerHTML = "TBD: " + String(fix2(cindereffects[8],5))
}

let cindereffects = [
  E("1"),
  E("1"),
  E("1"),
  E("1"),
  E("1"),
  E("1"),
  E("1"),
  E("1")
]

let achievements = [

]

function gettimespeed() {
  var temp = E("1")
  if (upgrades.discovery.bought == true) {temp = temp.mul(E("3"))}
  
  
  return temp
}

let buyables = {
    syphon: {amount: E("0"), manuals: E("0")},
    collector: {amount: E("0"), manuals: E("0")},
    field: {amount: E("0"), manuals: E("0")},
  
    weight: {amount: E("0"), manuals: E("0")},
  
  
  
    catalyst: {amount: E("0"), manuals: E("0")}

};
let upgrades = {
  incrementallist: {cost: E("25000"), costtype: "stardust", bought: false, display: "Syphons boost their own effect"},
  Gravity: {cost: E("200000"), costtype: "stardust", bought: false, display: "Unlock Gravity"},
  MEM: {cost: E("2e6"), costtype: "stardust", bought: false, display: "Squares the effect of fields, Currently: ^"},
  feedbackloop: {cost: E("5e7"), costtype: "stardust", bought: false, display: "Stardust gain x1.1 for each manual buyable level, Currently: x"},
  theunknown: {cost: E("5e8"), costtype: "stardust", bought: false, display: "Unlock Mass"},
  
  spacetimerupture: {cost: E("5e68"), costtype: "stardust", bought: false, display: "100x Stardust gain, Currently: x"},
  minmax: {cost: E("2e71"), costtype: "stardust", bought: false, display: "+5% Stardust gain for each OoM of Stardust, Currently: x"},
  heavier: {cost: E("1e73"), costtype: "stardust", bought: false, display: "+2 to the unsoftcapped weight effect, Currently: +"},
  crushing: {cost: E("1e76"), costtype: "stardust", bought: false, display: "ANOTHER +2 to the unsoftcapped weight effect, Currently: +"},
  replication: {cost: E("2e78"), costtype: "stardust", bought: false, display: "Field cost scales 70% slower, Currently: x"},
  
  Infusion: {cost: E("3"), costtype: "matter", bought: false, display: "Stardust gain x3, then another x3 for every other OoM of matter, Currently: x"},
  SacredTexts: {cost: E("10"), costtype: "matter", bought: false, display: "Manual levels of all stardust buyables multiply the effect of their buyable, Dynamic."},
  gravitoncatalyst: {cost: E("10000"), costtype: "matter", bought: false, display: "Gravitational wave gain is EXPONENTIATED based on matter with a generous formula (As well as particles A-C which also have their effects boosted significantly), Currently: ^"},
  discovery: {cost: E("1e30"), costtype: "matter", bought: false, display: "Triples the speed of time"},
  dlc: {cost: E("1e31"), costtype: "matter", bought: false, display: "Unlocks more stardust upgrades"},
  
  scramboblingcromjombles: {cost: E("1"), costtype: "tributes", bought: false, display: "Weight effect ^1.1, Buy Scaler 1 first."},
  taxevasion: {cost: E("3"), costtype: "tributes", bought: false, display: "Stardust gain ^1.13."},
  realityshift: {cost: E("8"), costtype: "tributes", bought: false, display: "Unsoftcapped weight effect +10!!!"},
  
  automatons: {cost: E("100000000000000"), costtype: "matter", bought: false, display: "Automates stardust buyables"},
  scaler1: {cost: E("1"), costtype: "tributes", bought: false, display: "Stardust buyable cost scaling reduced based on best stardust."},
  mechanized: {cost: E("21"), costtype: "tributes", bought: false, display: "Automates matter buyables."},
  scaler2: {cost: E("25"), costtype: "tributes", bought: false, display: "Stardust buyable cost scaling reduced based on best stardust again."},
  sloth: {cost: E("50"), costtype: "tributes", bought: false, display: "Automate matter upgrades."},
  gazeehlingjoombahmbalaeze: {cost: E("250"), costtype: "tributes", bought: false, display: "Particle effects ^2."},
  tomfoolery: {cost: E("500"), costtype: "tributes", bought: false, display: "Flat +1e80 increase to stardust gain outside of Labors."},
};


function loadfunctions() {
  
  //if (isNaN(upgrades.automatons)) {upgrades.automatons = {cost: E("100000000000000"), costtype: "matter", bought: false, display: "Automates stardust buyables"}}
  
  if (isNaN(upgrades.theunknown.cost)) {upgrades.theunknown.cost = E("5e8")}
  if (isNaN(upgrades.theunknown.bought)) {upgrades.theunknown.bought = false}
  if (isNaN(unlockedsubtabs.MassMain)) {unlockedsubtabs.MassMain = generalunlocks.theunknown}
  if (isNaN(buyables.weight.amount)) {buyables.weight.amount = E("0")}
  if (isNaN(buyables.weight.manuals)) {buyables.weight.manuals = E("0")}
  if (isNaN(buyables.catalyst.amount)) {buyables.catalyst.amount = E("0")}
  if (isNaN(buyables.catalyst.manuals)) {buyables.catalyst.manuals = E("0")}
  if (isNaN(buyables.field.amount)) {buyables.field.amount = E("0")}
  if (isNaN(buyables.field.manuals)) {buyables.field.manuals = E("0")}
  if (isNaN(upgrades.Infusion.bought)) {upgrades.Infusion.bought = false}
  if (isNaN(upgrades.SacredTexts.bought)) {upgrades.SacredTexts.bought = false}
  if (isNaN(upgrades.gravitoncatalyst.bought)) {upgrades.gravitoncatalyst.bought = false}
  if (isNaN(upgrades.automatons.bought)) {upgrades.automatons.bought = false}
  if (isNaN(player.playtime)) {player.playtime = 0}
  if (isNaN(upgrades.discovery.bought)) {upgrades.discovery.bought = false}
  if (isNaN(upgrades.dlc.bought)) {upgrades.dlc.bought = false}
  if (isNaN(upgrades.spacetimerupture.bought)) {upgrades.spacetimerupture.bought = false}
  if (isNaN(upgrades.minmax.bought)) {upgrades.minmax.bought = false}
  if (isNaN(upgrades.heavier.bought)) {upgrades.heavier.bought = false}
  if (isNaN(upgrades.crushing.bought)) {upgrades.crushing.bought = false}
  if (isNaN(upgrades.replication.bought)) {upgrades.replication.bought = false}
  if (isNaN(unlockedsubtabs.TributeMain)) {unlockedsubtabs.TributeMain = generalunlocks.tribute}
  if (isNaN(player.tributes)) {player.tributes = E("0")}
  if (isNaN(player.flares)) {player.flares = E("0")}
  if (isNaN(player.bestflares)) {player.bestflares = E("0")}
  if (isNaN(player.besttributesthisflare)) {player.besttributesthisflare = E("0")}
  if (isNaN(upgrades.scramboblingcromjombles.bought)) {upgrades.scramboblingcromjombles.bought = false}
  if (isNaN(upgrades.scaler1.bought)) {upgrades.scaler1.bought = false}
  if (isNaN(upgrades.scaler2.bought)) {upgrades.scaler2.bought = false}
  if (isNaN(upgrades.taxevasion.bought)) {upgrades.taxevasion.bought = false}
  if (isNaN(upgrades.realityshift.bought)) {upgrades.realityshift.bought = false}
  if (isNaN(upgrades.mechanized.bought)) {upgrades.mechanized.bought = false}
  if (isNaN(upgrades.sloth.bought)) {upgrades.sloth.bought = false}
  if (isNaN(upgrades.gazeehlingjoombahmbalaeze.bought)) {upgrades.gazeehlingjoombahmbalaeze.bought = false}
  if (isNaN(upgrades.tomfoolery.bought)) {upgrades.tomfoolery.bought = false}
  if (isNaN(Labors.TL1)) {Labors.TL1 = false}
  if (isNaN(Labors.TL2)) {Labors.TL2 = false}
  if (isNaN(Labors.TL3)) {Labors.TL3 = false}
  if (isNaN(Labors.TL4)) {Labors.TL4 = false}
  if (isNaN(Labors.TL5)) {Labors.TL5 = false}
  if (isNaN(Labors.TL6)) {Labors.TL6 = false}
  if (isNaN(Labors.TL7)) {Labors.TL7 = false}
  if (isNaN(Labors.TL8)) {Labors.TL8 = false}
  if (isNaN(Labors.TL9)) {Labors.TL9 = false}
  if (isNaN(Labors.TL10)) {Labors.TL10 = false}
  if (isNaN(Labors.TL11)) {Labors.TL11 = false}
  if (isNaN(Labors.TL12)) {Labors.TL12 = false}
  if (isNaN(player.matterrank)) {player.matterrank = E("0")}
  if (isNaN(player.cinders)) {player.cinders = E("0")}
  //player.matterrank = E("0")
  //if (!Array.isArray(achievements)) {let achievements = []}
  
  
  
  
  
}

function Automation() {
  
  
    if (player.tributemilestone >= 8) {
      player.matter = player.matter.add(getmatteronreset().div(E("6000")))
    }
  
  
    function auto(a,b,c) {
    var a1 = buyables[String(a)].manuals
    if (a1.gte(E("1")) == true) {
      if (player[String(b)].gte(getbuyablecost(c,a1.div(E("1"))))) {
        player[String(b)] = player[String(b)].sub(getbuyablecost(c,a1.div(E("1"))))
        buyables[String(a)].amount = buyables[String(a)].amount.add(a1.div(E("1")))
        buyables[String(a)].manuals = buyables[String(a)].manuals.add(a1.div(E("1")))
      }
    var a1 = buyables[String(a)].manuals
      if (player[String(b)].gte(getbuyablecost(c,a1.div(E("10"))))) {
        player[String(b)] = player[String(b)].sub(getbuyablecost(c,a1.div(E("10"))))
        buyables[String(a)].amount = buyables[String(a)].amount.add(a1.div(E("10")))
        buyables[String(a)].manuals = buyables[String(a)].manuals.add(a1.div(E("10")))
      }
    var a1 = buyables[String(a)].manuals
      if (player[String(b)].gte(getbuyablecost(c,a1.div(E("100"))))) {
        player[String(b)] = player[String(b)].sub(getbuyablecost(c,a1.div(E("100"))))
        buyables[String(a)].amount = buyables[String(a)].amount.add(a1.div(E("100")))
        buyables[String(a)].manuals = buyables[String(a)].manuals.add(a1.div(E("100")))
      }
    var a1 = buyables[String(a)].manuals
      if (player[String(b)].gte(getbuyablecost(c))) {
        player[String(b)] = player[String(b)].sub(getbuyablecost(c))
        buyables[String(a)].amount = buyables[String(a)].amount.add(E("1"))
        buyables[String(a)].manuals = buyables[String(a)].manuals.add(E("1"))
      }
    }
    }
  
  if (upgrades.automatons.bought) {
    if (automation1 == true) {
      auto("syphon","stardust",1)
      auto("collector","stardust",2)
      auto("field","stardust",3)
    }
  }
    if (upgrades.mechanized.bought) {
      if (automation2 == true) {
        auto("weight","matter",4)
      }
    }
  
  if (player.tributemilestone >= 3) {
    buy("incrementallist") 
    buy("Gravity")  
    buy("MEM")
    buy("feedbackloop") 
    buy("theunknown")  
    buy("spacetimerupture") 
    buy("minmax")   
    buy("heavier") 
    buy("crushing") 
    buy("replication")   
  }
  if (upgrades.sloth.bought == true) {
    buy("Infusion")  
    buy("SacredTexts")  
    buy("gravitoncatalyst")  
    buy("discovery")  
    buy("dlc")  
  }
  
}



function doreset(tier) {
  
  if (tier >= 1) {
    
    buyables.syphon = {cost: E("1"), amount: E("0"), manuals: E("0")}
    buyables.collector = {cost: E("100"), amount: E("0"), manuals: E("0")}
    buyables.field = {cost: E("2000"), amount: E("0"), manuals: E("0")}

    upgrades.incrementallist.bought = false
    upgrades.Gravity.bought = false
    upgrades.MEM.bought = false
    upgrades.feedbackloop.bought = false
    upgrades.theunknown.bought = false
    upgrades.spacetimerupture.bought = false
    upgrades.minmax.bought = false
    upgrades.heavier.bought = false
    upgrades.crushing.bought = false
    upgrades.replication.bought = false
    
    player.stardust = E("1")
    player.gravitational_waves = E("0")
    player.a_particles = E("1")
    player.b_particles = E("1")
    player.c_particles = E("1")
    
  }
  
  if (tier >= 2) {
    
    buyables.weight = {cost: E("1"), amount: E("0"), manuals: E("0")}
    
    upgrades.Infusion.bought = false
    upgrades.SacredTexts.bought = false
    upgrades.gravitoncatalyst.bought = false
    upgrades.discovery.bought = false
    upgrades.dlc.bought = false
    
    player.matter = E("0")
    
  }
  
  if (tier >= 3) {
    
    player.tributes = E("0")
    player.tributemilestone = 0
    Labors.TL1 = false
    Labors.TL2 = false
    Labors.TL3 = false
    Labors.TL4 = false
    Labors.TL5 = false
    Labors.TL6 = false
    Labors.TL7 = false
    Labors.TL8 = false
    Labors.TL9 = false
    Labors.TL10= false
    Labors.TL11= false
    Labors.TL12= false
    upgrades.scaler1.bought = false
    upgrades.scramboblingcromjombles.bought = false
    upgrades.taxevasion.bought = false
    upgrades.realityshift.bought = false
    upgrades.scaler2.bought = false
    upgrades.sloth.bought = false
    upgrades.gazeehlingjoombahmbalaeze.bought = false
    upgrades.tomfoolery.bought = false
    player.matterrank = E("0")
    player.besttributesthisflare = E("0")
    
  }
  
  
  //retainments
  if (tier <= 2) {
    if (player.tributemilestone >= 1) {
      buyables.syphon.amount = E("1")
      buyables.syphon.manuals = E("1")
      buyables.collector.amount = E("1")
      buyables.collector.manuals = E("1")
      buyables.field.amount = E("1")
      buyables.field.manuals = E("1")
    }
    if (player.tributemilestone >= 2) {
      upgrades.incrementallist.bought = true
    }
    if (player.tributemilestone >= 4) {
      upgrades.SacredTexts.bought = true
    }
    if (player.tributemilestone >= 6) {
      upgrades.Gravity.bought = true
      upgrades.gravitoncatalyst.bought = true
    }
    if (player.tributemilestone >= 7) {
      buyables.weight.amount = E("1")
      buyables.weight.manuals = E("1")
    }
    
    if (player.labor == 5) {
      buyables.weight.amount = E("0")
      buyables.weight.manuals = E("0")
      upgrades.SacredTexts.bought = false
      upgrades.gravitoncatalyst.bought = false
    }
  }
  
  if (tier == 2) {
    if (player.labor > 0) {
      
      if (Labors["TL" + String(player.labor)] == true) {
        if (achievements.indexOf('Why') == -1) {
          achievements.push("Why");
        }
      }
      
      Labors["TL" + String(player.labor)] = true
      player.labor = 0
    }
  }
  
}


let generalunlocks = {
  stardust: true,
  
  
}





let unlockedsubtabs = {
  "Main": true,
  "MassMain": true,
  "TributeMain": true,
  
}
let player = {
  stardust: E("1"),
  gravitational_waves: E("0"),
  a_particles: E("1"),
  b_particles: E("1"),
  c_particles: E("1"),
  matter: E("0"),
  playtime: 0,
  tributes: E("0"),
  beststardust: E("0"),
  bestmatter: E("0"),
  besttributes: E("0"),
  tributemilestone: 0,
  flaremilestone: 0,
  labor: 0,
  matterrank: E("0"),
  flares: E("0"),
  bestflares: E("0"),
  besttributesthisflare: E("0"),
  cinders: E("0"),
};
let Labors = {
  TL1: false,
  TL2: false,
  TL3: false,
  TL4: false,
  TL5: false,
  TL6: false,
  TL7: false,
  TL8: false,
  TL9: false,
  TL10: false,
  TL11: false,
  TL12: false,
  FL1: false,
  FL2: false,
  FL3: false,
  FL4: false,
  FL5: false,
  FL6: false,
}

var x = new Decimal().fromString("1e100")
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
var GlobalResourceMultiplier = E("1")
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
var automation1 = true
var automation2 = true

function checkbest() {
  if (player.stardust.gte(player.beststardust)) {player.beststardust = player.stardust}
  if (player.matter.gte(player.bestmatter)) {player.bestmatter = player.matter}
  if (player.tributes.gte(player.besttributes)) {player.besttributes = player.tributes}
  if (player.tributes.gte(player.besttributesthisflare)) {player.besttributesthisflare = player.tributes}
  if (player.flares.gte(player.bestflares)) {player.bestflares = player.flares}
}

function particleeffects(a,b) {
  var temp = E("0")
  if (a==1) {
    
    if (b==1) {
      temp = player.a_particles.log10().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==2) {
      temp = player.a_particles.log10().pow(E("0.5")).add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==3) {
      temp = E("1")
    }
    
    
  }  
  if (a==2) {
    
    if (b==1) {
      temp = player.b_particles.log10().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==2) {
      temp = player.b_particles.log2().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==3) {
      temp = E("1")
    }
    
    
  }  
  if (a==3) {
    
    if (b==1) {
      temp = player.c_particles.log10().add(E("1"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==2) {
      temp = player.c_particles.log10().add(E("1")).pow(E("0.5")).pow(E("0.5")).pow(E("0.5")).pow(E("0.5"))
      if (upgrades.gravitoncatalyst.bought==true) {temp = temp.pow(upgradeeffects(8))}
      if (Labors.TL1 == true) {temp = temp.pow(E("2"))}
      if (upgrades.gazeehlingjoombahmbalaeze.bought==true) {temp = temp.pow(upgradeeffects(22))}
    }
    if (b==3) {
      temp = E("1")
    }
    
    
  }  
  
  
  
  
  
  return temp
}

function Debug() {
  
  document.getElementById("DEBUG").innerHTML = String(player.matterrank)
  
}

function vfx() {
  var sinresult63 = (Math.sin(tick/25)*63.75)+63.75
  var sinresult122 = (Math.sin(tick/25)*122)+122
  var sinresult12 = (Math.sin(tick/25)*5)+7.5
  
  var elements = document.querySelectorAll('.fire');
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.border = '2px solid rgb(255,' + String(sinresult63) + ',0)';
  elements[i].style.boxShadow = '0 0 10px 2px rgba(255,' + String(sinresult63) + ',0)'
  }
  
  var elements = document.querySelectorAll('.aqua');
  for (var i = 0; i < elements.length; i++) {
  elements[i].style.border = '2px solid rgb(0,' + String(sinresult122) + ',255)';
  elements[i].style.boxShadow = '0 0 ' + String(sinresult12) + 'px 2px rgba(0,' + String(sinresult122) + ',255)'
  }
  
}

function updateText() {
  var timespeed = gettimespeed()
  gainbuyables()
  gainstardust()
  gaingravitationalwaves()
  gainparticles()
  gaincinders()
  timedunlocks()
  Automation()
  //Debug()
  displayupgrades()
  checkbest()
  milestones()
  calibratelabors()
  renderrank()
  vfx()
  getcindereffects()
  tick = tick + 1
  
  
  StardustDisplay.innerHTML = "You have " + String(fix(player.stardust,2)) + " Stardust";
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
  
  MatterDisplay.innerHTML ="You have " + String(fix(player.matter,0)) + " Matter"
  WeightDisplay.innerHTML = "You have " + String(fix(buyables.weight.amount,0)) + " (" + String(fix(buyables.weight.manuals,0)) +") Weights, Multiplying stardust gain by " + String(fix(buyableeffects(4),0)) + "x";
  WeightButton.innerHTML = "Cost: " + String(fix(getbuyablecost(4),0)) + " Matter";
  
  TributeDisplay.innerHTML ="You have " + String(fix(player.tributes,0)) + " Tributes"
  
  FlareDisplay.innerHTML ="You have " + String(fix(player.flares,0)) + " Flares"
  
  CinderDisplay.innerHTML ="Cinders: " + String(fix2(player.cinders,10))
  CatalystDisplay.innerHTML = "You have " + String(fix(buyables.catalyst.amount,0)) + " (" + String(fix(buyables.catalyst.manuals,0)) +") Catalysts, Generating cinders: " + String(fix2(buyableeffects(5),10)) + "/s";
  CatalystButton.innerHTML = "Cost: " + String(fix(getbuyablecost(5),0)) + " Flares";
  
  if (Labors.TL12 == true) {endgametext.innerHTML = "You have reached the current endgame!"} else {endgametext.innerHTML = " "}
}

function getmatteronreset() {
  
  var gain = E("0")
  
  gain = player.stardust.div(E("1e9")).pow(E("0.5"))
  
  if (Labors.TL3 == true) {gain = gain.pow(E("1.35"))}
  if (player.labor == 3) {gain = gain.pow(E("0.25"))}
  if (player.labor == 4) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  if (player.labor == 7) {gain = E("0")}
  if (player.labor == 9) {gain = E("0")}
  if (player.labor == 12) {gain = E("0")}
  
  return gain.floor()
  
}

function gettributesonreset() {
  
  var gain = E("0")
  
  gain = player.stardust.div(E("1e80")).log10().div(E("80")).add(E("1")).floor()
  
  if (Labors.TL6 == true) {gain = gain.mul(E("5"))}
  
  return gain
  
}

function getflaresonreset() {
  
  var gain = E("0")
  
  gain = player.tributes.sub(E("400000"))
  if (gain.lte(E("99999"))) {return E("0")}
  gain = gain.log10().sub(E("4")).mul(E("1000")).floor()
  
  return gain
  
}

function playtimeupdate() {player.playtime = player.playtime + 1; renderachievements()}

setInterval(playtimeupdate, 1000);
function gainbuyables(){
  
  var temp = buyableeffects(3)
  temp = temp.div(E("60"))
  temp = temp.mul(timespeed)
  buyables.collector.amount = buyables.collector.amount.add(temp)
  var temp = buyableeffects(2)
  temp = temp.mul(timespeed)
  temp = temp.div(E("60"))
  buyables.syphon.amount = buyables.syphon.amount.add(temp)
  
  
}
function gaingravitationalwaves(){
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  
  if (player.b_particles.gte(E("1"))) {gain = gain.mul(particleeffects(2,2))}
  
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  
  if (Labors.TL1 == true) {gain = gain.pow(upgradeeffects(8))}
  
  if (player.tributemilestone >= 5) {gain = gain.pow(E("2"))}
  
  gain = gain.mul(timespeed)
  
  gain = gain.mul(GlobalResourceMultiplier)
  
  if (player.labor == 1) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  //if (player.labor == 8) {gain = E("0")}
  
  player.gravitational_waves = player.gravitational_waves.add(gain.div(E("60")))
  
}
function gaincinders(){
  var gain = E("0")
  
  gain = gain.add(buyableeffects(5))
  
  player.cinders = player.cinders.add(gain.div(E("60")))
}
function gainstardust(){
  var gain = E("0")
  
  var temp = buyables.syphon.amount
  if (upgrades.incrementallist.bought == true) {temp = temp.mul(upgradeeffects(1))}
  gain = gain.add(temp)
  
  if (player.a_particles.gte(E("1"))) {gain = gain.mul(particleeffects(1,2))}
  
  if (buyables.weight.amount.gte(E("1"))) {gain = gain.mul(buyableeffects(4))}
  
  if (upgradeeffects(6).gte(E("1"))) {gain = gain.mul(upgradeeffects(6))}
  
  if (upgrades.spacetimerupture.bought==true) {gain = gain.mul(upgradeeffects(12))}
  if (upgrades.minmax.bought==true) {gain = gain.mul(upgradeeffects(13))}
  
  if (player.tributemilestone >= 2) {gain = gain.mul(E("5"))}
  
  if (upgrades.taxevasion.bought==true) {
    gain = gain.pow(upgradeeffects(20))
    if (Labors.TL4 == true) {gain = gain.pow(upgradeeffects(20))}
  }
  
  if (Labors.TL2 == true) {gain = gain.pow(E("1.115"))}
  
  if (upgrades.tomfoolery.bought==true) { if (player.labor == 0) { gain = gain.add(upgradeeffects(23).mul(60)) }}
  if (player.tributemilestone >= 12) { if (player.labor == 0) { gain = gain.add(E("1e2000").mul(60)) }}
  if (player.tributemilestone >= 13) { if (player.labor == 0) { gain = gain.add(E("1e3000").mul(60)) }}
  if (player.matterrank.gte(E("1"))) {gain = gain.mul(getrankeffect())}
  
  if (player.labor == 4) { gain = gain.pow(E("0.9")) }
  if (player.labor == 5) { gain = gain.pow(E("0.5")) }
  if (player.labor == 6) { gain = gain.pow(E("0.195")) }
  if (player.labor == 7) { gain = gain.pow(E("0.755")) }
  if (player.labor == 9) { gain = gain.pow(E("0.755")) }
  if (player.labor == 10) { gain = gain.pow(E("0.19")) }
  if (player.labor == 11) { gain = gain.pow(E("0.09")) }
  
  gain = gain.mul(timespeed)
  
  gain = gain.mul(GlobalResourceMultiplier)
  
  var gain = gain.div(E("60"))
  player.stardust = player.stardust.add(gain)
}
function gainparticles(){
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.c_particles.gte(E("1"))) {gain = gain.mul(particleeffects(3,1))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  if (player.tributemilestone >= 5) {gain = gain.pow(E("2"))}
  if (player.labor == 4) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  if (player.labor == 8) {gain = gain.pow(E("0.03125"))}
  if (player.labor == 12) {gain = gain.pow(E("0.03125"))}
  gain = gain.mul(timespeed)
  if (player.labor == 1) {gain = E("0")}
  if (Labors.TL11 == true) {gain = gain.add(E("1e100"))}
  player.a_particles = player.a_particles.add(gain.div(E("60")))
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.a_particles.gte(E("1"))) {gain = gain.mul(particleeffects(1,1))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  if (player.tributemilestone >= 5) {gain = gain.pow(E("2"))}
  if (player.labor == 4) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  gain = gain.mul(timespeed)
  if (player.labor == 1) {gain = E("0")}
  if (Labors.TL11 == true) {gain = gain.add(E("1e100"))}
  player.b_particles = player.b_particles.add(gain.div(E("60")))
  
  var gain = E("0")
  if (upgrades.Gravity.bought == true) {gain = gain.add(1)}
  if (player.b_particles.gte(E("1"))) {gain = gain.mul(particleeffects(2,1))}
  if (upgrades.Gravity.bought == false) {gain = E("0")}
  if (upgrades.gravitoncatalyst.bought == true) {gain = gain.pow(upgradeeffects(8))}
  if (player.tributemilestone >= 5) {gain = gain.pow(E("2"))}
  if (player.labor == 4) {gain = E("0")}
  if (player.labor == 5) {gain = E("0")}
  if (player.labor == 8) {gain = gain.pow(E("0.0000001"))}
  if (player.labor == 12) {gain = gain.pow(E("0.0000001"))}
  gain = gain.mul(timespeed)
  if (player.labor == 1) {gain = E("0")}
  if (Labors.TL11 == true) {gain = gain.add(E("1e100"))}
  player.c_particles = player.c_particles.add(gain.div(E("60")))
  
}


document.getElementById('SyphonButton').addEventListener('click', function() {
  if (player.stardust.gte(getbuyablecost(1))) {
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
    UpgradeEffect.innerHTML = String(fix(upgradeeffects(5)));
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

function buy(n) {
  var c = upgrades[n].cost
  var ct = upgrades[n].costtype
  var b = upgrades[n].bought
  if (b == false) {
     if (player[ct].gte(c)) {
      
      if (player.labor == 9) {return}
      player[ct] = player[ct].sub(c)
      upgrades[n].bought = true
       
       if (n == "Gravity") { if (unlockedsubtabs["Gravity"]) {} else {unlockedsubtabs["Gravity"] = true} };
       if (n == "theunknown") {
         generalunlocks["theunknown"] = true; 
         document.getElementById("matterdisplaycontainer").style = "display: block;"
         document.getElementById("matterupgrades1").style = "display: block;"
       };
       if (n == "dlc") {
         generalunlocks["dlc"] = true; 
         document.getElementById("stardustupgrades2").style = "display: block;"
       };
       
    }
  }
}

function displayunlocksonload() {
  if (generalunlocks.theunknown == true) {
    document.getElementById("matterdisplaycontainer").style = "display: block;"
    document.getElementById("matterupgrades1").style = "display: block;"
  };
  if (generalunlocks.matterupgrades2 == true) {
    document.getElementById("matterupgrades2").style = "display: block;"
  };
  if (generalunlocks.dlc == true) {
    document.getElementById("stardustupgrades2").style = "display: block;"
  };
  if (generalunlocks.tribute == true) {
    unlockedsubtabs.TributeMain = true
    document.getElementById("tributedisplaycontainer").style = "display: block;"
    //document.getElementById("tributesubtab1").style = "display: block;"
  };
  if (generalunlocks.tributeupgrades1 == true) {
    document.getElementById("tributeupgrades1").style = "display: block;"
  };
  if (generalunlocks.flares == true) {
    document.getElementById("flaredisplaycontainer").style = "display: block;"
  };
  
  
  
  
}
function displayupgrades() {
  
  displayupgrade("Incrementallist","incrementallist")
  displayupgrade("Gravity","Gravity")
  displayupgrade("MEM","MEM")
  displayupgrade("Feedback","feedbackloop")
  displayupgrade("Unknown","theunknown")
  displayupgrade("Infusion","Infusion")
  displayupgrade("SacredTexts","SacredTexts")
  displayupgrade("GravitonCatalyst","gravitoncatalyst")
  displayupgrade("Automatons","automatons")
  displayupgrade("Discovery","discovery")
  displayupgrade("DLC","dlc")
  displayupgrade("Spacetime","spacetimerupture")
  displayupgrade("MinMax","minmax")
  displayupgrade("Heavier","heavier")
  displayupgrade("Crushing","crushing")
  displayupgrade("Replication","replication")
  displayupgrade("ScramboblingCromjombles","scramboblingcromjombles")
  displayupgrade("Scaler1","scaler1")
  displayupgrade("Scaler2","scaler2")
  displayupgrade("TaxEvasion","taxevasion")
  displayupgrade("RealityShift","realityshift")
  displayupgrade("Mechanized","mechanized")
  displayupgrade("Sloth","sloth")
  displayupgrade("GazeehlingJoombahmbalaeze","gazeehlingjoombahmbalaeze")
  displayupgrade("Tomfoolery","tomfoolery")
  
}

function milestones() {
  //group 1 below
  if (player.tributemilestone < 1) {if (player.besttributesthisflare.gte(E("1"))) {player.tributemilestone = 1}}
  if (player.tributemilestone < 2) {if (player.besttributesthisflare.gte(E("2"))) {player.tributemilestone = 2}}
  if (player.tributemilestone < 3) {if (player.besttributesthisflare.gte(E("4"))) {player.tributemilestone = 3}}
  if (player.tributemilestone < 4) {if (player.besttributesthisflare.gte(E("10"))) {player.tributemilestone = 4}}
  if (player.tributemilestone < 5) {if (player.besttributesthisflare.gte(E("15"))) {player.tributemilestone = 5}}
  if (player.tributemilestone < 6) {if (player.besttributesthisflare.gte(E("20"))) {player.tributemilestone = 6}}
  if (player.tributemilestone < 7) {if (player.besttributesthisflare.gte(E("75"))) {player.tributemilestone = 7}}
  if (player.tributemilestone < 8) {if (player.besttributesthisflare.gte(E("125"))) {player.tributemilestone = 8}}
  if (player.tributemilestone < 9) {if (player.besttributesthisflare.gte(E("2500"))) {player.tributemilestone = 9}}
  //group 2 below
  if (player.tributemilestone < 10) {if (player.besttributesthisflare.gte(E("5000"))) {player.tributemilestone = 10}}
  if (player.tributemilestone < 11) {if (player.besttributesthisflare.gte(E("15000"))) {player.tributemilestone = 11}}
  if (player.tributemilestone < 12) {if (player.besttributesthisflare.gte(E("25000"))) {player.tributemilestone = 12}}
  if (player.tributemilestone < 13) {if (player.besttributesthisflare.gte(E("75000"))) {player.tributemilestone = 13}}
  if (player.tributemilestone < 14) {if (player.besttributesthisflare.gte(E("150000"))) {player.tributemilestone = 14}}
  if (player.tributemilestone < 15) {if (player.besttributesthisflare.gte(E("300000"))) {player.tributemilestone = 15}}
  //group 1 classname stuff below
  if (player.tributemilestone >= 1) {document.getElementById("tributemilestone1").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone1").className = "milestone numberwhite"}
  if (player.tributemilestone >= 2) {document.getElementById("tributemilestone2").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone2").className = "milestone numberwhite"}
  if (player.tributemilestone >= 3) {document.getElementById("tributemilestone3").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone3").className = "milestone numberwhite"}
  if (player.tributemilestone >= 4) {document.getElementById("tributemilestone4").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone4").className = "milestone numberwhite"}
  if (player.tributemilestone >= 5) {document.getElementById("tributemilestone5").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone5").className = "milestone numberwhite"}
  if (player.tributemilestone >= 6) {document.getElementById("tributemilestone6").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone6").className = "milestone numberwhite"}
  if (player.tributemilestone >= 7) {document.getElementById("tributemilestone7").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone7").className = "milestone numberwhite"}
  if (player.tributemilestone >= 8) {document.getElementById("tributemilestone8").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone8").className = "milestone numberwhite"}
  if (player.tributemilestone >= 9) {document.getElementById("tributemilestone9").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone9").className = "milestone numberwhite"}
  //group 2 classname stuff below
  if (player.tributemilestone >= 10) {document.getElementById("tributemilestone10").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone10").className = "milestone numberwhite"}
  if (player.tributemilestone >= 11) {document.getElementById("tributemilestone11").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone11").className = "milestone numberwhite"}
  if (player.tributemilestone >= 12) {document.getElementById("tributemilestone12").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone12").className = "milestone numberwhite"}
  if (player.tributemilestone >= 13) {document.getElementById("tributemilestone13").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone13").className = "milestone numberwhite"}
  if (player.tributemilestone >= 14) {document.getElementById("tributemilestone14").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone14").className = "milestone numberwhite"}
  if (player.tributemilestone >= 15) {document.getElementById("tributemilestone15").className = "milestonebreached numberwhite"} else {document.getElementById("tributemilestone15").className = "milestone numberwhite"}
  
}

function displayupgrade(idname,upname) {
  if (upgrades[upname].bought == true) {
    document.getElementById(idname + "Button").style.boxShadow = "0 0 3px 2px rgba(0, 255, 0, 1)";
  } else {
    if (player[upgrades[upname].costtype].gte(upgrades[upname].cost)) {
      document.getElementById(idname + "Button").style.boxShadow = "0 0 3px 2px rgba(255, 255, 0, 1)";
    } else {
      document.getElementById(idname + "Button").style.boxShadow = "0 0 3px 2px rgba(255, 0, 0, 1)";
    }
  }
}


// Saving the main object with sub-objects
function save() {
  const dataToSave = {
    player: player,
    achievements: achievements,
    unlockedsubtabs: unlockedsubtabs,
    syphonamount: buyables.syphon.amount,
    syphonmanuals: buyables.syphon.manuals,
    collectoramount: buyables.collector.amount,
    collectormanuals: buyables.collector.manuals,
    fieldamount: buyables.field.amount,
    fieldmanuals: buyables.field.manuals,
    weightamount: buyables.weight.amount,
    weightmanuals: buyables.weight.manuals,
    buyables: buyables,
    upgrades: upgrades,
    incrementallist: upgrades.incrementallist.bought,
    Gravity: upgrades.Gravity.bought,
    MEM: upgrades.MEM.bought,
    feedbackloop: upgrades.feedbackloop.bought,
    theunknown: upgrades.theunknown.bought,
    Infusion: upgrades.Infusion.bought,
    SacredTexts: upgrades.SacredTexts.bought,
    gravitoncatalyst: upgrades.gravitoncatalyst.bought,
    automatons: upgrades.automatons.bought,
    discovery: upgrades.discovery.bought,
    dlc: upgrades.dlc.bought,
    spacetimerupture: upgrades.spacetimerupture.bought,
    minmax: upgrades.minmax.bought,
    heavier: upgrades.heavier.bought,
    crushing: upgrades.crushing.bought,
    replication: upgrades.replication.bought,
    scramboblingcromjombles: upgrades.scramboblingcromjombles.bought,
    scaler1: upgrades.scaler1.bought,
    scaler2: upgrades.scaler2.bought,
    taxevasion: upgrades.taxevasion.bought,
    realityshift: upgrades.realityshift.bought,
    mechanized: upgrades.mechanized.bought,
    sloth: upgrades.sloth.bought,
    gazeehlingjoombahmbalaeze: upgrades.gazeehlingjoombahmbalaeze.bought,
    tomfoolery: upgrades.tomfoolery.bought,
    generalunlocks: generalunlocks,
    beststardust: player.beststardust,
    bestmatter: player.bestmatter,
    besttributes: player.besttributes,
    besttributesthisflare: player.besttributesthisflare,
    labor: player.labor,
    cinders: player.cinders,
    matterrank: player.matterrank,
    tl1: Labors.TL1,
    tl2: Labors.TL2,
    tl3: Labors.TL3,
    tl4: Labors.TL4,
    tl5: Labors.TL5,
    tl6: Labors.TL6, 
    tl7: Labors.TL7,
    tl8: Labors.TL8,
    tl9: Labors.TL9,
    tl10: Labors.TL10,
    tl11: Labors.TL11,
    tl12: Labors.TL12,
    fl1: Labors.FL1,
    fl2: Labors.FL2,
    fl3: Labors.FL3,
    fl4: Labors.FL4,
    fl5: Labors.FL5,
    fl1: Labors.FL6,
    
  };
  localStorage.setItem('gameData', JSON.stringify(dataToSave));
}

// Loading the main object with sub-objects
function load() {
  const loadedData = JSON.parse(localStorage.getItem('gameData'));
  if (loadedData) {
    
    player.stardust = E(String(loadedData.player.stardust));
    player.gravitational_waves = E(String(loadedData.player.gravitational_waves));
    player.a_particles = E(String(loadedData.player.a_particles));
    player.b_particles = E(String(loadedData.player.b_particles));
    player.c_particles = E(String(loadedData.player.c_particles));
    player.matter = E(String(loadedData.player.matter));
    player.playtime = E(String(loadedData.player.playtime));
    player.tributes = E(String(loadedData.player.tributes));
    player.flares = E(String(loadedData.player.flares));
    player.beststardust = E(String(loadedData.player.beststardust));
    player.bestmatter = E(String(loadedData.player.bestmatter));
    player.besttributes = E(String(loadedData.player.besttributes));
    player.bestflares = E(String(loadedData.player.bestflares));
    player.labor = String(loadedData.player.labor);
    player.cinders = E(String(loadedData.player.cinders));
    player.matterrank = E(String(loadedData.player.matterrank));
    player.besttributesthisflare = E(String(loadedData.player.besttributesthisflare));
    
    if (!isNaN(loadedData.achievements)) {}
    achievements = loadedData.achievements
    
    unlockedsubtabs = loadedData.unlockedsubtabs;
    buyables.syphon.amount = E(String(loadedData.syphonamount))
    buyables.syphon.manuals = E(String(loadedData.syphonmanuals))
    buyables.collector.amount = E(String(loadedData.collectoramount))
    buyables.collector.manuals = E(String(loadedData.collectormanuals))
    buyables.field.amount = E(String(loadedData.fieldamount))
    buyables.field.manuals = E(String(loadedData.fieldmanuals))
    buyables.weight.amount = E(String(loadedData.weightamount))
    buyables.weight.manuals = E(String(loadedData.weightmanuals))
    buyables.catalyst.amount = E(String(loadedData.catalystamount))
    buyables.catalyst.manuals = E(String(loadedData.catalystmanuals))
    
    //upgrades = loadedData.upgrades
    
    upgrades.incrementallist.bought = loadedData.incrementallist,
    upgrades.Gravity.bought = loadedData.Gravity,
    upgrades.MEM.bought = loadedData.MEM,
    upgrades.feedbackloop.bought = loadedData.feedbackloop,
    upgrades.theunknown.bought = loadedData.theunknown,
    upgrades.Infusion.bought = loadedData.Infusion,
    upgrades.SacredTexts.bought = loadedData.SacredTexts,
    upgrades.gravitoncatalyst.bought = loadedData.gravitoncatalyst,
    upgrades.automatons.bought = loadedData.automatons,
    upgrades.discovery.bought = loadedData.discovery
    upgrades.dlc.bought = loadedData.dlc
    upgrades.spacetimerupture.bought = loadedData.spacetimerupture
    upgrades.minmax.bought = loadedData.minmax
    upgrades.heavier.bought = loadedData.heavier
    upgrades.crushing.bought = loadedData.crushing
    upgrades.replication.bought = loadedData.replication
    upgrades.scramboblingcromjombles.bought = loadedData.scramboblingcromjombles
    upgrades.scaler1.bought = loadedData.scaler1
    upgrades.scaler2.bought = loadedData.scaler2
    upgrades.taxevasion.bought = loadedData.taxevasion
    upgrades.realityshift.bought = loadedData.realityshift
    upgrades.mechanized.bought = loadedData.mechanized
    upgrades.sloth.bought = loadedData.sloth
    upgrades.gazeehlingjoombahmbalaeze.bought = loadedData.gazeehlingjoombahmbalaeze
    upgrades.tomfoolery.bought = loadedData.tomfoolery
    
    Labors.TL1 = loadedData.tl1
    Labors.TL2 = loadedData.tl2
    Labors.TL3 = loadedData.tl3
    Labors.TL4 = loadedData.tl4
    Labors.TL5 = loadedData.tl5
    Labors.TL6 = loadedData.tl6
    Labors.TL7 = loadedData.tl7
    Labors.TL8 = loadedData.tl8
    Labors.TL9 = loadedData.tl9
    Labors.TL10 = loadedData.tl10
    Labors.TL11 = loadedData.tl11
    Labors.TL12 = loadedData.tl12
    Labors.FL1 = loadedData.fl1
    Labors.FL2 = loadedData.fl2
    Labors.FL3 = loadedData.fl3
    Labors.FL4 = loadedData.fl4
    Labors.FL5 = loadedData.fl5
    Labors.FL6 = loadedData.fl6
    
    loadfunctions()
    
    generalunlocks = loadedData.generalunlocks
    
    
    
    displayunlocksonload()
  }
}

function getrankreq(modifier) {
  var temp = E("1e5")
  
  var scalingmult = E("1")
  
  if (Labors.TL10 == true) {scalingmult = scalingmult.mul(E("0.8"))}
  if (player.tributemilestone >= 11) {scalingmult = scalingmult.mul(E("0.7"))}
  if (player.tributemilestone >= 14) {scalingmult = scalingmult.mul(E("0.5"))}
  
  temp = temp.mul(E("1e100").pow(player.matterrank.add(modifier).mul(scalingmult)))
  
  if (player.matterrank.gte(E("100"))) {temp = temp.pow(player.matterrank.div(E("100").mul(scalingmult)))}
  if (player.matterrank.gte(E("1000"))) {temp = temp.pow(player.matterrank.div(E("1000").mul(scalingmult)))}
  if (player.matterrank.gte(E("1000000"))) {temp = temp.pow(player.matterrank.div(E("1000000").mul(scalingmult)))}
  
  return temp
}

function getrankeffect() {
  var temp = E("1")
  var modifier = E("1e2")
  
  temp = temp.mul(modifier.pow(player.matterrank))
  
  return temp
}

function renderrank() {
  if (generalunlocks["MatterRanks"] == true) {
    var mr = document.getElementById("MatterRank1")
    mr.innerHTML = "Matter Rank: <br>" + String(fix(player.matterrank)) + "<br> Cost in matter (+1): <br>" + String(fix(getrankreq(E("0")))) + "<br> Stardust effect: <br>x" + String(fix(getrankeffect()))
  }
}

function buymatterrank(modifier) {
  var cost = getrankreq(modifier)
  if (player.matter.gte(cost)) {
    player.matter = player.matter.sub(cost)
    player.matterrank = player.matterrank.add(E("1").add(modifier))
  }
}

function purge(x) {
  if (x==1) {
    player.stardust = E("1");
    player.gravitational_waves = E("0");
    player.a_particles = E("1");
    player.b_particles = E("1");
    player.c_particles = E("1");
  }
  if (x==2) {
    buyables.syphon = {cost: E("1"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.incrementallist.bought==true) {return buyables.syphon.amount.mul(upgradeeffects(1))} else {return buyables.syphon.amount}}}
    buyables.collector = {cost: E("100"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.Gravity.bought == false) {return buyables.collector.amount} else {return buyables.collector.amount.mul(player.gravitational_waves.add(E("1")).log10().pow(E("2")).add(E("1")))}}}
    buyables.field = {cost: E("2000"), amount: E("0"), manuals: E("0"), effect: function() {if (upgrades.MEM.bought == false) {return buyables.field.amount} else {return buyables.field.amount.pow(upgradeeffects(3))}}}
  }
  if (x==3) {
    upgrades.incrementallist.bought = false
    upgrades.Gravity.bought = false
    upgrades.MEM.bought = false
    upgrades.feedbackloop.bought = false
    upgrades.theunknown.bought = false
    upgrades.spacetimerupture.bought = false
    upgrades.minmax.bought = false
    upgrades.heavier.bought = false
    upgrades.crushing.bought = false
    upgrades.replication.bought = false
  }
  if (x==4) {
    doreset(1)
  }
  if (x==5) {
    player.matter = E("0");
  }
  if (x==6) {
    buyables.weight = {cost: E("1"), amount: E("0"), manuals: E("0"), effect: function() {return E("10").pow(buyables.weight.amount)}}
    player.matterrank = E("0")
  }
  if (x==7) {
    upgrades.Infusion.bought = false
    upgrades.SacredTexts.bought = false
    upgrades.GravitonCatalyst.bought = false
    upgrades.discovery.bought = false
    upgrades.dlc.bought = false
    upgrades.automatons.bought = false
  }
  if (x==8) {
    doreset(2)
  }
  if (x==9) {
    player.tributes = E("0")
  }
  if (x==10) {
    player.tributemilestone = 0
    Labors.TL1 = false
    Labors.TL2 = false
    Labors.TL3 = false
    Labors.TL4 = false
    Labors.TL5 = false
    Labors.TL6 = false
    Labors.TL7 = false
    Labors.TL8 = false
    Labors.TL9 = false
    Labors.TL10= false
    Labors.TL11= false
    Labors.TL12= false
  }
  if (x==11) {
    upgrades.scaler1.bought = false
    upgrades.scramboblingcromjombles.bought = false
    upgrades.taxevasion.bought = false
    upgrades.realityshift.bought = false
    upgrades.mechanized.bought = false
    upgrades.scaler2.bought = false
    upgrades.sloth.bought = false
    upgrades.gazeehlingjoombahmbalaeze.bought = false
    upgrades.tomfoolery.bought = false
  }
  if (x==12) {
    doreset(3)
  }
  
}

function renderachievements() {

  
  
for (let i = 0; i < achievements.length; i++) {
  document.getElementById(achievements[i] + "Achievement").className = "achievementclaimed";
}
  
  
  
  
  
  
}

function timedunlocks() {
  
  if (!generalunlocks.matterupgrades2 == true) {
    if (player.stardust.gte(E("1e35"))) {
      generalunlocks["matterupgrades2"] = true
      document.getElementById("matterupgrades2").style = "display: block;"
    }
  }
  if (generalunlocks.dlc !== true) {
    if (upgrades.dlc.bought == true) {
      generalunlocks["dlc"] = true
      document.getElementById("stardustupgrades2").style = "display: block;"
    }
  }
  if (player.stardust.gte(E("1e80"))) {
    generalunlocks["tribute"] = true
    unlockedsubtabs.TributeMain = true
    document.getElementById("tributedisplaycontainer").style = "display: block;"
    //document.getElementById("tributesubtab1").style = "display: block;"
  }
  if (player.besttributes.gte(E("1"))) {
    generalunlocks["tributeupgrades1"] = true
    document.getElementById("tributeupgrades1").style = "display: block;"
  }
  if (player.besttributes.gte(E("25"))) {
    generalunlocks["Labors1"] = true
    unlockedsubtabs.TributeLabors = true
    document.getElementById("tributesubtab2button").style = "display: block; position: absolute; top: 120px; left: 180px;  width: 90px; height: 24px;"
  }
  if (player.tributemilestone >= 9) {
    generalunlocks["LaborGroup2"] = true
    document.getElementById("LaborGroup2").style = "display: block; position: absolute; top: 120px; left: 180px;  width: 90px; height: 24px;"
  }
  if (Labors.TL8 == true) {
    generalunlocks["MatterRanks"] = true
    document.getElementById("MatterRank").style = "display: block"
  }
  if (Labors.TL12 == true) {
    generalunlocks["tributemilestonegroup2"] = true
    document.getElementById("tributemilestonegroup2").style = "display: block"
  }
  if (player.tributemilestone >= 15) {
    generalunlocks["flare"] = true
    unlockedsubtabs.FlareMain = true
    unlockedsubtabs.Cinders = true
    unlockedsubtabs.FlareMilestones = true
    unlockedsubtabs.FlareLabors = true
    document.getElementById("flaredisplaycontainer").style = "display: block;"
  }
  
  
  
  
  
  
  //achievements
  if (achievements.indexOf('BlackHole') == -1) {
    if (player.gravitational_waves.gte(E("1.8e308"))) {
      achievements.push("BlackHole");
    }
  }
  if (achievements.indexOf('TheNextStep') == -1) {
    if (player.besttributes.gte(E("1"))) {
      achievements.push("TheNextStep");
    }
  }
  if (achievements.indexOf('Overload') == -1) {
    if (buyables.syphon.manuals.gte(E("10000"))) {
      achievements.push("Overload");
    }
  }
  if (achievements.indexOf('Empowered') == -1) {
    if (buyables.syphon.manuals.gte(E("100000"))) {
      achievements.push("Empowered");
    }
  }
  if (achievements.indexOf('Boundless') == -1) {
    if (player.beststardust.gte(E("1.8e308"))) {
      achievements.push("Boundless");
    }
  }
  if (achievements.indexOf('Ranked') == -1) {
    if (player.matterrank.gte(E("1"))) {
      achievements.push("Ranked");
    }
  }
  if (achievements.indexOf('Past') == -1) {
    if (player.bestflares.gte(E("1"))) {
      achievements.push("Past");
    }
  }
  
  
}

function calibratelabors() {
      var temp = 0
      while (temp < 12) {
        temp += 1
        var temp2 = document.getElementById('Labor' + String(temp))
        if (player.labor == temp) {
          temp2.className = "laboryellow numberwhite"
        } else {
          if (Labors["TL" + String(temp)] == true) {
            temp2.className = "milestonebreached numberwhite"
          } else {
            temp2.className = "milestone numberwhite"
          }
        }
      }
}

function togglelabor(n) {
  
    if (player.labor == 0) {
      player.labor = 0
      doreset(2)
      player.labor = n
    } else {
      player.labor = 0
      doreset(2)
      player.labor = 0
    }
  
    calibratelabors()
  
}


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

document.onkeydown = function (e) {
   if (e.key == "t") {
    if (gettributesonreset().gte(E("1"))) {
    player.tributes = player.tributes.add(gettributesonreset())
    doreset(2)
    }
  }
   if (e.key == "m") {
    if (getmatteronreset().gte(E("1"))) {
    player.matter = player.matter.add(getmatteronreset())
    doreset(1)
    }
  }
   if (e.key == "f") {
    if (getflaresonreset().gte(E("1000"))) {
    player.flares = player.flares.add(getflaresonreset())
    doreset(3)
    }
  }
  if (e.key == "r") {
    player.tributemilestone = 0
    player.besttributesthisflare = E("0")
    milestones()
  }
};
updateText();
if (typeof localStorage.getItem('gameData') !== 'undefined') {load();}
setInterval(updateText, 16);