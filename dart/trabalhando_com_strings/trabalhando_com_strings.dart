void main(List<String> args) {
  String musica = "Cabra da Peste(remix)";
  // para saber o tamanho/largura dessa string basta utilizar a palavra-chave .length
  print(musica.length);
  // isEmpty verifica se a string está vazia
  print(musica.isEmpty);
  // isNotEmpty verifica se a string não está vazia;
  print(musica.isNotEmpty);
  // toUpperCase deixa todos os caracteres em maiúsculo
  print(musica.toUpperCase());
  // toLoweCase deias todos os caracteres em minúsuclo
  print(musica.toLowerCase());
  // vai substituir a string (remix) por " "
  print(musica.replaceAll('(remix)', " "));
}
