$('#draggable').draggable({
    stop: function (event, ui) {
        var target = document.getElementById("draggable")
        target.style.top = 0
        target.style.left = 0
        target.style.right = 0
        target.style.bottom = 0
    }
});

$("#div1").droppable({
    drop: function (event, ui) {
        var target = document.getElementById("draggable")
        event.target.appendChild(document.getElementById("draggable"))
        target.style.top = 0
        target.style.left = 0
        target.style.right = 0
        target.style.bottom = 0
        document.getElementById("next").style.display = "block";
    }
});

$("#rightImage").droppable({
    drop: function (event, ui) {
        console.log(event.target.id)
        var target = document.getElementById("draggable")
        event.target.appendChild(document.getElementById("draggable"))
        target.style.top = 0
        target.style.left = 0
        target.style.right = 0
        target.style.bottom = 0
        document.getElementById("next").style.display = "none";
    }
});
function reset() {
    document.getElementById("next").style.display = "none";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
reset()
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideContainer");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}