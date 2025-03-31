import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Auth, user} from '@angular/fire/auth';
import {map} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(Auth)

  return user(auth).pipe(
    map(authUser =>{
      if(authUser){
        return true
      } else{
        router.navigate(['/login'])
        return  false
      }
    })
  )


};
