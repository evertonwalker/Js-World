setTimeout(() => {
    console.log("Executando callback");
    setTimeout(() => {
        console.log("Executando callback");
        setTimeout(() => {
            console.log("Executando callback");
        }, 2000);
    }, 2000);
}, 2000);



function esperarPorTempo(tempo = 2000){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando a promise');
            resolve('vish!!');   
        }, tempo)
    })
}

esperarPorTempo(3000)
    .then(esperarPorTempo)
    .then(console.log);