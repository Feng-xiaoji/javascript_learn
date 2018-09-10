
function showPic(whichPic){
  var text = whichPic.getAttribute("title");
  var description = document.getElementById("description");
  var source =  whichPic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  // placeholder.src = source;
}