// Get the modal
var modal = document.getElementById("modal");

var popup = document.getElementById("background-popup")
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("delete")[0];

var cancel = document.getElementById("cancel");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// quand l'utlisateur clique sur le bonton annuler
cancel.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popup) {
    modal.style.display = "none";
  }
}