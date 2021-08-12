import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SideMenuService {
    openSideMenuSub = new Subject<boolean>();

    toggleSideMenu() {
        this.openSideMenuSub.next(true);
    }
}
