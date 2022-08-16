
const User_btn = document.getElementById('user_submit');

const user_email = document.getElementById('email');
const user_password = document.getElementById('password')

User_btn.addEventListener('click', () => {

  const email = user_email.value;
  const password = user_password.value;

  if (email === 'dulonmolla88@gmail.com' && password === 'dulonmolla88') {
    location.href = 'http://127.0.0.1:5500/bank.html'
  } else {
    alert('তুই আমার ছেলে না। 😡');
  }
})