import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{

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
