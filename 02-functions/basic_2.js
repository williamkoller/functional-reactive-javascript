
/**
 * function declaration
 */
function bomDia() {
  console.log('Bom dia!');
}

/**
 * function expression is function anonymous
 */
const boaTarde = function () {
  console.log('Boa tarde!');
}

/**
 * function expression
 * 1) passar uma função como parametro para outra função
 */
function executarQualquerCoisa(fn) {
  // === comparação estrita (compara valor e tipo)
  if (typeof fn === 'function') fn()
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

/**
 * function expression
 * 2) retornar uma função a partir de uma outra função
 */

function potencia(base) {
  return function (exp) {  
    return Math.pow(base, exp)
  }
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const pot34 = potencia(3)(4);
console.log(pot34);