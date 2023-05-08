document.querySelector('[data-js="logout-button"]').addEventListener('click', async () => {
  await axios.post('/auth/logout');
  window.location.href = '/';
});
