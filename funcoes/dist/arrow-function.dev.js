"use strict";

var _this = void 0;

// arrow function -> mais conhecidas como funções anônimas
var boaTarde = function boaTarde() {
  return console.log('boa tarde');
};

boaTarde();

var saudacao = function saudacao(nome) {
  return "Fala: ".concat(nome, " !!");
};

console.log(saudacao('Walker'));

var somar = function somar(numeros) {
  var soma = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = numeros[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var n = _step.value;
      soma += n;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return soma;
};

console.log(somar([10, 5, 25, 100]));

var potencia = function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
};

console.log(potencia(2)(8)); // Arrow function e seu escopo this.
// Como a função conhece o local que ela esta, ela consegue logar perfeitamente o valor de quem a chama.

Array.prototype.log = function () {
  console.log(this);
}; // Mas nesse caso ela loga {}, porque ela é anônima e olha para o escopo global e não para quem está chamando ela. 


Array.prototype.firstItem = function () {
  return console.log(_this);
};

var numeros = [1, 2, 3];
numeros.log();
numeros.firstItem();