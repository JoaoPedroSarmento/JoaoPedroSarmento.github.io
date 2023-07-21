function trocaCorDoFundoDoBody() {
    const cor1 = Math.round(Math.random() * 10);
    const cor2 = Math.round(Math.random() * 10);
    const cor3 = Math.round(Math.random() * 10);
    const cor4 = Math.round(Math.random() * 10);
    const corFundo = "#" + cor1 + cor2 + cor3 + cor4;
    document.body.style.setProperty(
        "background-color",
        corFundo
    );
}
document.getElementById("toggle-fundo").addEventListener("click", trocaCorDoFundoDoBody);