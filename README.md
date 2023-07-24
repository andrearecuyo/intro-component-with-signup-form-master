# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.  

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](https://lh3.googleusercontent.com/fife/AKsag4NV3h_O0AEBTbodsnFR0EdfUtMhTOEIiZ_qOchqG24rbhPAupP17tB-0ARCNGiHU6ycxRLeTxDSh0PEHbNlyL9GlQbTGJxJNP1zasdOscnU9X1yOfOjrmWMuwP9o4vHVk6pxp05YotjBBfYAU385n0dhj-le2b9ecry1xPy7s8_f_-hnc4HnUu1V06KLTsPaK3xdjOji_tvw1Fc2nztmohyMxwZB5_NfxjcWqWt1WQgHqZFx8APybbnkh5eh-fyJnxw2d8gOwSvxizb1TeiVAZZX7Hfc1jphIC0ENoZrdTHO9pe85j-LqABbfihYod2yj-osIVBsLEruQh3DQnRSgmwgONWQAEeoGftzeWkAGoNiMzBcDmq_4ptmcuJAFPuiI38qPk4GB7zkXIP6NG0RIYjfc6aU9CDbHDoUA2ynYRdy_GIWZu36DD462CQIZF5ruWgpdGUVx11xDNSXRXsFHllrhCECzMfBC_wXn6R3Y5il57KJPGD7eC0h7SnPzlvt8IKclW16llNoJwG7kVXH_SeD11LPQkjy9hoUId6iFc_NTG6-q5tq2T-3MKCFOqoEJsfB9ZF_i1smAHb7Jsi9C6vrmfS0cxFQYSLjMaM3u-5l3VD8_GhrKUKTlel4c7Zktnea9sUwL1FsjjTGMcpe0D1ccjVpLvEDvMlaPWuELlIDogmLeln-7RTTuqPdF1q4xUAwDjMNcB9BNZedWPF_4TjaiJCGJdqyxvhawJPh6hR8UIArOSNh3_OULLi68UgcJhRDUe1NwyBwiylVsglHV45JFImxGB7z2TU73ODCo38u84H5rde-IhQcC2zgfU4khJvgEXn6uZ-jmkuxBsXD-RWGAzJOoYUgNl1q9or2pTzVPDu2Ml0EYgCfH9aEL6KpC_P_ddMLSL4FR3h217PGxRi3HWBebWO79phBZtWPJm2NUx0TsD3LC1FRZm-PyaAvn5e8dN88EW7z-6nWp52t4Wsect-hzVM2yegjduOZ27P_0IHjapeKv1xg53m1IQqmERFJ6je0nxZk6TEMMP-gFO4uDI8t1aUqWcyOVqcMROMGh5F-Ah-mYJMpWlX1UGBQDewyEh7cXzhdcxldXfeBgJcdRnc0W0PmzNQKuyO5YrXtmolS8rE2utN6fuqQxGgALeeupPbaYMAIQb9950UH6zNJ02OTyh4Puc11z01i9LYoUkztWjtwjeXhGCaQ1p7BUcviDmVAL4Zg35XVKOfkVaptBMt6CyPtpGGT_SsiFg8koLnKFPKNc5e8KC9lMMcL1SoOn_N6gCUDuMPk2QDwcwx5-KOGmsWlZSlFM1XRINVwQigCy58p-j-iHFoCHOwGfQIX-EDGfijsgF-c9XQ1HFx4XQFdXR588oTMLf81nuu0LYAnwL0htoorHibac6bg1YrkX2psOqWKMJ_quCLShbC9SUTnUqxA2moXoz1WFstMIKqlXAt19kMVRxhfD2zymyCCCrh45YZ5wiY42V24XBTs-c7oRNDcEeAJ_UVqqtrvH3P3ZELNq2rZyNiZi_whKmY3ZppCKhgDzoUbTowvObTGRq0ulofHdFNewGGhuk1bbMMwcszkn-4MCmTf7gmgIgEn9S7P1aJBKODbdidtlo4wB1eP6j9b1J-krAfd0qElH0GUFbo1Qwd9qdbWlzE1J9EEaVNd6f_hriVx3CiXbAWZzfXbzWiJS550HKsZg0DClOMkq_icuiG5CqoC2KmbmK6miWX5TlkuZLDCP-Sa-vPWKyM=w1920-h929)

### Links

- Solution URL: [Source Code](https://github.com/andrearecuyo/intro-component-with-signup-form-master)
- Live Site URL: [Demo](https://andrearecuyo.github.io/intro-component-with-signup-form-master/)

## My process

### Built with

- HTML
- CSS
- JavaScript
- [LESS](https://lesscss.org/) - For styles

### What I learned
I learned how to implement form validation using JavaScript and HTML. The key points covered include:

- HTML Form Structure: I started with a basic HTML form structure that included various input fields for the user to provide information.

- CSS for Error Styling: I used CSS to define a class named .error to apply red borders around input fields in case of validation errors. You also defined styles for the placeholder text and an error icon.

- JavaScript Validation: I added JavaScript code to validate the form when it's submitted. The validation included checking for empty input fields and verifying the email format using regular expressions.

- Error Message Handling: The code displayed appropriate error messages when input fields were empty or had invalid email addresses. Error messages were shown using <p> elements with specific IDs for each error container.

- Error State Removal: I added event listeners for the input event on each input field to remove the error state and messages while the user was typing. This provided a more responsive and user-friendly validation experience.

- Form Submission: The form was prevented from being submitted when there were validation errors. If all validations passed, a success message was displayed to the user.

- Error Icon: An error icon was included for each input field, and it was shown when there was a validation error. The error icon was hidden when the user started typing inside the input fields.

Working with this challenge, I have learned how to create a basic form validation system using JavaScript, HTML, and CSS.
 
 ```javascript
// Event listener for input fields to remove error state
firstName.addEventListener("input", function() {
	removeErrorState(firstName);
});
fetchData();

// Function for removing state
function removeErrorState(input) {
	input.classList.remove("error");
	input.removeAttribute("style");

	const errorElement = document.getElementById(input.id + "Error");
	errorElement.innerHTML = "";

	const errorIcon = input.parentElement.querySelector('.error-icon');
	errorIcon.style.display = 'none';
}

// Sample validate on First Name input field
if (firstName.value.trim() === "") {
  errors.push("First Name cannot be empty");
  firstNameError.innerHTML = "First Name cannot be empty";
  firstName.classList.add('error');
  const errorIcon = firstName.parentElement.querySelector('.error-icon');
  errorIcon.style.display = 'inline';
  firstName.setAttribute('style', 'color: #ff7a7a;');
  firstName.focus();
}

```
### Useful resources

- [JavaScript Forms](https://www.w3schools.com/js/js_validation.asp) - This helped me understand form validation using JavaScript.
- [JavaScript HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) - This helped me understand how I can use addEventListener() method fo removing error state.
- [Validate Email Address With Regular Expression](https://gist.github.com/cgkio/7268045) - This helped me create the validation for email.


## Author

- Website - [Andrea Recuyo](https://andrearecuyo.github.io/andrearecuyoportfolio/)
- Frontend Mentor - [@andrearecuyo](https://www.frontendmentor.io/profile/andrearecuyo)

## Acknowledgments

Thank you to Frontend Mentor for providing frontend challenges.