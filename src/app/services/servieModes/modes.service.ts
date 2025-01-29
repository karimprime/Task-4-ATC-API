import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  toggleDarkMode(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const htmlElement = document.documentElement;
      const isDark = htmlElement.classList.toggle('dark');

      localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
    }
  }

  initializeDarkMode(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const userPreference = localStorage.getItem('color-theme');
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (userPreference === 'dark' || (!userPreference && systemPreference)) {
        document.documentElement.classList.add('dark');
      }
    }
  }
}
