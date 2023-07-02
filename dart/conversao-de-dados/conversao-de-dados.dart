void main(List<String> args) {
  double moeda = 10;
  // runtimeType serve para mostrar qual é o tipo da variável
  print(moeda.runtimeType);
  // conversão para strings
  print(moeda.toString().runtimeType);
  String str = "600";
  // converter string para double ou int
  print(int.parse(str).runtimeType);
  print(double.parse(str).runtimeType);
  // convertendo double para int
  print(moeda.toDouble().runtimeType);
}
