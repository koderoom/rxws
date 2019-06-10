import { of, from, interval } from 'rxjs';
import { materialize, map, takeUntil, count, debounce, debounceTime, throttleTime } from 'rxjs/operators';

const obs = interval(1000);
obs.pipe(throttleTime(2000))
.subscribe((data)=>{
    console.log(data);
});