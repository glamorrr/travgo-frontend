import commaNumber from '../js/comma-number.js';

function main() {
  const id = getParams('id');
  displayPrice(id);

  document.querySelector('[data-js="pay-now-link"]').addEventListener('click', () => {
    alert('Pembayaran berhasil. Terima kasih.');
    window.location.href = '/';
  });
}
main();

function getParams(param) {
  const params = new URL(document.location).searchParams;
  const id = params.get(param);
  return id;
}

async function displayPrice(id) {
  try {
    const res = await axios.get(`/ticket/${id}`);
    const price = 'IDR ' + commaNumber(res.data.seat.class.price, '.');

    document.querySelector('[data-js="flight-price-1"]').textContent = price;
    document.querySelector('[data-js="flight-price-2"]').textContent = price;
  } catch (err) {
    console.log(err);
  }
}
