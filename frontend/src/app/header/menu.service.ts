import { Injectable } from '@angular/core';
import { faWizardsOfTheCoast } from '@fortawesome/free-brands-svg-icons';
import { faHome, faCalendarAlt, faPlus, faMinus, faGem } from '@fortawesome/free-solid-svg-icons';
import { MenuElement } from './model/menu-element.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
    menus: MenuElement[];

    constructor() {
        this.menus = [
            new MenuElement('', 'Home', true, true, faHome),
            new MenuElement('cards', 'My Cards', true, false, faWizardsOfTheCoast),
            new MenuElement('calendar', 'Calendar', true, false, faCalendarAlt),
            new MenuElement('addcards', 'Add Cards', false, false, faPlus),
            new MenuElement('removecards', 'Remove Cards', false, false, faMinus),
            new MenuElement('animation', 'Animation', true, false, faGem),
        ];
    }

    getMenus(): MenuElement[] {
        return this.menus;
    }
}
