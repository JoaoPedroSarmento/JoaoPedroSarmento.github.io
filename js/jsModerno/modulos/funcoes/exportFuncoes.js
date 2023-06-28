// export inline

export function exportInline() {
  console.log("Export inline");
}

// export non-inline
function exportNonInline() {
  console.log("Export non-inline");
}
export { exportNonInline };

// export default inline (padrão só pode ter apenas uma função default no arquivo)

// export default function defaultInline() {
//   console.log("default inline");
// }

// export default non-inline

function defaultInline() {
  console.log("default inline");
}

export default defaultInline; // pode ser com ou sem parênteses
