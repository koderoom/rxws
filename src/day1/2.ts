import { interval } from 'rxjs';
import {} from 'rxjs/operators';

const obs = interval(500);
obs.subscribe(data => console.log(data) );