class Dados {
  late String _nomeUsuario;
  late String _senha;
  late double _saldo;
  Dados(this._nomeUsuario, this._senha, this._saldo);
  void trocarSenha({required String nomeUsuario, required String senha}) {
    if (verificaDados(nomeUsuario: nomeUsuario, senha: senha)) {
      _senha = senha;
    } else {
      throw "nomeUsuario ou senha incorreto";
    }
  }

  void trocarNome({required String nomeUsuario, required String senha}) {
    if (verificaDados(senha: senha, nomeUsuario: nomeUsuario)) {
      _nomeUsuario = nomeUsuario;
    } else {
      throw "nomeUsuario ou senha incorreto";
    }
  }

  void adicionarSaldo(double saldo, String nomeUsuario, String senha) {
    if (verificaDados(nomeUsuario: nomeUsuario, senha: senha)) {
      _saldo += saldo;
    }
  }

  void retirarSaldo(double saldo, String nomeUsuario, String senha) {
    if (verificaDados(nomeUsuario: nomeUsuario, senha: senha)) {
      if (saldo > _saldo) {
        throw "Você não tem ${saldo} de dinheiro";
      } else {
        _saldo -= saldo;
      }
    }
  }

  double get retornarSaldo {
    return _saldo;
  }

  bool verificaDados({String? nomeUsuario, String? senha}) {
    return nomeUsuario == _nomeUsuario && senha == _senha;
  }
}
