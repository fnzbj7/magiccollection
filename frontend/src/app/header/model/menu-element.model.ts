import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ShowMenu } from './show-menu.enum';

export class MenuElement {
    constructor(
        public link: string,
        public name: string,
        public showMenu: ShowMenu,
        public exact: boolean,
        public icon: IconDefinition,
    ) {}
}
