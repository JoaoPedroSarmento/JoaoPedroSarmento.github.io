let texto = 90;

switch (texto) {
  case 80:
  case 90:
  case 100:
    console.log("Velocidade aceitável");
    break;
  case 110:
    console.log("Velocidade alta, mas  aceitável");
    break;
  default:
    console.log("Velocidade não indentificada");
}
