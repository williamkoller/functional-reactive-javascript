/**
 * arrow function
 * na sua essência arrow function é uma function expression
 */

const felizNatal = () => console.log(`Feliz natal!!!`);
felizNatal();

/**
 * quando é um parametro pode ser usado nesta maneira
 */
const saudacao = nome => 'Fala ' + nome + ', blz!?!';
console.log(saudacao('William'));

/**
 * usando arrow function  e passando dois parametros
 * um dos parametros é um array
 * e o segundo um valor já iniciado
 */
const somar = (numeros, total = 0) => {
  for (let n of numeros) {
    total += n;
  }

  return total;
}
console.log(somar([1,2,3,4,5,6,7,8,9,10]))
console.log(somar([1, 2, 3, 4, 5, 6]))

/**
 * usando arrown function e passando um spread operator no parametro
 * spread operator tem que ser o ultimo parametro a ser utilizado
 * faz uma copia dos dados e coloca no parametro, sub entende que é um array
 */
const somarSpread = (...numbers) => {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }

  return total;
}
console.log(somarSpread(1,2,3,4,5,6,7,8,9,10))
console.log(somarSpread(1, 2, 3, 4, 5, 6))

/**
 * arrow function 
 */
const potencia = base => exp => Math.pow(base, exp)

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8))


/**
 * this
 */

Array.prototype.log = function () {
  console.log(this);
}

const numeros = [1, 2, 3, 4];

numeros.log();