function moveElement(eleID,fx,fy,interval){
  if(!document.getElementById) return false;
  if(!document.getElementById(eleID)) return false;
  var elem = document.getElementById(eleID);

  if(elem.movement){
    clearTimeout(elem.movement);
  }

  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  var dist = 0;
  if(xpos == fx && ypos == fy){
    // return elem.style.color = "red";
    return true;
  }
  if(xpos<fx) {
    var dist = Math.ceil((fx-xpos)/10);
    xpos = xpos + dist
  }
  if(xpos>fx) {
    var dist = Math.ceil((xpos-fx)/10);
    xpos = xpos - dist;
  }

  // if(xpos != fx){
  //   var dist = Math.ceil((fx-xpos)/100);
  //   xpos = xpos + dist;
  // }

  if(ypos<fy) {ypos++;}
  if(ypos>fy) {ypos--;}
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat ="moveElement('" + eleID + "'," + fx + "," + fy + "," + interval +")";
  // moment = setTimeout(repeat,interval);
  elem.movement = setTimeout(repeat,interval);
}
