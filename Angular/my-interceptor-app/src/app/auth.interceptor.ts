import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const clone = req.clone(
    {
      headers: req.headers.set("Authorization", "Bearer Ahmet Hakan")
    }
  );
  return next(clone).pipe(
    catchError((err:any)=> {
      console.log(err);
      
      return of();
    })
  );
};
// Bearer => Json Web Token'a özel