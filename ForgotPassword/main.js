var a;
function pass() {
  if (a == 1) {
    document.getElementById("password").type = "password";
    document.getElementById("pass-icon").src = "/Assets/pass-hide.png";
    a = 0;
  } else {
    document.getElementById("password").type = "text";
    document.getElementById("pass-icon").src = "/Assets/pass-show.png";
    a = 1;
  }
}
