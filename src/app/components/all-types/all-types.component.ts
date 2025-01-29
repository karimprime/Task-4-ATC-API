import { Component } from '@angular/core';
import { MoviesService } from '../../services/servieMovies/movies.service';
import { MoviesOption } from '../../models/movies-option';

@Component({
  selector: 'app-all-types',
  imports: [],
  templateUrl: './all-types.component.html',
  styleUrl: './all-types.component.css'
})
export class AllTypesComponent {
  constructor(private movies: MoviesService) { }
  imgPath: string = "https://image.tmdb.org/t/p/w500";
  ngOnInit() {
    this.movies.getMovies('all').subscribe({
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
