void main() {
  var lista = [1, 2, 3];
  print(lista);
  lista[0] = 3;
  lista[1] = 2;
  lista[2] = 1;
  print(lista);
  var listaVazia = [];
  listaVazia.add(3);
  print(listaVazia);
  listaVazia.remove(3);
  print(listaVazia);
  print(lista.removeLast());
  var nomes = ["Welisson", "Lil"];
  print(nomes.length);
  lista.removeRange(0, 2);
  print(lista);
  lista.clear();
  print(lista);

  for (int i = 0; i < nomes.length; i++) {
    print(nomes[i]);
  }
  // com lista final é possível alterar e acrescentar valores
  final nomes2 = ["joao", "Maria"];
  nomes2[0] = "João";
  // com lista const não é possível
  const nomes3 = ['joão', "Maria"];
  // nomes3[0] = "Erro!";
  print("${nomes3} ${nomes2}");
}
