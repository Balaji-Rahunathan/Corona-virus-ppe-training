var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {  
    var resetdiv = document.getElementById("rightImage"+slideIndex);
    if(resetdiv){
        resetdiv.appendChild(document.getElementById("draggable"+slideIndex));
        target = document.getElementById("draggable"+slideIndex);
        target.style.top = 0
        target.style.left = 0
        target.style.right = 0
        target.style.bottom = 0
        target.style.opacity=1
    }
    showDivs(slideIndex += n);
    $("html, body").animate({ scrollTop: 0 },100);
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


$("#draggable"+slideIndex).draggable({
    stop: function (event, ui) {
        var target = document.getElementById("draggable"+slideIndex);
        target.style.top = 0
        target.style.left = 0
        target.style.right = 0
        target.style.bottom = 0
        target.style.opacity=1
    },
    drag: function (event, ui) {
        var target = document.getElementById("draggable"+slideIndex);
        target.style.opacity=0.5;
    }
});


$("#div"+slideIndex).droppable({
    drop: function (event, ui) {
        var target = document.getElementById("draggable"+slideIndex);
        event.target.appendChild(document.getElementById("draggable"+slideIndex));
        target.style.top = 0
        target.style.left = 0
        target.style.right = 0
        target.style.bottom = 0
        target.style.opacity=1
        document.getElementById("next"+slideIndex).style.display = "block";
    }
});

$("#rightImage"+slideIndex).droppable({
    drop: function (event, ui) {
        var target = document.getElementById("draggable"+slideIndex)
        event.target.appendChild(document.getElementById("draggable"+slideIndex))
        target.style.top = 0
        target.style.left = 0
        target.style.right = 0
        target.style.bottom = 0
        target.style.opacity=1
        document.getElementById("next"+slideIndex).style.display = "none";
    }
});

}

function reset() {
    if(document.getElementById("next"+slideIndex))
    {
        document.getElementById("next"+slideIndex).style.display = "none";
    }
}

