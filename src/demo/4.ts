import { of } from 'rxjs';
import { take } from 'rxjs/operators'

let obs = of('a', 'b', 1, {key : 'Value'}, 'c', 'd');
obs.pipe(take(4)).subscribe((data)=> {
    console.log(data);
});