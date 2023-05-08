var a;
function pass() {
  if (a == 1) {
    document.getElementById('password').type = 'password';
    document.getElementById('pass-icon').src = '/SignUp/Assets/pass-hide.png';
    a = 0;
  } else {
    document.getElementById('password').type = 'text';
    document.getElementById('pass-icon').src = '/SignUp/Assets/pass-show.png';
    a = 1;
  }
}

// call API signup
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.email.value;
  const password = form.password.value;
  const phone = String(form.phone.value);

  const data = { email, password, phoneNumber: phone };

  axios
    .post('https://api.travgo.my.id/auth/register', data)
    .then((data) => {
      localStorage.setItem('showSuccessSignupToast', true);
      window.location.href = '/login.html';
    })
    .catch((error) => {
      console.error(error);
      alert(error.response?.data?.message);
    });
});
