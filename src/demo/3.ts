import { interval, of } from 'rxjs';
import {take} from 'rxjs/operators'

interval(500).pipe(take(4)).subscribe((n)=>{
    console.log(n);
});

