function validateInput() {
  const inputEmail = document.getElementById('input-email');
  const enteredEmail = document.getElementById('entered-email');
  const inputEmailValue = inputEmail.value;
  const inputPassword = document.getElementById('input-password');
  const errorMessage = document.getElementById('error-message');
  const logoSmall = document.getElementById('logo-small');
  const lowerBlock = document.querySelector('.lower-block');
  const more = document.querySelector('.more');
  const noAccount = document.querySelector('.no-account');
  const cantAccess = document.querySelector('.cant-access');
  const buttonBack = document.querySelector('.back');
  const bodyElement = document.body;
  const footer = document.querySelector('footer');
  const forgotPass = document.querySelector('.forgot-pass');
  const signInButton = document.querySelector('.sign-in');
  const signInTitle = document.getElementById('sign-in-title');
  const signPassword = document.getElementById('enter-pass-title');
  const enterMessage = document.getElementById('enter-message');
  const nextButton = document.getElementById('next-button');

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
    signPassword.style.display = 'block';

    forgotPass.style.display = 'block';
    nextButton.style.display = 'none';
    bodyElement.style.backgroundImage = 'url(\'../public/assets/images/solbeg_logo.png\')';

    logoSmall.src = '../public/assets/images/solbeglogo_rect.png';
    lowerBlock.style.display = 'none';
    footer.style.color = 'white';
    more.style.color = 'white';
    noAccount.style.display = 'none';
    cantAccess.style.display = 'none';
    buttonBack.style.display = 'none';
    signInButton.style.display = 'block';

    enterMessage.textContent = inputEmailValue;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', () => {
    validateInput();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const signInButton = document.querySelector('.sign-in');
  signInButton.addEventListener('click', () => {
    const url = "https://20.123.210.222:8444/simple-servlet-app-1.0-SNAPSHOT/api/user/signup";

    const inputEmail = document.getElementById('input-email');
    const inputEmailValue = inputEmail.value;

    const inputPassword = document.getElementById('input-password');
    const inputPasswordValue = inputPassword.value;

    const data = {
      login: inputEmailValue,
      password: inputPasswordValue
    };

    fetch("https://20.123.210.222:8444/simple-servlet-app-1.0-SNAPSHOT/api/user/signup", {
      method: "POST",
      mode: "no-cors", // Режим без CORS
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        login: inputEmailValue,
        password: inputPasswordValue
      })
    })
      .then(() => {
        console.log("Запрос отправлен, но ответ недоступен из-за режима no-cors");
      })
      .catch(error => {
        console.error("Ошибка:", error);
      });

  });
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = [
    document.getElementById('next-button'),
    document.getElementById('input-email'),
    document.getElementById('sign-in-title'),
    document.querySelector('.no-account'),
    document.querySelector('.cant-access')
  ];

  elements.forEach(el => {
    if (el) {
      el.classList.add('animate-slide-in');
    }
  });
});
