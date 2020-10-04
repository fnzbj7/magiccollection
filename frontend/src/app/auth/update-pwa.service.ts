import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UpdatePwaService {
    needUpdateSubject: BehaviorSubject<boolean>;

    constructor() {
        this.needUpdateSubject = new BehaviorSubject(false);
    }

    getNeedUpdateSubject(): Observable<boolean> {
        return this.needUpdateSubject.asObservable();
    }

    setNeedUpdateSubject(needUpdate: boolean) {
        this.needUpdateSubject.next(needUpdate);
    }
}
