document.getElementById("submit").addEventListener("click", function() {
  var your_name = document.getElementById("your_name").value;
  var greeting = document.getElementById("greeting");


  if(your_name == "cat") {
    greeting.innerHTML = "cat";
    greeting.innerHTML = "<img src='cat.jpg'>" + "<br>meow!";
  } else if(your_name == "dog") {
    greeting.innerHTML = "<img src='dog.jpg'>" + "<br>woof!";
  } else if (your_name == "horse") {
   greeting.innerHTML = "<img src='horse.png'>" + "<br>neigh!";
  } else if (your_name == "giraffe") {
   greeting.innerHTML = "<img src='giraffe.jpg'>";
  } else if (your_name == "fish") {
    greeting.innerHTML = "<img src='fish.png'>";
  } 
  else {
    greeting.innerHTML = "I dont understand...";
    greeting.style.color = "orange";
  }
});