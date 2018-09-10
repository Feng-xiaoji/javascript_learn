
function showPic(whichPic){
  if(!document.getElementById("placeholder")) return false;
  var source = whichPic.getAttribute("href");
  if(placeholder.nodeName != "IMG") return false;
  placeholder.setAttribute("src",source);
  if(document.getElementById("description")){
    var text = whichPic.getAttribute("title")?whichPic.getAttribute("title"):"";
    var description = document.getElementById("description");
    if(description.firstChild.nodeType == 3){
      description.firstChild.nodeValue = text
    }
  }
  return true;
}