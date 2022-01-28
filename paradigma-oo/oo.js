// aqui temos algo chamado syntax sugar, porque todos os objetos no javascript na verdade são funções.
// Função construtora
function Produto(nome, preco, desc = 0.15) {
    // Quando você usa o this, em casos de funções, você deixa esses valores públicos para serem acessados.
    this.nome = nome;
    this.preco = preco;
    this.desc = desc
    // Exemplo privado
    //let privado = 3;

    this.precoFinal = () => this.preco * (1 - this.desc);

}

const p1 = new Produto('Caneta', 3.50);
const p2 = new Produto('Lapis', 2);

console.log(p1.nome);
console.log(p2.preco);
console.log(p2.precoFinal());
