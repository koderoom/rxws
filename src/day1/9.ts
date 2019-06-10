import { from, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

const obs = interval(1000);

obs.pipe(throttle( (ev) => {return interval(2000)}))
.subscribe((data)=>{
    console.log(data);
});
