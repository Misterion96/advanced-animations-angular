import {
  animate,
  animation,
  AnimationOptions,
  style,
  transition,
  trigger,
} from '@angular/animations';

const closedStyle = style({ height: 0 });
const openStyle = style({ height: '*' });
const animateTimings = '{{duration}}ms linear';
const defaultOptions: AnimationOptions = { params: { duration: 300 } };

export const collapse = trigger('collapse', [
  transition(
    ':enter',
    animation([closedStyle, animate(animateTimings, openStyle)]),
    defaultOptions
  ),
  transition(
    ':leave',
    animation([openStyle, animate(animateTimings, closedStyle)]),
    defaultOptions
  ),
]);

export interface ReusableAnimationOptions<State> extends AnimationOptions {
  value?: State;
}
