import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-magic-set-icon',
    templateUrl: './magic-set-icon.component.html',
    styleUrls: ['./magic-set-icon.component.css'],
})
export class MagicSetIconComponent implements OnInit {
    @Input() expansionName: string;

    constructor() {}

    ngOnInit() {}

    lowerStr(str: string) {
        return str.toLowerCase();
    }
}
