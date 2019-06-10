import { from } from 'rxjs';
import { throwIfEmpty } from 'rxjs/operators';

const obs = from([]);
obs.pipe(throwIfEmpty())
.subscribe((data)=>{
    console.log(data);
}, (err)=>{
    console.log(err);
});
