const captchaText = document.getElementById('captcha-text');
const userCaptcha = document.getElementById('user-captcha');
const refreshCaptcha = document.getElementById('refresh-captcha');
const errorMessage = document.getElementById('error-message');
const loginForm = document.getElementById('login-form');

function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 5; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  captchaText.innerText = captcha;
}

generateCaptcha();

refreshCaptcha.addEventListener('click', () => {
  generateCaptcha();
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredCaptcha = userCaptcha.value.toLowerCase();
  const realCaptcha = captchaText.innerText.toLowerCase();
  if (enteredCaptcha === realCaptcha)
