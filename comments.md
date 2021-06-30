## Paradigmas de Programação

- modelo ou padrão a seguir
- javascript multi paradigma
- 3 principais paradigmas: funcional, procedural e OO (Orientado a Objetos)
- imperativo
  > foco no fluxo

  > estados mutáveis

  > como

  > maior quantidade de código

  > baixo nível de escalabidade

  > mais conhecido

  > mais explícito

  exemplo: 
  ```
  const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];
    function media(notas) {
    let total = 0;
    for (let i = 0; i < notas.length; i++) {
    total += notas[i];
    }
    return total / notas.length;
  }
  const mediaTurma = media(notas);
  console.log(`Média é ${mediaTurma}`)`

- declarativo
  > foco na lógica

  > imutabilidade

  > o que

  > menor quantidade de código

  > alto nível de escalabidade

  > menos conhecido

  > menos explícito

  exemplo: 
  `SELECT matricula, nome, email, media FROM alunos WHERE media >= 9;`

  HTML é declarativo;

  ```
  const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];

  const somar = (a, b) => a + b;
  const dividir = (a, b) => a / b;

  const mediaTurma = dividir(
    notas.reduce(somar),
    notas.length
  );

  console.log(`Média é ${mediaTurma}`);
  
