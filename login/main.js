const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);

  fetch("api.travgo.my.id/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Login failed");
      }
      return response.json();
    })
    .then((data) => {
      // do something with the login response data
      console.log(data);
      window.location.href = "/Landing Page(flight)"; // redirect to home page
    })
    .catch((error) => {
      console.error(error);
    });
});

// navigation to forgotPW form
var signupBtn = document.getElementById("forgotPw");
signupBtn.addEventListener("click", function () {
  // Kode untuk menangani klik tombol FORGOTPW
});
var signupBtn = document.getElementById("forgotPw");
signupBtn.addEventListener("click", function () {
  window.location.href = "../ForgotPassword/index.html"; // Halaman forgotPW
});
