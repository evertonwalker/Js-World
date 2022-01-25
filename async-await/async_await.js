function esperarPorTempo(tempo = 2000){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Promise - executando')
            resolve('vish!!');   
        }, tempo)
    })
}


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(100), 100);
    });
}


async function executar(){
    
    let valor = await retornarValor();

    await esperarPorTempo(3000)
    console.log('async / await 1 -' , valor + 1);
    await esperarPorTempo(3000)
    console.log('async / await 2 -', valor + 2);
    await esperarPorTempo(3000)
    console.log('async / await 3 - ', valor + 3);

    return valor + 5;
}

// Ponto interessante é que se você retorna um valor de uma função assincrona, logo ela é uma promise e
// não pode ser guardado dessa forma: 
// const value = await executar();

executar().then(console.log);

// ou fazer isso

async function executarAsync () {

    let result = await executar();
    console.log(result);
}

executarAsync();