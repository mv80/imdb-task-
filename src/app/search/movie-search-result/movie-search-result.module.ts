import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchResultComponent } from './movie-search-result.component';



@NgModule({
  declarations: [MovieSearchResultComponent],
  imports: [
    CommonModule,
    
  ],
  exports :[MovieSearchResultComponent]
})
export class MovieSearchResultModule { }
