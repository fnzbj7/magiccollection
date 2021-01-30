import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AntiAuthGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: AuthenticationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so return true
            return true;
        }

        // logged in so redirect to login page with the return url
        this.router.navigate(['/'], {
            queryParams: { returnUrl: state.url },
        });
        return false;
    }
}
