import { of } from 'rxjs';
import { materialize, map } from 'rxjs/operators';
 
const letters = of('a', 'b', 13, 'd');
const upperCase = letters.pipe(map(x => x.toUpperCase()));
const materialized = upperCase.pipe(materialize());
materialized.subscribe(x => console.log(x));
 