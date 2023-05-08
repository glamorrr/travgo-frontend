function main() {
  const id = getParams('id');
  document.querySelector(
    '[data-js="gopay-payment-link"]'
  ).href = `/ticket-payment-gopay.html?id=${id}`;
}
main();

function getParams(param) {
  const params = new URL(document.location).searchParams;
  const value = params.get(param);
  return value;
}
