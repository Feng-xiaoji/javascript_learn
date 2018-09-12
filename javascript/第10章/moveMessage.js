function moveMessage(){
  if(!document.getElementById) return false;
  if(!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if(xpos == 200 && ypos == 200){
    return elem.style.color ="red";
  }
  if(xpos<200){
    xpos++
  }
  if(xpos>200){
    xpos--
  }
  if(ypos<200){
    ypos++
  }
  if(ypos>200){
    ypos--
  }
  elem.style.left = xpos+"px";
  elem.style.top = ypos+"px";
  // var timer = moveMessage();
  // movement = setTimeout(timer,1000);
  movement = setTimeout("moveMessage()",10);
}
