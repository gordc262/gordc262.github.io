	var amplitude = 40;
	var periode = Math.PI / 400;
	var evenwicht = 300;

	$(document).ready(function(e) {

	  $(".block").css({
	    "top": evenwicht
	  });

	  var beweegRuimteX = 100;
	  var beweegRuimteY = 80;

	  $(window).mousemove(function(evt) {

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

	$( "#project1" ).hover(
	  function() {
	  	$('#image1').addClass('animated fadeInUp');
	  }, function() {
	  	$('#image1').removeClass('animated fadeInUp');
	  	$('#image1').addClass('animated fadeOutDown');
	  	setTimeout(function(){$('#image1').removeClass('animated fadeOutDown')}, 200);
	  }
	);


 
	$( "#project2" ).hover(
	  function() {
	  	$('#image2').addClass('animated fadeInUp');
	  }, function() {
	  	$('#image2').removeClass('animated fadeInUp');
	  }
	);


	$( "#project3" ).hover(
	  function() {
	  	$('#image3').addClass('animated fadeInUp');
	  }, function() {
	  	$('#image3').removeClass('animated fadeInUp');
	  }
	);


	$( "#project4" ).hover(
	  function() {
	  	$('#image4').addClass('animated fadeInUp');
	  }, function() {
	  	$('#image4').removeClass('animated fadeInUp');
	  }
	);


	$( "#project5" ).hover(
	  function() {
	  	$('#image5').addClass('animated fadeInUp');
	  }, function() {
	  	$('#image5').removeClass('animated fadeInUp');
	  }
	);


	$( "#project6" ).hover(
	  function() {
	  	$('#image6').addClass('animated fadeInUp');
	  }, function() {
	  	$('#image6').removeClass('animated fadeInUp');
	  }
	);
	});

$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});