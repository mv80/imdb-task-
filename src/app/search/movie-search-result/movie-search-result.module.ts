import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchResultComponent } from './movie-search-result.component';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [MovieSearchResultComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    
  ],
  exports :[MovieSearchResultComponent]
})
export class MovieSearchResultModule { }
