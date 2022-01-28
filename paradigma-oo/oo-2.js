class Produto {
    constructor(preco, desconto) {
        this._nome
        this.preco = preco;
        this.desconto = desconto;
    }

    // Se vc setar isso como um get, logo vc n precisa chama-la como uma função, mas 
    // semelhante ao uma tributo padrão de uma classe.
    get precoFinal(){
        return this.preco * (1 - this.desconto);
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase();
    }

    get nome(){
        return this._nome;
    }

}


const p1 = new Produto(3.50, 0.15);
p1.nome = 'teste';
const p2 = new Produto(2, 0.15);
p2.nome = 'lapis';

console.log(p1.nome);
console.log(p2.preco);
console.log(p2.precoFinal);