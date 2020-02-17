$(document).ready(function () {

  document.getElementById("test").addEventListener("input", function () {
    console.log("input event fired");

    $('#test').children().each(function () {
      console.log("function two called");
      
      var text = "fuck";
      var re = new RegExp(text, 'gi');
      // if no text input clear out previous .highlight spans
      if (!text) {
        console.log("!text called");
        $(this).html($(this).text());
        return;
      }

      // if match for regex insert .highlight class
      $(this).html($(this).text().replace(re, function (match) {
        return '<span class="highlight">' + match + '</span>';
      }));

      console.log("exiting fucntion");
    });
  }, false);

  $('#keyWord').on('input', function (e) {
    console.log('highlighting fired');
    var text = $(this).val();
    // escaping string for use in regex

    //TODO: there is something wrong with the replace method argument syntaxing
    //text = text.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

    var re = new RegExp(text, 'gi');

    $('#test').children().each(function () {
      // if no text input clear out previous .highlight spans
      if (!text) {
        $(this).html($(this).text());
        return;
      }

      // if match for regex insert .highlight class
      $(this).html($(this).text().replace(re, function (match) {
        return '<span class="highlight">' + match + '</span>';
      }));
    });
  });




}, false);
