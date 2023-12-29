import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableAnimationOptions } from '../part-1/animations/collapse';
import { fade } from './animations/fade';
import { ItemComponent } from './components/item/item.component';
import { ANIMATION_PARAMS_TOKEN, TAnimationParams } from './tokens/animation-params.token';

@Component({
  selector: 'app-disable-animations',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './disable-animations.component.html',
  styleUrl: './disable-animations.component.scss',
  animations: [fade],
  host: {
    '[class.flex]': 'true',
    '[class.flex-column]': 'true',
  },
})
export class DisableAnimationsComponent {
  state = false;

  constructor(
      @Inject(ANIMATION_PARAMS_TOKEN)
      public globalAnimationParams: TAnimationParams
  ) {}

  public animationOptions: ReusableAnimationOptions<string> = {
    value: '_',
    params: {
      // current params
      ...this.globalAnimationParams
    }
  }
}
