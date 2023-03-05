const form = document.getElementById("orderForm");

form.addEventListener("submit", function (eve) {
  eve.preventDefault();
  const name = document.querySelector("#name").value;

  const adress = document.querySelector("#address").value;

  const breadType = document.querySelector("#breadType").value;

  const salad = document.querySelectorAll('input[type = "checkbox"]:checked');
  const Salads = [];
  salad.forEach((valor, indice) => {
    Salads[indice] = valor.value;
    console.log(valor.value);
  });

  const Salads_ = Salads.join(" , ");
  const main = document.querySelector('input[type = "radio"]:checked').value;

  const textarea = document.querySelector("textarea").value;

  console.log({
    name,
    adress,
    breadType,
    Salads_,
    main,
    textarea,
  });
});
