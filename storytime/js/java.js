$('div').on('inview', function(event, isInView) {
  if (isInView) {
    // element is now visible in the viewport
  } else {
    // element has gone out of viewport
  }
});

$('div').off('inview');