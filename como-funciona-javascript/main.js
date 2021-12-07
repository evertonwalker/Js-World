/*

Javascript é single thread, ele não é semelhante ao java e outras linguagens.
Mas como funciona o javascript ?

Ele possuem uma área em memória chamada de HEAP, quando você cria objetos, referências sempre são armazenadas lá
e quando você para de usar, o collector tira esses dados para esvaziar a memória.

Vamos seguir um racícionio temos uma STACK -> uma pilha de execução 

Cada função que será executada ela vai seguir uma sequência, de forma que uma só sera executada
ao termino da outra e isso tudo é armazenado em uma ordem de pilha, primeira que é chamada é a última a sair já que dentro dela
podem existir outros fluxos.

Event Queue

É a pilha de eventos que envolvem operações asincronas do javascript na qual o Event loop esta sempre observando
para poder disparar e priorizar.

*/

// Experimento 1 -> aqui podemos ver que o console.log('fim') é executado msm estando dps das chamadas das funcões
// isso porque a stack entende que precisa seguir seu fluxo e jogou o fluxo da fn3 para a eventQueu ao finalizar 
// Ele joga isso na stack e ai sim podemos ver o final desse retorno.

function fn1() {
    fn2()
}

function fn2() {
    fn3()
}

function fn3() {
    setTimeout(() => {
        fn4()
    }, 3000)
}

function fn4(){
    fn5()
}

function fn5(){
    console.log('timeout')
}

function main(){
    fn1()
}

main();
console.log('fim')

// Outro experimento

function esperarPorUmTempo(tempo) {
    const futuro = Date.now() + tempo
    while(Date.now() < futuro) {}
}

// É interessante entender que esse código ao msm tempo depois de esperarPorUmTempo porque o código de cima estava bloqueando ele
// E se colocamos outro timeout com um tempo menor, ele será executado primeiro porque a eventQueue prioriza as ações mentos bloqueantes
setTimeout(() => console.log('Exec #01', 3000));
setTimeout(() => console.log('Exec #02', 300));
esperarPorUmTempo(5000)
console.log('fim programa')