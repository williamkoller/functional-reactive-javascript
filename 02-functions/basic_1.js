/**
 * function declaration
 */

function bomDia() {
  console.log('bom dia');
}

bomDia();

/**
 * function expression
 */

const boaTarde = function () {
  console.log('boa tarde');
}

boaTarde();

/**
 * a const resultado é undefined pois a boaTrade é function declararion que não retorna nada;
 * apenas faz um console.log
 */

const resultado = boaTarde();
console.log('resultado', resultado);

function somar(a = 0, b = 0) {
  return a + b;
}

let result = somar(3, 4);
console.log('result', result);

result = somar(3, 5, 5, 6, 7, 8);
console.log('result', result);

result = somar(3);
console.log('result', result);

result = somar();
console.log('result', result);