class Dados {
  String email; // pública
  String _senha; // o _ na frente indica que ela é privada, mas não altera nada
  Dados(this.email, this._senha);
  void mostrarDados() {
    print('E-mail: ${email}\nSenha:${_senha}');
  }
}

void main() {
  Dados dados = Dados("xx@xx.xx.xx", "12356");
  dados.mostrarDados();
}
