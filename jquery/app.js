$("#submit").on("click", function() {
  var your_name = $("#your_name").val();
  var greeting = $("#greeting");


  if(your_name == "cat") {
    greeting.html("<img src='cat.jpg'>" + "<br>meow!");
  } else if(your_name == "dog") {
    greeting.html("<img src='dog.jpg'>" + "<br>woof!");
  } else if (your_name == "horse") {
   greeting.html("<img src='horse.png'>" + "<br>neigh!");
  } else if (your_name == "giraffe") {
   greeting.html("<img src='giraffe.jpg'>");
  } else if (your_name == "fish") {
    greeting.html("<img src='fish.png'>");
  } 
  else {
    greeting.html("I dont understand...");
  }
});