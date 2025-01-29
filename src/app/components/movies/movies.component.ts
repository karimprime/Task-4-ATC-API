import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMoviesComponent } from '../nav-movies/nav-movies.component';

@Component({
  selector: 'app-movies',
  imports: [NavMoviesComponent, RouterOutlet],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
