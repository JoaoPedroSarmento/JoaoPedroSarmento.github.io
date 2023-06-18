// const iconSeta = document.querySelectorAll(".container-drop-down  .icon-seta ");
// console.log(iconSeta);
// iconSeta.forEach((seta, indice) => {
//   seta.addEventListener("click", () => {
//     removeClasseActiveNaSeta(seta);
//     adicionaClasseActiveNaSeta(
//       iconSeta[indice].dataset.indexseta > iconSeta[indice + 1]
//         ? iconSeta[indice + 1]
//         : iconSeta[indice - 1]
//     );
//   });
// });

// function adicionaClasseActiveNaSeta(seta) {
//   if (!seta.classList.contains("active")) {
//     seta.classList.add("active");
//   }
// }

// function removeClasseActiveNaSeta(seta) {
//   console.log(seta);
//   if (seta.classList.contains("active")) {
//     seta.classList.remove("active");
//   }
// }

// function alternaClasseDoContentContainerDropDown(indice) {
//   const contentContainerDropDown = document.querySelectorAll(
//     ".content-container-drop-down"
//   );
//   console.log(contentContainerDropDown[indice]);
//   contentContainerDropDown[indice].classList.toggle("display-none");
// }
