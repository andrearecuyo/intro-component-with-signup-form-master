// Get the form element
const form = document.getElementById("form");

// Event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission if validation fails

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

  // Validate each input field
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let errors = [];

  if (firstName.value.trim() === "") {
    errors.push("First Name cannot be empty");
    firstNameError.innerHTML = "First Name cannot be empty";
    firstName.focus();
  }

  if (lastName.value.trim() === "") {
    errors.push("Last Name cannot be empty");
    lastNameError.innerHTML = "Last Name cannot be empty";
    lastName.focus();
  }

  if (email.value.trim() === "") {
    errors.push("Email cannot be empty");
    emailError.innerHTML = "Email cannot be empty";
    email.focus();
  } else if (!email.includes('@')) {
    errors.push("Looks like this is not an email");
    emailError.innerHTML = "Looks like this is not an email";
    email.focus();
  }

  if (password.value.trim() === "") {
    errors.push("Password cannot be empty");
    passwordError.innerHTML = "Password cannot be empty";
    password.focus();
  }

  // Display error messages or submit the form
  if (errors.length > 0) {
    return;
  } else {
    // Display a success message to the user
    alert("Form submitted successfully!");
  }
})