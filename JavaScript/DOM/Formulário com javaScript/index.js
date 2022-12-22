const form = document.getElementById("orderForm");

form.addEventListener("submit", function (eve) {
  eve.preventDefault()
  const name = document.querySelector("#name").value;

  const adress = document.querySelector("#address").value;

  const breadType = document.querySelector("#breadType").value;

  const salad = document.querySelector(
    'input[type = "checkbox"]:checked'
  ).value;

  const main = document.querySelector('input[type = "radio"]:checked').value;

  const textarea = document.querySelector("textarea").value;

  console.log({
    name,
    adress,
    breadType,
    salad,
    main,
    textarea,
  });
});
