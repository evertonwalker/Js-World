// criar uma stream numeros
// entre min e max com observable
// exemplo entre 4, 10 mostrar esses valores

const { Observable } = require('rxjs');


const entre = (min, max) => {
    return new Observable(subscriber => {

        // dois jeitos de fazer
        // for (let i = min; i <= max; i++) {
        //     subscriber.next(i);
        // }

        // cada item do array ele vai exibir o valor
        Array(max - min).fill().map((_, i) => subscriber.next(min + i));
        subscriber.complete();

    });
}

const sub = entre(4, 10).subscribe(console.log);

setTimeout(() => sub.unsubscribe(), 6000);

