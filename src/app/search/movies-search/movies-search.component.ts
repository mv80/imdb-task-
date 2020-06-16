import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements  OnDestroy {
  constructor(private moviesService: MoviesService) { }
  movies: Movie[] = [];
  loading: boolean;
  ngUnsubscribe = new Subject();

  search(term: string){
    this.loading = true;
    this.moviesService.search(term)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(movies => {
      this.movies = movies;
      this.loading = false;
    })
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
