void main(List<String> args) {
  // decalrando variáveis tipo nomeVariavel
  String nome = "João";
  int idade = 17;
  double salario = 8.900;
  bool empregado = false;
  // não é possível fazer concatenação entre valores de tipos diferentes
  // print("Idade" + idade) // erro "Idade" é string e idade é do tipo int
  print("Nome:" + nome);
  dynamic valorDinamico;
  // qunado uma variável não possuí um valor pré-definido seu valor por padrão é null
  print(valorDinamico);
  print("\n");
  valorDinamico = "17";
  print("Variável dinâmica" + valorDinamico);
  //  para que uma variável também aceite o valor null(nulo) basta colocar ? depois do tipo da variável
  String? animal = 'Gato';
  animal = null;
  print(animal);
}
