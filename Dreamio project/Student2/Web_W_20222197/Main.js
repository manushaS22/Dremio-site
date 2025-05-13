// Create a new Swiper instance for the element with the class "home"
var swiper = new Swiper(".home", {
// Set the space between slides to 30 pixels
   spaceBetween: 30,
// Center the currently active slide
   centeredSlides: true,
// Enable autoplay with a delay of 2500 milliseconds (2.5 seconds)
   autoplay: {
	 delay: 2500,
// Allow autoplay to continue even when the user interacts with the slider
     disableOnInteraction: false,
   },
// Configure pagination options
   pagination: {
// The element with the class "swiper-pagination" will be used as the pagination container
      el: ".swiper-pagination",
// Allow clicking on pagination bullets to navigate to the corresponding slide
      clickable: true,
   },
   
});