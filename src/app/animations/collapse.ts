import { animate, style, transition, trigger } from '@angular/animations';

const TRANSITION = '{{duration}}ms linear';
const DURATION = {params: {duration: 300}};

const leavedStyle = style({opacity: 0});
const enteredStyle = style({opacity: 1});

export const AN_COLLAPSE = trigger('collapse', [
    transition(
        ':enter',
        [leavedStyle, animate(TRANSITION, enteredStyle)],
        DURATION,
    ),
    transition(
        ':leave',
        [enteredStyle, animate(TRANSITION, leavedStyle)],
        DURATION,
    ),
]);
