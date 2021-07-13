// somar(3)(4)(5)

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

const somaAB = somar(3)(4)
console.log(somaAB(13));
console.log(somar(13)(20)(30));

// fn -> 3 * 7 
// fn -> 3 + 7 
// fn -> 3 - 7 
// calcular(3)(7)(fn)

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y)
    }
  }
}

function somarValores(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

const somarAB = calcular(8)(4)(somarValores);
console.log(somarAB)

const subtrairAB = calcular(8)(4)(subtrair);
console.log(subtrairAB)


const multiplicarAB = calcular(4)(8)(multiplicar)
console.log(multiplicarAB)