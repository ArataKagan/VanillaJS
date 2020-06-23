const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
  const formController = input.parentElement;
  formController.className = 'form-control error';
  const small = formController.querySelector('small');
  small.innerText = message;
}

// Show success
function showSuccess(input) {
  const formController = input.parentElement;
  formController.className = 'form-control success';
}

// Check email is valid

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, 'Please type correct email');
  }
}

// Check length

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${formatText(input.id)} has to be at least ${min}`);
  } else if (input.value.length > max) {
    showError(input, `${formatText(input.id)} has to be less than ${max}`);
  }
}

// Check passwords match

function checkPasswordMatch(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, 'Password do not match');
  } else {
    showSuccess(password1);
  }
}

// Format text

function formatText(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${formatText(input.id)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 15);
  isValidEmail(email);
  checkPasswordMatch(password, password2);
});
