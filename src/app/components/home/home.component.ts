import { Component } from '@angular/core';
import { HomeCardsComponent } from '../home-cards/home-cards.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  imports: [HomeCardsComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
