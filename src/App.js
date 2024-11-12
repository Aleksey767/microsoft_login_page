function validateInput() {
  const inputField = document.getElementById('input-field');
  const errorMessage = document.getElementById('error-message');

  if (!inputField.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputField.value)) {
    errorMessage.style.display = 'block';
    inputField.style.borderBottomColor = 'red';
  } else {
    errorMessage.style.display = 'none';
    inputField.style.borderBottomColor = '#0067b8';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', validateInput);
});
