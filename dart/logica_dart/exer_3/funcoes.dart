dynamic inverteArray(dynamic array, int tam) {
  for (int i = 0, j = tam - 1; i != j; i += 1, j -= 1) {
    dynamic valor = array[i];
    array[i] = array[j];
    array[j] = valor;
  }
  return array;
}
