	var amplitude = 40; // hoogte vd golf beweging
	var periode = Math.PI / 400; // lengte van 1 keer op en neer in rad
	var evenwicht = 300; //start hoogte 

	$(document).ready(function(e) {

	  //zet startHoogte meteen
	  $(".block").css({
	    "top": evenwicht
	  });

	  var beweegRuimteX = 100;
	  var beweegRuimteY = 80;

	  $(window).mousemove(function(evt) {

	    //muisPosities
	    //http://stackoverflow.com/questions/3234256/find-mouse-position-relative-to-element
	    var mX = evt.pageX - $('.eyes').offset().left - $('.eyes').width() / 2;
	    var mY = evt.pageY - $('.eyes').offset().top - $('.eyes').height() / 2;

	    var maxMuisX = $(window).width();
	    var maxMuisY = $(window).height();

	    var xF = mX / maxMuisX;
	    var yF = mY / maxMuisY;

	    $(".iris").css({
	      "left": beweegRuimteX * xF + $(".eye").width() / 2,
	      "top": beweegRuimteY * yF + $(".eye").height() / 2

	    });

	  });

	});