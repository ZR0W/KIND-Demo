
function message(){
  alert("bad words!");
}
function clearContents(element) {
  element.value = '';
}



document.addEventListener('DOMContentLoaded', function()
 {
  
  document.getElementById("clickMe").onclick = message;
  document.getElementById("deleteMe").onclick = clearContents;
  var modal = document.getElementById("myModal");
  document.getElementById("clickMe").onclick = btClick;
  document.getElementsByClassName("close")[0].onclick = spanClick;
  window.onclick = windowClick;

  // When the user clicks the button, open the modal 
  function btClick() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  function spanClick() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  function windowClick(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}, false);
