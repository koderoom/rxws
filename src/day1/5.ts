import { of } from 'rxjs';
import { first, last } from 'rxjs/operators';

const obs = of('A', 'B', 'C', 'D');

// ACCESS ONLY FIRST ELEMENT
console.time('t1');
obs
.pipe(first())
.subscribe((data)=> {
    console.log('first', data);
    console.timeEnd('t1')
});


// ACCESS ONLY LAST ELEMENT
console.time('t2');
obs
.pipe(last())
.subscribe((data)=>{
    console.log('last', data);
    console.timeEnd('t2');
});

