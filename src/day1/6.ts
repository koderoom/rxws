import { of } from 'rxjs';
import { max, min } from 'rxjs/operators';

const obs = of('A', 'B', 2, 'C', 'D', 2);
obs.pipe(min())
.subscribe((data)=> {
    console.log(data);
});