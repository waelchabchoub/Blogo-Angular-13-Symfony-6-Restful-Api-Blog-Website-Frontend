import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class loginGuard implements CanActivate{
 
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = localStorage.getItem('token');
        if (token) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
       this.router.navigate(['blogo/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
    
}