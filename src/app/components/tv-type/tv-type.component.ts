import { Component } from '@angular/core';
import { MoviesService } from '../../services/servieMovies/movies.service';
import { MoviesOption } from '../../models/movies-option';


@Component({
  selector: 'app-tv-type',
  imports: [],
  templateUrl: './tv-type.component.html',
  styleUrl: './tv-type.component.css'
})
export class TvTypeComponent {
  constructor(private movies: MoviesService) { }
  imgPath: string = "https://image.tmdb.org/t/p/w500";
  ngOnInit() {
    this.movies.getMovies('tv').subscribe({
      next: (movies) => {
        this.moviesCards = movies.results;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
  moviesCards: MoviesOption[] = [
  ]
}
