var items = [];

$("#submit").on("click", function() {

  var list_item = {
    artist: $("#artist").val(),
    album: $('#album').val(),
    year: $("#year").val()
  }

  items.push(list_item);

  var output = $("#output");
  var temp = "";
  for(var i = 0; i < items.length; i++){
    temp = temp + "<p> Artist: " + items[i].artist + "</p><p>Album: " + items[i].album + "</p><p>Year: " + items[i].year + "<br><br></p>"
  }

  output.html(temp);

});