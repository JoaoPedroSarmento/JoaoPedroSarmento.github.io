function limparInput() {
    input.value = "";
    input.focus();
}
function realizaCalculo(string) {
    const inputResult = document.getElementById("result");
    inputResult.value = "Erro!";
    inputResult.value = eval(string);
}
function valorDoBotaoNoInput(ev) {
    const btnTexto = ev.currentTarget.textContent;
    input.value += btnTexto;
}
function isNumero(carac) {
    return !isNaN(+carac);
}
function validaEntradaDeDadosNoInput(ev) {
    const carac = ev.key;
    const caracteresPermitidos = ["(", ")", "+", "-", "*", ".", "/"];
    ev.preventDefault();
    if (isNumero(carac) || caracteresPermitidos.includes(carac)) {
        input.value += carac
    } else if (ev.key === "Enter") {
        const resultado = realizaCalculo(input.value);
        inputResult.value = resultado;
    }
}
export { validaEntradaDeDadosNoInput, valorDoBotaoNoInput, realizaCalculo, limparInput };