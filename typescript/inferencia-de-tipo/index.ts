const spacesShip = {
    nome: "X-wing",
    velocidade: 0
}

function acelera(spacesShip: any, velocidade: number): void {
    console.log(spacesShip.velocidade)
    spacesShip.velocidade += velocidade;
}

while (spacesShip.velocidade <= 250) {
    acelera(spacesShip, 50);
    console.log(`Velocidade atual ${spacesShip.velocidade}`);
}