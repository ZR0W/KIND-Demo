function clearContents(element) {
  element.value = '';
}

$(document).ready(function() {
  var key = ['fuck', 'damn', 'ass'];

  var modal = document.getElementById("myModal");
  // When the user clicks the button, open the modal 
  function btClick() {
    var hasKey = false;
    for(var i = 0; i < key.length; i++){
      if(document.getElementById("inputarea").value.includes(key[i])){
        console.log("key word found");
        hasKey = true;
      }
    }
    if(hasKey){
      modal.style.display = "block";
    }else{
      //TODO: assosiate function with message submission
      //submit text as normal
    }
  }
  // When the user clicks on <span> (x), close the modal
  function spanClick() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  function windowClick(event) {
    // if (event.target == modal) {
    //   modal.style.display = "none";
    // }
  }

  $("#clickMe").click(btClick);
  $(".close").click(spanClick);
  // document.getElementsByClassName("close")[0].onclick = spanClick;
  window.onclick = windowClick;

  $("#modalReturn").click(modalReturn);
  $("#modalContinue").click(modalContinue);

  function modalReturn() {
    console.log("modal return fired");
    //clear text box
    $("textarea").val('');
    //close out of modal
    modal.style.display = "none";
  }

  function modalContinue() {
    console.log("modal continue fired");
    
    var textValue = $("#inputarea").value;
    console.log(textValue);
    for(var i = 0; i < key.length; i++){
      if(document.getElementById("inputarea").value.includes(key[i])){
        //second alert
        changeModalText("REALLY? Are you sure about that?!");
        console.log("key word found");
      }
    }
  }

  function changeModalText(text){
    console.log(text);
    console.log("modal change fired");
    $("#myModal").find("modaltext").text(text);
    toggleSecond(true);
  }

  function toggleSecond(on){
    if(on){
      $("#secondModal").style.display = "block";
    }else{
      $("#secondModal").style.display = "none";
    }
  }

}, false);

// Highlight word when you click Highlight Button
function highlight(text) {
  var inputText = document.getElementById("inputText");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) { 
   innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}
