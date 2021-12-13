const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99, fragil: false},
    {nome: 'Lapis', qtd: 5, preco: 1.99, fragil: true},
    {nome: 'Caderno', qtd: 5, preco: 8.99, fragil: false},
    {nome: 'Borracha', qtd: 20, preco: 0.50, fragil: true},
]

// 1 -> fragil : true
// 2 -> qtd * preco 
// 3 -> média total

const naoFrageis = item => item.fragil
const qtdValor = item => item.qtd * item.preco
const mediaTotalReduce = (current, next) => { 
    const qtd = current.qtd + 1
    const total = current.total + next
    return { total, qtd, media: total / qtd }
}  

const mediaTotal = carrinho.filter(naoFrageis)
                                .map(qtdValor)
                                .reduce(mediaTotalReduce, { qtd: 0, total: 0, media: 0})
console.log(mediaTotal)