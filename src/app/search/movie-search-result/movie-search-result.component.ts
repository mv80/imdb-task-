import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';


@Component({
  selector: 'app-movie-search-result',
  templateUrl: './movie-search-result.component.html',
  styleUrls: ['./movie-search-result.component.scss']
})
export class MovieSearchResultComponent implements OnInit {
 @Input() movie :Movie;
  constructor() { }

  ngOnInit() {
  }
  

}
