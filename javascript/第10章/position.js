function positionMessage(){
  if(!document.getElementById) return false;
  if(!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.left = "100px";
  elem.style.top = "100px";
  elem.style.color = "#999999";
  // var timer = function(){
  //   if(!document.getElementById) return false;
  //   if(!document.getElementById("message")) return false;
  //   var elem = document.getElementById("message");
  //   elem.style.top = "300px";
  // }
  // movement = setTimeout(timer,1000);
  var timer = moveMessage();
  movement = setTimeout(timer,1000);
}

window.onload = positionMessage;