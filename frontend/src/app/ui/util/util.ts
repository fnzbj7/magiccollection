import { NgZone } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';

export const toInteger = (value: unknown): number => parseInt(`${value}`, 10);

export const toString = (value: unknown): string =>
    value !== undefined && value !== null ? `${value}` : '';

export const getValueInRange = (value: number, max: number, min = 0): number =>
    Math.max(Math.min(value, max), min);

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isNumber = (value: unknown): value is number => !isNaN(toInteger(value));

export const isInteger = (value: unknown): value is number =>
    typeof value === 'number' && isFinite(value) && Math.floor(value) === value;

export const isDefined = (value: unknown): boolean => value !== undefined && value !== null;

//@ts-ignore
export const isPromise = <T>(v: unknown | Promise<T>): v is Promise<T> => v && v.then;

export const padNumber = (value: number) => {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return '';
    }
};

export const regExpEscape = (text: string) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

export const hasClassName = (element: HTMLElement, className: string): string | boolean =>
    element &&
    element.className &&
    element.className.split &&
    element.className.split(/\s+/).indexOf(className) >= 0;

export const closest = (element: HTMLElement, selector?: string): HTMLElement | null => {
    if (!selector) {
        return null;
    }

    /*
     * In certain browsers (e.g. Edge 44.18362.449.0) HTMLDocument does
     * not support `Element.prototype.closest`. To emulate the correct behaviour
     * we return null when the method is missing.
     *
     * Note that in evergreen browsers `closest(document.documentElement, 'html')`
     * will return the document element whilst in Edge null will be returned. This
     * compromise was deemed good enough.
     */
    if (typeof element.closest === 'undefined') {
        return null;
    }

    return element.closest(selector);
};

/**
 * Force a browser reflow
 *
 * @param element element where to apply the reflow
 */
export const reflow = (element: HTMLElement) => (element || document.body).getBoundingClientRect();

/**
 * Creates an observable where all callbacks are executed inside a given zone
 *
 * @param zone
 */
export const runInZone =
    <T>(zone: NgZone): OperatorFunction<T, T> =>
    source =>
        new Observable(observer => {
            const next = (value: T) => zone.run(() => observer.next(value));
            const error = (e: unknown) => zone.run(() => observer.error(e));
            const complete = () => zone.run(() => observer.complete());
            return source.subscribe({ next, error, complete });
        });

export const removeAccents = (str: string): string =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
