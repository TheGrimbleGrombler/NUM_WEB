const Decimal = window.Decimal;

function E(n) {
  
  return new Decimal().fromString(n)
  
}

window.UPGRADES = {
  9: {
    efficiencyI: {
      displayName: "Efficency - I",
      description: "Double Data gain",
      image: "",
      costType: "Data",
      costAmount: function() {
        var temp = E("1000")
        
        return temp;
      },
      effectPrefix: "Currently: Data x",
      effectSuffix: "!",
      bought: false,
      effect: function() {
        var temp = E("1")
        if (this.bought == true) {temp = E("2")}
        return temp;
      },
    }
  }
}

/* UPGRADE FORMAT

    UPGRADE NAME IN CODE: {
      displayName: "",
      description: "",
      image: "",
      costType: "",
      costAmount: function() {
        var temp = E("")
        
        return temp;
      },
      effectPrefix: "Currently: ___",
      effectSuffix: "",
      bought: false,
      effect: function() {
        var temp = E("1")
        if (this.bought == true) {temp = E("2")} //Example
        return temp;
      },
    }
  }


*/