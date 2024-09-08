let t = 1;

function animmain() {
  
  var list = document.getElementsByClassName("small-image-container");
  
  for (var i = 0; i < list.length; i++) {
    
    var object = list[i]
    
    object.addEventListener("mouseenter", function() {
      
      
      
    });
    
  }
  
}

document.addEventListener("DOMContentLoaded", function() {
  setInterval(animmain, 16);
});