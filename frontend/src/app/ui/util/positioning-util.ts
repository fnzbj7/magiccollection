import { offset as offsetModifier, Options } from '@popperjs/core';

export const addPopperOffset = (offset: number[]) => (options: Options) => {
    options.modifiers?.push(offsetModifier, {
        name: 'offset',
        options: {
            offset: () => offset,
        },
    });

    return options;
};
