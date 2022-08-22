
const User_btn = document.getElementById('user_submit');

const user_email = document.getElementById('email');
const user_password = document.getElementById('password')

User_btn.addEventListener('click', () => {

  const email = user_email.value;
  const password = user_password.value;

  if (email === 'dulonmolla88@gmail.com' && password === '1234') {
      location.href = 'https://14hak.github.io/js_dom_basic_project/bank.html'
  } else {
    alert('তুই আমার ছেলে না। 😡');
  }
})
