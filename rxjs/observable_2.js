const { Observable, noop } = require('rxjs');

const obs$ = Observable.create(subscriber => {
    subscriber.next('Rxjs');
    subscriber.next('é');
    subscriber.next('bem');
    subscriber.next('Poderoso');

    if(Math.random() > 0.5) {
        subscriber.complete();
    } else {
        subscriber.error('Que problema');
    }
});

// obs$.subscribe(
//     valor => console.log('Valor', valor),
//     erro => console.log('Error', erro),//noop Você pode passar esse valor quando n quiser tratar os erros do observer
//     () => console.log('Complete')
// );

// você também pode passar um objeto ao invés das funções em ordem, e isso não precisa estar na msm ordem
obs$.subscribe({
    next(valor) {
        console.log('Valor', valor)
    },
    complete() {
        console.log('Fim')
    },
    error(msg) {
        console.log('Error', msg);
    }
})