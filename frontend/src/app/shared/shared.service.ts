import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
    pad(text: string | number, width: number, z?: string) {
        z = z || '0';
        text = text + '';
        return text.length >= width ? text : new Array(width - text.length + 1).join(z) + text;
    }
}
