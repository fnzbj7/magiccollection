export class SwipeModel {
    private x0: number | null = null;

    constructor(
        private c: HTMLElement,
        private callbackLeft: () => void,
        private callbackRight: () => void,
    ) {
        // const c: HTMLDivElement | null = document.querySelector('.swipable');
        c.addEventListener('mousedown', this.lock.bind(this), false);
        c.addEventListener('touchstart', this.lock.bind(this), false);
        c.addEventListener('mouseup', this.move.bind(this), false);
        c.addEventListener('touchend', this.move.bind(this), false);
    }

    unify(e: MouseEvent | TouchEventInit): { clientX: number } {
        if ('changedTouches' in e && e.changedTouches !== undefined) {
            return e.changedTouches[0];
        }
        return e as MouseEvent;
    }

    lock(e: MouseEvent | TouchEventInit) {
        this.x0 = this.unify(e).clientX;
    }

    move(e: MouseEvent | TouchEventInit) {
        if (this.x0 || this.x0 === 0) {
            const dx = this.unify(e).clientX - this.x0;

            if (dx > 100) {
                this.callbackLeft();
            } else if (dx < -100) {
                this.callbackRight();
            }

            this.x0 = null;
        }
    }
}
