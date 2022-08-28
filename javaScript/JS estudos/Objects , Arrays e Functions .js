let Maiorespaises = {
  CincoMaiores: ["Rússia", "Canadá", "China", "Estados Unidos", "Brasil"],
  Menorespaises: function () {
    let Menores = {
      CincoMenores: ["Vaticano", "Mônaco", "Nauru", "Tuvalu", "San Marino"],
    };

    console.log(
      "Os maiores países são : " +
        this.CincoMaiores +
        " e os menores são " +
        Menores.CincoMenores
    );
  },
};
Maiorespaises.Menorespaises();
