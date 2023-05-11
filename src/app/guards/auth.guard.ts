import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private shared:AuthService , private routes:Router){}
  LogginIn :any
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.LogginIn = this.shared.getuserauth()
        if( this.LogginIn == "false"){
         resolve(true)
        }else{
         resolve(false)
         this.routes.navigate(['/']);
        }
     })
  
}
}
