import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { MovieSearchResultModule } from '../movie-search-result/movie-search-result.module';


@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MovieSearchResultModule,
   
    
    
  ],
  exports :[MovieListComponent]
})
export class MovieListModule { }
 