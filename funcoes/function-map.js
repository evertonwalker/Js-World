/*

Map é uma função do array responsável por passar por cada itens e modificar e array para outro array
com todos os itens tranformados

*/

const numeros = [1, 2, 3]
const dobro = valor => valor * 2
const numerosMultiplicados = numeros.map(dobro)// ->  2, 4, 6]
console.log(numerosMultiplicados)

const nomes = ['Everton', 'Walker']
const pegaInicial = nome => nome[0]
const inicais = nomes.map(pegaInicial) // -> ['E', 'W']
console.log(inicais)

const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99},
    {nome: 'Lapis', qtd: 0, preco: 1.99},
    {nome: 'Caderno', qtd: 5, preco: 8.99},
    {nome: 'Borracha', qtd: 20, preco: 0.50},
]

const apenasNomesCarrinho = obj => obj.nome
const valorConsolidado = obj => obj.qtd * obj.preco

const nomesCarrinho = carrinho.map(apenasNomesCarrinho)
const consolidado = carrinho.map(valorConsolidado)
console.log(nomesCarrinho, consolidado)

// Implementando o próprio map! 

Array.prototype.meuMap = function(fn){
    const mapped = []
    for(let i = 0; i < this.length; i++) {
        const resultItem = fn(this[i], i, this)
        mapped.push(resultItem)
    }
    return mapped
}

const numerosNovos = [10, 40, 20, 30]
const divisor = numero => numero / 2
const numerosDividos = numerosNovos.meuMap(divisor) // -> 5 - 20 - 10 - 15
console.log(numerosDividos)
