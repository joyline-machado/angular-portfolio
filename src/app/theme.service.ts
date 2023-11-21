import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private THEME_KEY = 'theme';
  private darkMode = false;

  constructor() {
    this.loadTheme();
  }

  get isDarkMode(): boolean {
    return this.darkMode;
  }

  private loadTheme() {
    const storedTheme = localStorage.getItem(this.THEME_KEY);
    this.darkMode = storedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    this.applyTheme();
    localStorage.setItem(this.THEME_KEY, this.darkMode ? 'dark' : 'light');
  }

  private applyTheme() {
    document.body.classList.toggle('dark-mode', this.darkMode);
  }

}
