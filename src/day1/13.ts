import { of, merge, asyncScheduler, from } from 'rxjs';
import { subscribeOn, pluck } from 'rxjs/operators';

const obs = from([{id:1, title:'A'}, {id:2, title:'B'}, {id:3, title:'C'}]);
obs.pipe(pluck('title'))
.subscribe((data)=>{
    console.log(data);
});