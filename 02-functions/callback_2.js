const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function exibirConteudo(_, conteudo) {
  console.log(conteudo.toString());
}

console.log('Inicio...');
fs.readFile(caminho, exibirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log('Fim...');

console.log('InicioSync...');
const caminhoSync = fs.readFileSync(caminho);
console.log('caminhoSync...', caminhoSync.toString());
console.log('FimSync...');
