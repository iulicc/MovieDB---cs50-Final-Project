import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'darkModePreference';
  private isDarkMode!: boolean;

  constructor() {
    this.loadDarkModePreference();
    this.applyDarkModeClass();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.saveDarkModePreference();
    this.applyDarkModeClass();
  }

  private loadDarkModePreference() {
    const preference = localStorage.getItem(this.storageKey);
    if (preference !== null) {
      this.isDarkMode = preference === 'true';
    } else {
      // Default to system preference if no stored preference is found
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.isDarkMode = prefersDark.matches;
    }
  }

  private saveDarkModePreference() {
    localStorage.setItem(this.storageKey, this.isDarkMode.toString());
  }

  private applyDarkModeClass() {
    document.body.classList.toggle('dark', this.isDarkMode);
  }
}
