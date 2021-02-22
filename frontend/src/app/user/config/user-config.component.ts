import { Component } from '@angular/core';
import { UserConfigService } from './user-config.service';

@Component({
    templateUrl: './user-config.component.html',
    styleUrls: ['./user-config.component.scss'],
})
export class UserConfigComponent {
    constructor(private userConfigService: UserConfigService) {}

    onExport() {
        console.log('Export megnnyomva');
        this.userConfigService.exportCards();
    }

    onImport() {
        console.log('Import megnnyomva');
        this.userConfigService.importCards();
    }
}
