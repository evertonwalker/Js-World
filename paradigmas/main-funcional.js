/*

Paradigma funcional

2 conceitos importantes são: 
- First class Functions -> Onde as funções são valores
- Higher order function -> Uma função consegue retornar uma função e ela consegue retornar outra função.

*/

// Funcão simples

function dobro(x) {
    return x * 2;
}

// Function expression  -> função são valores.

const dobroExpression = function (x){ 
    return x * 2;
}

console.log(dobroExpression(20));

// Exemplo de código procedural 

const alunos = [ 
    { nome: 'Juca', nota: 7}, 
    { nome: 'Maria', nota: 5.9}, 
    { nome: 'Pedro', nota: 9}, 
    { nome: 'Moises', nota: 3}, 
]

const aprovados = []

for(let i = 0; i < alunos.length; i++) {
    if(alunos[i].nota >= 7) {
        aprovados.push(alunos[i])
    }
}

console.log(aprovados)

// Exemplo do msm código usando paradigma funcional

const estaAprovado = aluno => aluno.nota >= 7
const aprovadosFuncional = alunos.filter(estaAprovado)

console.log(aprovadosFuncional)



