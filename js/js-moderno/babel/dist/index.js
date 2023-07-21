"use strict";

var media = function media() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  return numeros.reduce(function (acum, valor) {
    return acum += valor;
  }, 0) / numeros.length;
};
console.log(media(90, 60, 70));