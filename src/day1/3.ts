import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const obs = interval(1000);
obs.pipe(take(4))
.subscribe((data)=>{
    console.log(data);
});