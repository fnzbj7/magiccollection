import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export class MenuElement {
    constructor(
        public link: string,
        public name: string,
        public always: boolean,
        public exact: boolean,
        public icon: IconDefinition,
    ) {}
}
