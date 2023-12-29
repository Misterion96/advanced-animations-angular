import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { collapse, ReusableAnimationOptions } from '../../animations/collapse';

@Component({
  selector: 'app-bonus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.scss',
  animations: [collapse],
  host: {
    '[@collapse]': 'animationOptions',
  },
})
export class BonusComponent implements OnInit {
  @Input()
  public collapseDuration: number = 300;

  public animationOptions!: ReusableAnimationOptions<string>

  public ngOnInit(): void {
    this.animationOptions = {
      value: '_',
      params: { duration: this.collapseDuration },
    };
  }
}
