/* Paradigma -> modelo/padrão para seguir para resolver um determinado tipo de problema.
   Funcional (1957 ) ->  Procedural (1968 ) -> OO ( 1980/90)
   A adoção do código funcional demorou por conta do uso de memória ser maior, de forma que 
   era preciso mais recurso, em contra partida, manter o código funcional era muito mais fácil
   dado sua qualidade de escrita, além de paralelizar o código então o fato dos hardwares possuirem múltiplos 
   núcleos ajudam nesse paradigma também.
   */

   /* 

   Código Declarativo vs imperativo

    PRa resumir um código declarativo normalmente trabalho com imutabilidade, então ele sempre altera uma variável para outro valor
    e ganha recurso de multi threads, enquanto o imperativo segue um padrão de criação de variáveis e deixando explicito linha por linha
    o que cada ação deve fazer.

   */


// Exemplo código imperativo -> Mt focado em COMO fazer cada parte 

const notas = [5, 7, 8.4 , 6, 8];

function calcularMedia(notas) {
   let total = 0;
   for(let i = 0; i < notas.length; i++) {
      total += notas[i]
   }

   total = total / notas.length;
   return total;
}

const mediaImperativa = calcularMedia(notas);

console.log(`A média final é: ${mediaImperativa}`);

// Exemplo de código declarativo -> mt focado em O QUE -> ele te que retornar

const notas2 = [5, 7, 8.4 , 6, 8];

const somar = (a, b) => a + b;
const dividir = (a, b) => a / b;

const mediaDeclarativa = dividir( notas.reduce(somar), notas2.length)

console.log(`A média final é: ${mediaDeclarativa}`);