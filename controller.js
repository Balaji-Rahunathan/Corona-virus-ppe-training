var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
$("html, body").animate({ scrollTop: 0 },100);
// $("html, body").fadeIn()
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
    },
    drag: function (event, ui) {
        var target = document.getElementById("draggable"+slideIndex);
        // target.style.opacity=0.5;
        // console.log(target)
    }
});


$("#div"+slideIndex).droppable({
    drop: function (event, ui) {
        var target = document.getElementById("draggable"+slideIndex);
        console.log(target)
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
        console.log(event.target.id)
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
    document.getElementById("next"+slideIndex).style.display = "none";
}

