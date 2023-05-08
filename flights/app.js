import commaNumber from '../js/comma-number.js';
import 'https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js';

function main() {
  const id = getParams('id');
  displayFlightInfo(id);
  document.querySelector('[data-js="btn-submit"]').addEventListener('click', () => bookTicket(id));
}
main();

function getParams(param) {
  const params = new URL(document.location).searchParams;
  const id = params.get(param);
  return id;
}

async function displayFlightInfo(id) {
  try {
    const res = await axios.get(`/flights/${id}`);
    const flight = res.data;
    const departureTime = dayjs(flight.departureTime);

    document.querySelector('[data-js="flight-price"]').textContent =
      'IDR ' + commaNumber(flight.classes[0].price, '.');
    document.querySelector('[data-js="flight-from-place"]').textContent = flight.fromPlace;
    document.querySelector('[data-js="flight-to-place"]').textContent = flight.toPlace;
    document.querySelector('[data-js="flight-from-code"]').textContent = flight.fromCode;
    document.querySelector('[data-js="flight-to-code"]').textContent = flight.toCode;
    document.querySelector('[data-js="flight-departure-time"]').textContent =
      departureTime.format('D MMMM, YYYY - mm:HH');
    document.querySelector('[data-js="flight-airline-logo"]').src = flight.airline.image;
  } catch (err) {
    console.log(err);
  }
}

async function bookTicket(id) {
  const passengerName = document.querySelector('[data-js="passenger-name"]').value;

  try {
    const res = await axios.post(`/ticket/${id}`, { passengerName });
    const ticketId = res.data.id;

    window.location.href = '/pick-payment.html?id=' + ticketId;
  } catch (err) {
    console.log(err);
  }
}
