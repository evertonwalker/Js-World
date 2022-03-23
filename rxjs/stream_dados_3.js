const { interval, from } = require('rxjs');

const gerarNumeros = interval(500);

const subscription = gerarNumeros.subscribe(numero => {
    console.log(Math.pow(2, numero));
});

const subscription2 = gerarNumeros.subscribe(console.log);

setTimeout(() => subscription.unsubscribe(), 8000)
setTimeout(() => subscription2.unsubscribe(), 6000)


from([1, 2, 3]).subscribe(console.log);