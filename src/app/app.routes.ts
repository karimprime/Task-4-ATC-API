import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AllTypesComponent } from './components/all-types/all-types.component';
import { MovieTypeComponent } from './components/movie-type/movie-type.component';
import { TvTypeComponent } from './components/tv-type/tv-type.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'movies', component: MoviesComponent, title: 'Movies', children: [
      { path: '', redirectTo: 'all-types', pathMatch: 'full' },
      { path: 'all-types', component: AllTypesComponent, title: 'All' },
      { path: 'movie-type', component: MovieTypeComponent, title: 'Movie' },
      { path: 'tv-type', component: TvTypeComponent, title: 'TV' }
    ]
  },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: NotfoundComponent },
];
