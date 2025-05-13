// Get the form
const form = document.querySelector("Feedback1.html");

// Get all the input elements
const radioInputsSatis = document.querySelectorAll(
  'input[name="satisfaction"]'
);
const radioInputs = document.querySelectorAll('input[name="links"]');
const textArea = document.getElementById("reasons");
const selectMenu = document.getElementById("task");

// Error message
const errorMessage = "Please fill out this field.";

// Checking if the submit button is clicked or not
form.addEventListener("submit", function (event) {
  // If there is any previous errors remove them
  const errorMessages = document.querySelectorAll("p");
  let errorMessagesStates = false;

  errorMessages.forEach(function (errorMessage) {
    errorMessage.remove();
  });

  // Check if any radio input element is selected in the satisfied field
  let isAnySelectedSatis = false;
  for (let i = 0; i < radioInputsSatis.length; i++) {
    if (radioInputsSatis[i].checked) {
      isAnySelectedSatis = true;
      break;
    }
  }
  // If no radio input element is selected, display an error message
  if (!isAnySelectedSatis) {
    const myDiv = document.getElementById("error1");
    const newP = document.createElement("p");
    const text = document.createTextNode(errorMessage);
    newP.appendChild(text);
    newP.style.fontSize = "18px";
    newP.style.fontWeight = "bold";
    newP.style.color = "blue";
    myDiv.appendChild(newP);
    errorMessagesStates = true;
  }

  

  // Checking the text area
  if (textArea.value.trim() === "") {
    const myDiv = document.getElementById("error3");
    const newP = document.createElement("p");
    const text = document.createTextNode(errorMessage);
    newP.appendChild(text);
    newP.style.fontSize = "18px";
    newP.style.fontWeight = "bold";
    newP.style.color = "red";
    myDiv.appendChild(newP);
    errorMessagesStates = true;
  }

  // Select menu
  if (selectMenu.value == "") {
    const myDiv = document.getElementById("error4");
    const newP = document.createElement("p");
    const text = document.createTextNode(errorMessage);
    newP.appendChild(text);
    newP.style.fontSize = "18px";
    newP.style.fontWeight = "bold";
    newP.style.color = "red";
    myDiv.appendChild(newP);
    errorMessagesStates = true;
  }

  // if there is no new error messages
  if (!errorMessagesStates) {
    form.submit();
    window.location.href = 'Thankyou.html';
  }

  // keeping the browser away from refreshing
  event.preventDefault();
});
