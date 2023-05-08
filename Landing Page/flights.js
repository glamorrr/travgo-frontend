import commaNumber from './vendor/comma-number.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');

  searchForm.addEventListener('click', onFlightOptionChange);
  searchForm.addEventListener('submit', onSubmit);

  document.querySelector('.flight-option[value=oneWay]').click();
});

function onFlightOptionChange(e) {
  if (e.target.classList.contains('flight-option')) {
    const option = e.target.value;
    const returnDateInputEl = document.querySelector('.return');

    if (option === 'oneWay') {
      returnDateInputEl.classList.add('d-none');
    } else {
      returnDateInputEl.classList.remove('d-none');
    }
  }
}

async function onSubmit(e) {
  e.preventDefault();
  console.log('daw');
  const form = e.target;
  const searchValue = {
    fromPlace: form.fromPlace.value,
    toPlace: form.toPlace.value,
    flightClass: form.class.value,
    departureTime: form.depart.value,
  };

  if (
    !searchValue.fromPlace ||
    !searchValue.toPlace ||
    !searchValue.flightClass ||
    !searchValue.departureTime
  ) {
    return;
  }

  const spinnerEl = document.querySelector('.flight-spinner');
  const resultEl = document.querySelector('.flights-result');

  try {
    spinnerEl.classList.remove('d-none');
    resultEl.classList.add('d-none');

    const flights = await getFlights({ params: searchValue });

    showResults({ searchValue, flights });

    resultEl.classList.remove('d-none');
  } catch (err) {
    console.log(err);
    alert('gagal mengambil data flights');
  } finally {
    spinnerEl.classList.add('d-none');
  }
}

async function getFlights(options) {
  const res = await axios.get('http://localhost:3000/flights', options);
  return res.data;
}

function showResults({ searchValue, flights }) {
  document.querySelector('.total-result').textContent = flights.length;
  document.querySelector('.from-place').textContent = searchValue.fromPlace;
  document.querySelector('.from-place-small').textContent = searchValue.fromPlace;
  document.querySelector('.to-place').textContent = searchValue.toPlace;
  document.querySelector('.to-place-small').textContent = searchValue.toPlace;

  const flightsResultEl = document.querySelector('.flights');
  flightsResultEl.innerHTML = '';

  if (!flights.length) {
    flightsResultEl.innerHTML = `
      <div class="d-flex justify-content-center py-4 rounded mb-4 shadow-sm border">
        Maaf, tiket dengan jadwal penerbangan yang dicari tidak ditemukan
      </div>
    `;
  }

  flights.forEach((flight) => {
    const ticketEl = document.createElement('div');
    ticketEl.id = 'tiket';
    ticketEl.classList.add('container', 'mb-4');

    const departureTime = dayjs(flight.departureTime);
    const arrivalTime = dayjs(flight.arrivalTime);
    const travelTime = arrivalTime.diff(departureTime, 'minute');
    const travelTimeHour = Math.floor(travelTime / 60);
    const travelTimeMin = travelTime % 60;

    ticketEl.innerHTML = `
        <div class="row ms-2">
            <div class="col">
                <img
                  src="${flight.airline.image}" 
                  alt="${flight.airline.name}"
                  width="90"
                  height="40"
                />
            </div>
            <div class="col text-end">
                <h3>IDR ${commaNumber(flight.class.price, '.')}<span>/pax</span></h3>
            </div>
        </div>
        <div class="card-row mt-4 ms-3 d-flex">
            <div class="card-item">
                <h5>${departureTime.format('hh:mm A')}</h5>
                <span>${flight.fromCode}</span>
            </div>
                <div class="card-item mx-2">
                <img src="/Landing Page/Assets/airplane-takeoff.png" alt="" />
                <hr />
                <p>${travelTimeHour}h ${travelTimeMin}m</p>
            </div>
            <div class="card-item text-end">
                <h5>${arrivalTime.format('hh:mm A')}</h5>
                <span>${flight.toCode}</span>
            </div>
        </div>

        <div class="tiket-bottom d-flex mt-3 ms-2">
            <div class="opp1">
                <img class="mt-0" src="/Landing Page/Assets/cekijo.png" alt="" />
                <span>Reschedule available</span>
            </div>
            <div class="opp2">
                <img class="mt-0" src="/Landing Page/Assets/cekkuning.png" alt="" />
                <span>Extra Baggage</span>
            </div>
            <ul class="syarat d-flex">
                <li class="listTiket"><a href="">Flight Details</a></li>
                <li class="listTiket"><a href="">Price Details</a></li>
                <li class="listTiket"><a href="">Policy</a></li>
            </ul>
            <div class="btnTiket"><a href="/flights.html?id=${
              flight.id
            }"><button>Book</button><a/></div>
        </div>
    `;
    flightsResultEl.appendChild(ticketEl);
  });
}
