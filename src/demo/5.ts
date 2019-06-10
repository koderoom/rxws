import { from, of } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';

const obs = of('KH', 'BL', 'SE', 'VA');
obs.pipe(takeLast(2)).subscribe((data)=> {
    console.log(data);
});