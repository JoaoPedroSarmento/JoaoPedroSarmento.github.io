// serve para usar o método readLineSync()
import 'dart:io';
import 'dart:typed_data';

// esse método é utilizado para entrada de dados no prompt
void main(List<String> args) {
  print("Escrava sua idade");
  // var pode receber qualquer tipo de dado, mas depois dele receber o dado o seu tipo não poderá ser alterado
  var idade = stdin.readLineSync();
  // interpolação e concatenação de variáveis e strings:
  print('Sua idade é ${idade}');
  var salario = 12;
  print('Seu salário é de ${salario} reais');
  const pi = 3.14;
  final escola = 'CEFET';

  // diferença entre final e const
  /* 
   o valor de uma constante não pode ser definido em tempo de execução, ou seja, quando o arquivo for executado
   O final aceita com que o valor da constante seja definida em tempo de execução
   Exemplo:
  */
  print("Insira sua senha:");
  // readLineSync() parecido com o  cin do c++
  final senha = stdin.readLineSync();
  // para mostrar um dado que não seja do tipo string no prompt é necessário usar a seguinte sintaxe:
  // print("Texto ${variável}");
  // caso use: print("Texto" + ${variável})
  // o print tentará juntar os dados, mas como os tipos são diferentes não funciona
  print("Senha: ${senha}");
}
