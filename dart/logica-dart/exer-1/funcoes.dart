int calculaFatorial(int num) {
  if (num == 0) {
    return 1;
  } else {
    int resultadoFatorial = 1;
    for (int cont = 1; cont <= num; cont++) {
      resultadoFatorial *= cont;
    }
    return resultadoFatorial;
  }
}

// Exemplo fatorial de 4 
/* 
4 * 3 * 2 * 1
4 * 3 = 12
4 * 2 = 24
4 * 1 = 24
*/