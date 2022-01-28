function Produto(nome, preco, desc = 0.15) {
    this.nome = nome;
    this.preco = preco;
    this._desc = desc

    this.precoFinal = () => this.preco * (1 - this._desc);

}

// Quando você define algo no prototype daquela função, você indica que todos os objetos
// que estanciam essa função vão ter acesso a esse método.
Produto.prototype.log = function () {
    console.log(`Nome: ${this.nome} Preço: ${this.preco}`);
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function () {
        return this._desc;
    },
    set: function (value) {
        if (value >= 0 && value <= 1) {
            this._desc = value;
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function () {
        return `${this._desc * 100}%`;
    }
})

const p1 = new Produto('Caneta', 3.50);
const p2 = new Produto('Lapis', 2);

console.log(p1.nome);
p1.log();
console.log(p2.preco);
p2.desc = 0.5;
console.log(p2.precoFinal());
console.log(p2.descString);
