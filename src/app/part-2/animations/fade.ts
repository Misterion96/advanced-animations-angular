import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';

const leavedStyle = style({ opacity: 0 });
const enteredStyle = style({ opacity: 1 });

const animateTimings = '{{duration}}ms linear';
const defaultOptions = {params: {duration: 300}};

export const fade = trigger('fade', [
    transition(
        ':enter',
        [leavedStyle, animate(animateTimings, enteredStyle)],
        defaultOptions,
    ),
    transition(
        ':leave',
        [enteredStyle, animate(animateTimings, leavedStyle)],
        defaultOptions,
    ),
]);
