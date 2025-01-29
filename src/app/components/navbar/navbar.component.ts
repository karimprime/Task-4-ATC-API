import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navLinks } from '../../models/nav-links';
import { DarkModeService } from '../../services/servieModes/modes.service';



@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private darkModeService: DarkModeService) { }
  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
  navLinks: navLinks[] = [
    { "navTitle": "Home", "navLink": "/home" },
    { "navTitle": "Movies", "navLink": "/movies" },
    { "navTitle": "Contact", "navLink": "/contact" },
  ]
}
