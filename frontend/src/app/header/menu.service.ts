import { Injectable } from '@angular/core';
import { faWizardsOfTheCoast } from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faCalendarAlt,
    faPlus,
    faMinus,
    faGem,
    faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { MenuElement } from './model/menu-element.model';
import { ShowMenu } from './model/show-menu.enum';

@Injectable({ providedIn: 'root' })
export class MenuService {
    menus: MenuElement[];

    constructor() {
        this.menus = [
            new MenuElement('', 'Home', ShowMenu.ALWAYS, true, faHome),
            new MenuElement('cards/list/', 'Cards', ShowMenu.LOGOUT, false, faWizardsOfTheCoast),
            new MenuElement('cards/list/', 'My Cards', ShowMenu.LOGIN, false, faWizardsOfTheCoast),
            new MenuElement('calendar', 'Calendar', ShowMenu.ALWAYS, false, faCalendarAlt),
            new MenuElement('cards/addcards', 'Add Cards', ShowMenu.LOGIN, false, faPlus),
            new MenuElement('cards/removecards', 'Remove Cards', ShowMenu.LOGIN, false, faMinus),
            new MenuElement('animation', 'Animation', ShowMenu.ALWAYS, false, faGem),
            new MenuElement('auth/login', 'Log in', ShowMenu.LOGOUT, false, faSignInAlt),
        ];
    }

    getMenus(): MenuElement[] {
        return this.menus;
    }
}
