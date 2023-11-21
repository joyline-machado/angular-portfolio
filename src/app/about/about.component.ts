import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  constructor(private themeService: ThemeService) {}

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
