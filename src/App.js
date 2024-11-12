function validateInput() {
  const inputEmail = document.getElementById('input-email');
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
  const signInTitle = document.querySelector('.sign-in-title');
  const signPassword = document.querySelector('.password');

  if (!inputEmail.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value)) {
    errorMessage.style.display = 'block';
    inputEmail.style.borderBottomColor = 'red';
  } else
  {
    errorMessage.style.display = 'none';
    inputEmail.style.display = 'none';
    inputPassword.style.display = 'block'; 

    bodyElement.style.backgroundImage = 'url(\'../public/assets/images/solbeg_logo.png\')';

    let overlay = document.getElementById('overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.background = 'rgba(0, 0, 0, 0.5)';
      overlay.style.zIndex = '0';
      document.body.style.position = 'relative';
      document.body.prepend(overlay);
      document.body.insertBefore(overlay, document.getElementById('main'));
    }

    logoSmall.src = '../public/assets/images/solbeglogo_rect.png';
    lowerBlock.style.display = 'none';
    footer.style.color = 'white';
    more.style.color = 'white';
    noAccount.style.display = 'none';
    cantAccess.style.display = 'none';
    buttonBack.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', validateInput);
});
