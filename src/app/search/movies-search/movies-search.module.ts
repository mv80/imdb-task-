import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesSearchComponent } from './movies-search.component';
import { MovieListModule } from '../movie-list/movie-list.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MoviesSearchComponent],
  imports: [
    CommonModule,
    MovieListModule,
    SearchBarModule,
    MatProgressSpinnerModule
    
   
    
  ],
  exports : [MoviesSearchComponent]
})
export class MoviesSearchModule { }
