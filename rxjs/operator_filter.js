const { filter } = require('rxjs/operators');
const { of } = require('rxjs');

const changeSet = {
    Sheet2: {
        type: 'Changed',
        state: {
            C1: 'INITIAL',
        },
    },
};

of(changeSet)
    .pipe(
        filter(changeSet => !!changeSet)
    ).subscribe(result => {
        console.log('do something', result);
    })