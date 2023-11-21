import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
// import AOS from 'aos';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInFromLeft', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        animate('0.5s ease-in-out', style({
          opacity: 1,
          transform: 'translateX(0)',
        })),
      ]),
    ]),
    trigger('fadeInWithDelay', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('2s ease-in-out', style({
          opacity: 1,
        })),
      ]),
    ]),
    trigger('slideInFromBottomWithDelay', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(50%)', // Start position
        }),
        animate('1s 0.5s ease-in-out', style({
          opacity: 1,
          transform: 'translateY(0)', // End position
        })),
      ]),
    ]),

    trigger('dropInFromBottomWithDelay', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(50%)', // Start position (drop from bottom)
        }),
        animate('0.5s ease-in-out', style({
          opacity: 1,
          transform: 'translateY(0)', // End position
        })),
      ]),
    ]),

   

  ],
})
export class HomeComponent implements OnInit{


  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    AOS.init();
  }

  

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode;
  }

  toggleMode() {
    this.themeService.toggleTheme();
  }



  



}
