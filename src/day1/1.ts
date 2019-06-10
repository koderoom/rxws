import { of } from 'rxjs';
import {} from 'rxjs/operators';

const obs = of('A', 'B', 'C');
obs.subscribe((data)=>{
    console.log(data);
});