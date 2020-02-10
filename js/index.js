
function message(){
    alert("bad words!");
}
function clearContents(element) {
    element.value = '';
  }

document.getElementById("clickMe").onClick = "message()";
document.getElementById("deleteMe").onClick = clearContents