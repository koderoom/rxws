import {of} from 'rxjs';

of(1, 2, 3, 4, 5).subscribe( (data) => {
    console.log(data);
}, (err) => {
    console.log(err);
}, () => {
    console.log('the end');
});