document.addEventListener('DOMContentLoaded', showUserState);

async function showUserState() {
  try {
    const res = await axios.get('/user/profile');
    const name = res.data.user.email;
    document.querySelector('[data-js="nav-user-state"]').classList.remove('d-none');
    document.querySelector('[data-js="user-name-text"] a').textContent = `Hi, ${name}`;
    console.log(res);
  } catch (err) {
    document.querySelector('[data-js="nav-guest-state"]').classList.remove('d-none');
    console.log(err);
  }
}
