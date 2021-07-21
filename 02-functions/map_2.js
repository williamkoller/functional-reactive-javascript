const nums = [1, 2, 3, 4, 5];
const dobro = n => n * 2;

console.log(nums.map(dobro));

const names = ['Bia', 'Lia', 'Joao', 'William', 'Pietro'];
const primeiraLetra = texto => texto[0];
const letras = names.map(primeiraLetra);
console.log(names, letras);