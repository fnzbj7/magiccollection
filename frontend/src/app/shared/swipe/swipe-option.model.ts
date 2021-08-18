export class SwipeOption {
    //
    callbackLeft?: () => void;
    callbackRight?: () => void;
    dragEvent?: (startPx: number | null, actualPx: number) => void;
    dragStop?: () => void;
}
