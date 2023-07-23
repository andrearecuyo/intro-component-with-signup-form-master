// Get the form element
const form = document.getElementById("form");

// Get the error message containers for each input
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission if validation fails
  validateInputs();
});

// Event listener for input fields to remove error state
firstName.addEventListener("input", function() {
  removeErrorState(firstName);
});

lastName.addEventListener("input", function() {
  removeErrorState(lastName);
});

email.addEventListener("input", function() {
  removeErrorState(email);
});

password.addEventListener("input", function() {
  removeErrorState(password);
});

function removeErrorState(input) {
  input.classList.remove("error");
  input.removeAttribute("style");

  const errorElement = document.getElementById(input.id + "Error");
  errorElement.innerHTML = "";

  const errorIcon = input.parentElement.querySelector('.error-icon');
  errorIcon.style.display = 'none';
}

function validateInputs() {
  // Get the error message containers for each input
  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Clear previous error messages
  firstNameError.innerHTML = "";
  lastNameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";

  // Clear previous error messages and remove 'error' class
  document.querySelectorAll('input').forEach(input => {
    input.classList.remove('error');
    input.removeAttribute('placeholder');
    const errorIcon = input.parentElement.querySelector('.error-icon');
    errorIcon.style.display = 'none';
  });

  // Validate each input field
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validate each input field
  let errors = [];

  if (firstName.value.trim() === "") {
    errors.push("First Name cannot be empty");
    firstNameError.innerHTML = "First Name cannot be empty";
    firstName.classList.add('error');
    const errorIcon = firstName.parentElement.querySelector('.error-icon');
    errorIcon.style.display = 'inline';
    firstName.setAttribute('style', 'color: #ff7a7a;');
    firstName.focus();
  }

  if (lastName.value.trim() === "") {
    errors.push("Last Name cannot be empty");
    lastNameError.innerHTML = "Last Name cannot be empty";
    lastName.classList.add('error');
    const errorIcon = lastName.parentElement.querySelector('.error-icon');
    errorIcon.style.display = 'inline';
    lastName.setAttribute('style', 'color: #ff7a7a;');
    lastName.focus();
  }

  if (email.value.trim() === "") {
    errors.push("Email cannot be empty");
    emailError.innerHTML = "Email cannot be empty";
    email.classList.add('error');
    const errorIcon = email.parentElement.querySelector('.error-icon');
    errorIcon.style.display = 'inline';
    email.setAttribute('style', 'color: #ff7a7a;');
    email.focus();
  }  else if (!emailRegex.test(email.value)) {
    errors.push("Looks like this is not an email");
    emailError.innerHTML = "Looks like this is not an email";
    email.classList.add('error');
    const errorIcon = email.parentElement.querySelector('.error-icon');
    errorIcon.style.display = 'inline';
    email.setAttribute('style', 'color: #ff7a7a;');
    email.focus();
  }
  

  if (password.value.trim() === "") {
    errors.push("Password cannot be empty");
    passwordError.innerHTML = "Password cannot be empty";
    password.classList.add('error');
    const errorIcon = password.parentElement.querySelector('.error-icon');
    errorIcon.style.display = 'inline';
    password.setAttribute('style', 'color: #ff7a7a;');
    password.focus();
  }

  // Display error messages or submit the form
  if (errors.length > 0) {
    return;
  } else {
    // Display a success message to the user
    alert("Form submitted successfully!");
  }
}