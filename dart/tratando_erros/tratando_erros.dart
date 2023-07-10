void main() {
  print(stringParaInt("23"));
  print(stringParaInt("Olá, Mundo!"));
}

dynamic stringParaInt(String texto) {
  int valor;
  try {
    valor = int.parse(texto);
  } catch (erro) {
    return "Erro, não é possível converter esse texto para o tipo INT";
  }
  return valor;
}
