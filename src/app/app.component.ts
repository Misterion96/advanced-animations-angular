import { Component } from '@angular/core';
import { ReusableAnimationsComponent } from './part-1/reusable-animations.component';
import { DisableAnimationsComponent } from './part-2/disable-animations.component';

@Component({
  standalone: true,
  imports: [ReusableAnimationsComponent, DisableAnimationsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
