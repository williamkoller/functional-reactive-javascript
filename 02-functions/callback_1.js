/**
 * callback
 * passando um parametro de uma function callback para ser usada novatemte
 */
function exec(fn, a, b) {
  return fn(a, b);
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);
const subtrair = (x, y) => x - y;

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

const r = exec(subtrair, 50, 25);
console.log(r)

setInterval(() => console.log('Exec...'), 1000);