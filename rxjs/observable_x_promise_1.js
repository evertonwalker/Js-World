// Observable implementa  o padrão Observer. 

const { Observable } = require('rxjs');

const promise = new Promise((resolve) => {
    resolve('Promise é bem legal');
    // independente de quantas vezes você chama, só será exebido uma vez
    // resolve e reject, só se executam uma vez dentro de uma promise
    resolve('Promise é bem legal');
    resolve('Promise é bem legal');
});

promise.then(console.log);


const obs = new Observable(subscriber => {
    // interessante notar que o observable
    // você pode emitir inumeros dados
    subscriber.next('Observer é bem legal');
    subscriber.next('é');
    subscriber.next('bem');
    subscriber.next('Legal');
    subscriber.complete();
})

obs.subscribe(console.log)