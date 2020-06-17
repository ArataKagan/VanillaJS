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
  return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e);

  if (username.value == '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if (email.value == '') {
    showError(email, 'email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'type valid email');
  } else {
    showSuccess(email);
  }

  if (password.value == '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  if (password2.value == '') {
    showError(password2, 'Password is required');
  } else {
    showSuccess(password2);
  }
});
