$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#vegetable").val();
    var re = /\s*,\s*/;
    var items = userInput.split(re).sort();

    var upperCaseAndSort = items.map(function(item) {
      return item.toUpperCase();
    });

    $(".output").empty();
    upperCaseAndSort.forEach(function(display) {
      $(".output").append("<li>" + display + "</li>");
    });

    $("form").hide();

  });

});
