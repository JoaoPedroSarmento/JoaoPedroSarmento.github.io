"use strict";

(function () {
  "use strict";

  var __webpack_modules__ = {
    93: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      function limparInput() {
        input.value = "", input.focus();
      }
      function realizaCalculo(string) {
        var inputResult = document.getElementById("result");
        inputResult.value = "Erro!", inputResult.value = eval(string);
      }
      function valorDoBotaoNoInput(e) {
        var _ = e.currentTarget.textContent;
        input.value += _;
      }
      function isNumero(e) {
        return !isNaN(+e);
      }
      function validaEntradaDeDadosNoInput(e) {
        var _ = e.key;
        if (e.preventDefault(), isNumero(_) || ["(", ")", "+", "-", "*", ".", "/"].includes(_)) input.value += _; else if ("Enter" === e.key) {
          var _e = realizaCalculo(input.value);
          inputResult.value = _e;
        }
      }
      __webpack_require__.d(__webpack_exports__, {
        R5: function R5() {
          return limparInput;
        },
        Uv: function Uv() {
          return valorDoBotaoNoInput;
        },
        fx: function fx() {
          return realizaCalculo;
        },
        lc: function lc() {
          return validaEntradaDeDadosNoInput;
        }
      });
    }
  },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var _ = __webpack_module_cache__[e];
    if (void 0 !== _) return _.exports;
    var t = __webpack_module_cache__[e] = {
      exports: {}
    };
    return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
  }
  __webpack_require__.d = function (e, _) {
    for (var t in _) __webpack_require__.o(_, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, {
      enumerable: !0,
      get: _[t]
    });
  }, __webpack_require__.o = function (e, _) {
    return Object.prototype.hasOwnProperty.call(e, _);
  };
  var __webpack_exports__ = {};
  (function () {
    var e = __webpack_require__(93);
    var _ = document.getElementById("input");
    _.addEventListener("keypress", e.lc), document.querySelectorAll(".key").forEach(function (_) {
      _.addEventListener("click", e.Uv);
    }), document.getElementById("igual").addEventListener("click", function () {
      return (0, e.fx)(_.value);
    }), document.getElementById("clear").addEventListener("click", e.R5);
  })();
})();
