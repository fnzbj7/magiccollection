import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserConfigService {
    constructor(private http: HttpClient) {}

    exportCards() {
        // TODO elkészíteni az endpointot backenden
    }

    importCards() {
        // TODO elkészíteni az endpointot backenden
    }
}
