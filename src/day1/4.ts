import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const obs = of(1, 2, 3, 4);
const obs1 = obs.pipe(
    map(data => data*data)
);

obs1.subscribe((data)=>{
    console.log(data);
});
