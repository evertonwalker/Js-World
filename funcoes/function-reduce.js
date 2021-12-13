/*

Reduce -> Função responsável por transformar aquele array em um determinado dado
e você sempre precisa usar um valor inicial.

*/

const array = [1,2, 3, 5 ,7, 8];

const somar = (current, next) => current + next 

const resultado = array.reduce(somar, 0);
console.log(resultado)

const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99},
    {nome: 'Lapis', qtd: 0, preco: 1.99},
    {nome: 'Caderno', qtd: 5, preco: 8.99},
    {nome: 'Borracha', qtd: 20, preco: 0.50},
]

const getTotal = obj => obj.qtd * obj.preco

const valorTotalSomado = carrinho.map(getTotal)
                                 .reduce(somar)
console.log(valorTotalSomado)

// Implementando meu reduce

Array.prototype.meuReduce = function(fn, initial){
    let acc = initial 
    for(let i = 0; i < this.length; i++){
       if(!acc && i === 0){
           acc = this[i]
           continue
       }

      acc = fn(acc, this[i], i, this )

    }
    return acc
}

const novaSoma = carrinho.map(getTotal).meuReduce(somar)
console.log(novaSoma)