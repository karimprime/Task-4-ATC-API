import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-movies',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-movies.component.html',
  styleUrl: './nav-movies.component.css'
})
export class NavMoviesComponent {

}
