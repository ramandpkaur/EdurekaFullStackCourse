$(function() {
  $('#slider-1').owlCarousel({
    items: 5, //number of sliders to be shown on the page at once
    loop: true, //to show the sliders in a loop without an end
    center: true, //to center the first element on the screen
    mouseDrag: false, //to stop mouseDrag to move slides
    autoplay: true, //to set items slide show
    autoplayTimeout: 3000, //default autoplay time is 5 seconds 
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      }, 
      500: {
        items: 2,
      }, 
      800: {
        items: 3,
      }, 
      1000: {
        items: 5,
      }, 
    }
  });
});

