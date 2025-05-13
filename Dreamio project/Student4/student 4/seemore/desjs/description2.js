// Image Slider
var indexValue = 0;

function slideShow() {
  // Set a timeout to run the slideShow function every 1500ms (1.5 seconds)
  setTimeout(slideShow, 1500);
  
  var x;
  const img = document.querySelectorAll("img");
  
  // Hide all the images in the slider
  for (x = 0; x < img.length; x++) {
    img[x].style.display = "none";
  }
  
  // Show the current image in the slider
  indexValue++;
  if (indexValue > img.length) {
    indexValue = 1;
  }
  img[indexValue - 1].style.display = "block";
}
slideShow();

// Video Popup
document.addEventListener('DOMContentLoaded', function () {
  // Get the required elements from the DOM
  const watchTrailerBtn = document.getElementById('watchTrailerBtn');
  const videoPopup = document.getElementById('videoPopup');
  const closeBtn = document.querySelector('.closeBtn');
  const videoIframe = document.querySelector('#videoPopup iframe');

  // Add a click event listener to the "Watch Trailer" button
  watchTrailerBtn.addEventListener('click', function (event) {
    // Prevent the default click behavior (avoid page reload or jump)
    event.preventDefault();
    
    // Set the video source to the YouTube trailer URL
    videoIframe.src = 'https://www.youtube.com/embed/5RkcDTKBTpw';
    
    // Display the video popup
    videoPopup.style.display = 'block';

    // Add a click event listener on the document to close the popup when clicking outside of the video
    document.addEventListener('click', outsideClickHandler);
  });

  // Add a click event listener to the close button of the video popup
  closeBtn.addEventListener('click', function () {
    // Reset the video source to avoid playing in the background
    videoIframe.src = '';
    // Hide the video popup
    videoPopup.style.display = 'none';
    // Remove the click event listener when the close button is clicked
    document.removeEventListener('click', outsideClickHandler);
  });

  // Function to handle clicks outside of the video popup
  function outsideClickHandler(event) {
    if (!videoPopup.contains(event.target) && event.target !== watchTrailerBtn) {
      // If the click is outside the video popup and not on the "Watch Trailer" button, close the popup
      videoIframe.src = '';
      videoPopup.style.display = 'none';
      // Remove the click event listener when the popup is closed
      document.removeEventListener('click', outsideClickHandler);
    }
  }
});

// Color Buttons
document.addEventListener('DOMContentLoaded', function () {
  // Get the required elements from the DOM
  const blackButton = document.querySelector('.blackButton');
  const redButton = document.querySelector('.redButton');
  const darkBlueButton = document.querySelector('.darkBlueButton');
  const randomButton = document.querySelector('.randomButton');
  const body = document.querySelector('body');

  // Add click event listeners to the color buttons
  blackButton.addEventListener('click', function () {
    // Change the background color to black when the black button is clicked
    body.style.backgroundColor = 'black';
  });

  redButton.addEventListener('click', function () {
    // Change the background color to red when the red button is clicked
    body.style.backgroundColor = 'red';
  });

  darkBlueButton.addEventListener('click', function () {
    // Change the background color to dark blue when the dark blue button is clicked
    body.style.backgroundColor = 'darkblue';
  });

  randomButton.addEventListener('click', function () {
    // Generate a random color and set it as the background color when the random button is clicked
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
  });

  // Function to generate a random color in hexadecimal format
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

// Font Size Controls
document.addEventListener('DOMContentLoaded', function () {
  // Get the required elements from the DOM
  const increaseFontBtn = document.getElementById('increaseFontBtn');
  const decreaseFontBtn = document.getElementById('decreaseFontBtn');

  // Set the initial font size (you can adjust this as per your preference)
  let fontSize = 16;

  // Add click event listeners to the font size buttons
  increaseFontBtn.addEventListener('click', function () {
    // Increase the font size by 2 pixels when the increase button is clicked
    fontSize += 2;
    setFontSize(fontSize);
  });

  decreaseFontBtn.addEventListener('click', function () {
    // Decrease the font size by 2 pixels (minimum size is 10 pixels) when the decrease button is clicked
    fontSize = Math.max(fontSize - 2, 10);
    setFontSize(fontSize);
  });

  // Function to update the font size for all text elements in the body
  function setFontSize(size) {
    const allTextElements = document.querySelectorAll('body *');
    allTextElements.forEach((element) => {
      element.style.fontSize = `${size}px`;
    });
  }
});
