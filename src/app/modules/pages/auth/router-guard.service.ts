import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Storage} from "@ionic/storage";

@Injectable()
export class AuthGuard implements CanActivate {
 constructor(private router: Router, public storage: Storage) { }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return this.storage.get("loggedIn").then((flag)=>{
         if(flag)
            return true;
         else{
            this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url }});
            return false;
        }
     });
  }
}