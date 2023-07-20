function validateForm() {
  // Get the value of the input field with id=""
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // If value is empty
  let firstNameErrorMessage;
  let lastNameErrorMessage;
  let emailErrorMessage;
  let passwordErrorMessage;

  const firstNameEmpty = firstName == "" || firstName == null;
  const lastNameEmpty = lastName == "" || lastName == null;
  const emailEmpty = email.includes('@');
  const passwordEmpty = password == "" || password == null;

  if (firstNameEmpty || lastNameEmpty || emailEmpty || passwordEmpty) {
    firstNameErrorMessage = "First Name cannot be empty";
    lastNameErrorMessage = "Last Name cannot be empty";
    emailErrorMessage = "Looks like this is not an email";
    passwordErrorMessage = "Password cannot be empty";
  } else {
    null
  }
  document.getElementById("firstNameError").innerHTML = firstNameErrorMessage;
  document.getElementById("lastNameError").innerHTML = lastNameErrorMessage;
  document.getElementById("emailError").innerHTML = emailErrorMessage;
  document.getElementById("passwordError").innerHTML = passwordErrorMessage;

}