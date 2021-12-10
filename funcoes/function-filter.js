/*

A função filter serve para retirar os itens de um array baseado em uma determinada condição

*/

const numeros = [1, 2, 3, 4]
const pares = valor => valor % 2 === 0
const impares = valor => valor % 2 !== 0
const numerosPares = numeros.filter(pares)// ->  [2, 4]
const numerosImpares = numeros.filter(impares)// ->  [1, 3]
console.log(numerosPares, numerosImpares)

// Concatenando as funções

const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99},
    {nome: 'Lapis', qtd: 0, preco: 1.99},
    {nome: 'Caderno', qtd: 5, preco: 8.99},
    {nome: 'Borracha', qtd: 20, preco: 0.50},
]

const getNome = obj => obj.nome
const qtdMaiorQueZero = obj => obj.qtd > 0
const itensComNomesPequenos = nome => nome.length <= 6

const nomeDosItensComQtdNomesPequenos = carrinho
                            .filter(qtdMaiorQueZero)
                            .map(getNome)
                            .filter(itensComNomesPequenos)

console.log(nomeDosItensComQtdNomesPequenos) // -> [ 'Caneta']
                            
// Implementando meu filter

Array.prototype.meuFilter = function(fn){
    const novoArray = []
    
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)){
            novoArray.push(this[i])
        }
    }

    return novoArray
}

const frutas = ['Banana', 'Maçã', 'Limão']
const acharLimao = fruta => fruta === 'Limão'
const meuLimao = frutas.meuFilter(acharLimao)
console.log(meuLimao)

