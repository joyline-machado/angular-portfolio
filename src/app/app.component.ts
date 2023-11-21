import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('dropDownAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        }),
        animate('0.5s ease-in-out', style({
          opacity: 1,
          transform: 'translateY(0)',
        })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private themeService: ThemeService) {}

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode;
  }

  toggleMode() {
    this.themeService.toggleTheme();
  }
 

}
