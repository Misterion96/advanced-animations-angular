import { AnimationOptions } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

function isReducedMotion(): boolean {
  const windowRef = inject(DOCUMENT).defaultView;
  const isReduce = windowRef?.matchMedia?.(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  return isReduce ?? false;
}

export type TAnimationParams = AnimationOptions['params'] & {
  duration: number;
};

export const ANIMATION_PARAMS_TOKEN = new InjectionToken<TAnimationParams>(
  'ANIMATION_PARAMS_TOKEN',
  {
    factory: () => ({ duration: isReducedMotion() ? 0 : 300 }),
    providedIn: 'root',
  }
);
