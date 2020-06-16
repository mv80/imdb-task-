import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MovieSearchResultModule } from '../movie-search-result/movie-search-result.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MovieSearchResultModule,
    MatProgressSpinnerModule
    
  ],
  exports :[MovieListComponent]
})
export class MovieListModule { }
