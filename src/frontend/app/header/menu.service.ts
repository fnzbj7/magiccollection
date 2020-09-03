import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
    menus: MenuElement[];

    constructor() {
        this.menus = [
            new MenuElement('', 'Home', true, true),
            new MenuElement('cards', 'My Cards', true, false),
            new MenuElement('calendar', 'Calendar', true, false),
            new MenuElement('addcards', 'Add Cards', false, false),
            new MenuElement('removecards', 'Remove Cards', false, false),
            new MenuElement('animation', 'Animation', true, false),
        ];
    }

    getMenus(): MenuElement[] {
        return this.menus;
    }
}

export class MenuElement {
    constructor(
        public link: string,
        public name: string,
        public always: boolean,
        public exact: boolean,
    ) {}
}
