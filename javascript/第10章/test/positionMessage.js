function positionMessage(){
  if(!document.getElementById) return false;
  if(!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.color = "blue";
  elem.style.left = "100px";
  elem.style.top = "100px";
  moveElement("message",200,200,10);
  if(!document.getElementById("message2")) return false;
  var alem = document.getElementById("message2");
  alem.style.position = "absolute";
  alem.style.color = "#966966";
  alem.style.left = "300px";
  alem.style.top = "300px";
  moveElement("message2",200,200,10);
}

window.onload = positionMessage;