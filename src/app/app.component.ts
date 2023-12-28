import { AnimationOptions, AnimationEvent  } from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AN_COLLAPSE } from './animations/collapse';
import { ItemComponent } from './components/angular-animation/item.component';

@Component({
  standalone: true,
  imports: [ItemComponent, NgIf, NgClass],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
      AN_COLLAPSE
  ]
})
export class AppComponent {
  show = true

  options: AnimationOptions & { value: boolean } = {
    value: true,
    params: {
      duration: 400
    }
  };

  onAnimationEvent(event: AnimationEvent ) {
    switch (event.phaseName) {
      case 'start': {
        console.time('animation');
        break
      }
      case 'done': {
        console.timeEnd('animation');
        break;
      }
      default: {
        break
      }
    }
  }
}
