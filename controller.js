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