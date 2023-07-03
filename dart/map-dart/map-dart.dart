void main(List<String> args) {
  const String nome = "Dean";
  Map<String, String> usuario = const {
    "nome": nome,
    "telefone": "+55 (21) 99999-9999"
  };
  print(usuario);
  print("Nome: ${usuario["nome"]}\n Telefone: ${usuario["telefone"]}");
  // não é possível inserir nenhum valor, porque o Map é const
  // caso  a constante nome não fosse uma constante ela não poderia estar dentro do "objeto" usuario
}
