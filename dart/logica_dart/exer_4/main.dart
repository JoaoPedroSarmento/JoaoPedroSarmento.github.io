import 'dart:io';

import './Dados.dart';

void main() {
  print("INSIRA SEUS DADOS");
  print("NOME DA CONTA:");
  String nome = stdin.readLineSync()!;
  print("SENHA:");
  String senha = stdin.readLineSync()!;
  print("SALDO:");
  double saldo = double.parse(stdin.readLineSync()!);
  int? escolha;
  Dados dados = Dados(nome, senha, saldo);
  while (escolha != 1 && escolha != 2 && escolha != 3) {
    print(
        "1-DESEJA INSERIR SALDO\n 2-DESEJA RETIRAR SALDO\n3-SAIR DO PROGRAMA");
    escolha = int.parse(stdin.readLineSync()!);
  }
  while (escolha == 1 || escolha == 2) {
    print("insira seu nome e sua senha");
    print("NOME:");
    nome = stdin.readLineSync()!;
    print("SENHA:");
    senha = stdin.readLineSync()!;
    try {
      if (dados.verificaDados(nomeUsuario: nome, senha: senha) &&
          escolha == 1) {
        print("QUANTIDADE DE SALDO QUE DESEJA INSERIR:");
        saldo = double.parse(stdin.readLineSync()!);
        dados.adicionarSaldo(saldo, nome, senha);
      } else if (dados.verificaDados(nomeUsuario: nome, senha: senha)) {
        print("QUANTIDADE DE SALDO QUE DESEJA RETIRAR:");
        saldo = double.parse(stdin.readLineSync()!);
        dados.retirarSaldo(saldo, nome, senha);
      } else {
        print("E-MAIL OU SENHA INCORRETO");
      }
    } catch (erro) {
      print(erro.toString());
    } finally {
      print(
          "1-DESEJA INSERIR SALDO\n 2-DESEJA RETIRAR SALDO\n3-SAIR DO PROGRAMA");
      escolha = int.parse(stdin.readLineSync()!);
    }
  }
  print("SALDO: ${dados.retornarSaldo}");
}
