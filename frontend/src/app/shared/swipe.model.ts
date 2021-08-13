export class SwipeModel {
    private x0: number | null = null;
    private h!: HTMLBodyElement | null;
    // TODO this is a mess, need to refactor
    constructor(
        private c: HTMLElement,
        private callbackLeft: () => void,
        private callbackRight: () => void,
    ) {
        this.c.addEventListener('mousedown', this.lock.bind(this), false);
        this.c.addEventListener('touchstart', this.lock.bind(this), false);

        this.h = document.querySelector('body');
        if (this.h) {
            this.h.addEventListener('mouseup', this.move.bind(this), false);
            this.h.addEventListener('touchend', this.move.bind(this), false);
            this.h.addEventListener('mousemove', this.drag.bind(this), false);
            this.h.addEventListener('touchmove', this.drag.bind(this), false);
        }
    }

    unify(e: MouseEvent | TouchEventInit | TouchEvent): { clientX: number } {
        if ('changedTouches' in e && e.changedTouches !== undefined) {
            return e.changedTouches[0];
        }
        return e as MouseEvent;
    }

    lock(e: MouseEvent | TouchEventInit) {
        this.x0 = this.unify(e).clientX;
    }

    drag(e: MouseEvent | TouchEvent) {
        e.preventDefault();

        if (this.x0 || this.x0 === 0) {
            const num = Math.min(Math.max((this.unify(e).clientX - this.x0) / 20, -4), 4);
            const root = document.documentElement;
            root.style.setProperty('--rot', `${num}deg`);
        }
    }

    move(e: MouseEvent | TouchEventInit) {
        if (this.x0 || this.x0 === 0) {
            const dx = this.unify(e).clientX - this.x0;

            if (dx > 100) {
                this.callbackLeft();
            } else if (dx < -100) {
                this.callbackRight();
            }

            const root = document.documentElement;
            root.style.removeProperty('--rot');
            this.x0 = null;
        }
    }

    removeEvent() {
        if (this.h && this.h.removeAllListeners) {
            this.h.removeAllListeners();
        }

        if (this.c && this.c.removeAllListeners) {
            this.c.removeAllListeners();
        }
    }
}
