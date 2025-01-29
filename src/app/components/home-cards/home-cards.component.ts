import { Component } from '@angular/core';
import { MoviesService } from '../../services/servieMovies/movies.service';
import { MoviesOption } from '../../models/movies-option';

@Component({
  selector: 'app-home-cards',
  imports: [],
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css'
})
export class HomeCardsComponent {
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
