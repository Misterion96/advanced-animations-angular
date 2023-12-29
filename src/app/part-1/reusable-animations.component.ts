import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { collapse, ReusableAnimationOptions } from './animations/collapse';
import { BonusComponent } from './components/bonus/bonus.component';

@Component({
  selector: 'app-reusable-animations',
  standalone: true,
  imports: [CommonModule, BonusComponent],
  templateUrl: './reusable-animations.component.html',
  styleUrl: './reusable-animations.component.scss',
  animations: [collapse],
  host: {
    '[class.flex]': 'true',
    '[class.flex-column]': 'true',
  },
})
export class ReusableAnimationsComponent {
  public state: boolean = false;
  public slowAnimation: ReusableAnimationOptions<string> = {
    value: '_',
    params: { duration: 800 },
  };
  public fastAnimation: ReusableAnimationOptions<string> = {
    value: '_',
    params: { duration: 200 },
  };

  public durations = [1000, 800, 600, 400, 200, 0]
}
