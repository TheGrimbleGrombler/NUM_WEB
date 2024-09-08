let t = 1;
import { ScrollX } from "./script.js"
import { ScrollY } from "./script.js"

function animmain() {
  t += 1;
  var list = document.getElementsByClassName("small-image-container");
  
  for (var i = 0; i < list.length; i++) {
    
    var object = list[i]
    
    object.addEventListener("mouseenter", function() {
      
      
    });
    
  }
  document.getElementById("tab2").style.backgroundPosition = String(ScrollX/10)+"px "+String(ScrollY/10)+"px"
  
  document.getElementById("subtab3").style.backgroundPosition = String(t/10)+"px "+String(t/10)+"px"
  
}

document.addEventListener("DOMContentLoaded", function() {
  setInterval(animmain, 16);
});