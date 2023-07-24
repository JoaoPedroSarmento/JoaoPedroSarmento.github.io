var spacesShip = {
    nome: "X-wing",
    velocidade: 0
};
function acelera(spacesShip, velocidade) {
    console.log(spacesShip.velocidade);
    spacesShip.velocidade += velocidade;
}
while (spacesShip.velocidade <= 250) {
    acelera(spacesShip, 50);
    console.log("Velocidade atual ".concat(spacesShip.velocidade));
}
