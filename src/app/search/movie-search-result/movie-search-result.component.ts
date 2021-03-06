import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Movie } from 'src/app/models/movie';


@Component({
  selector: 'app-movie-search-result',
  templateUrl: './movie-search-result.component.html',
  styleUrls: ['./movie-search-result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieSearchResultComponent  {
 @Input() movie :Movie;
  constructor() { }

  setDefaultImg(){
    this.movie.image = "assets/images/no-poster-available.jpg";
  }
  

  

}
