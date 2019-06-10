import { of, from } from 'rxjs';
import { timestamp } from 'rxjs/operators';

const obs = of(1, 2, 3);
obs.pipe(timestamp())
.subscribe((data)=>{
    console.log(data);
});


const obs1 = from([{id:1}, {id:3}, {id:3},{id:4}]);
obs1.pipe(timestamp())
.subscribe((data)=>{
    console.log(data);
});


