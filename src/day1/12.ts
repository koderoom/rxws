import { of, merge, asyncScheduler, from } from 'rxjs';
import { subscribeOn, single } from 'rxjs/operators';

const obs = from([1,  2, 3]);
obs.pipe(single(x => x==1))
.subscribe((data)=>{
    console.log(data);
})