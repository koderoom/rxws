import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

const obs = from([1,2, 2, 5, 4, 5]);
obs.pipe(tap(data => console.log(data)))
.subscribe();