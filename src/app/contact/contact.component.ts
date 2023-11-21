import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

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
