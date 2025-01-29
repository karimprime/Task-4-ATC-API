import { Component } from '@angular/core';
import { MoviesService } from '../../services/servieMovies/movies.service';
import { MoviesOption } from '../../models/movies-option';


@Component({
  selector: 'app-movie-type',
  imports: [],
  templateUrl: './movie-type.component.html',
  styleUrl: './movie-type.component.css'
})
export class MovieTypeComponent {
  constructor(private movies: MoviesService) { }
  imgPath: string = "https://image.tmdb.org/t/p/w500";
  ngOnInit() {
    this.movies.getMovies('movie').subscribe({
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
