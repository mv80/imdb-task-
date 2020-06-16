import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime, filter, takeUntil, switchMap } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie';
import { AutoCompleteResult } from 'src/app/models/autoCompleteResult';
import { Subject, Observable } from 'rxjs';

const MIN_LENGTH = 3;
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    constructor( private formBuilder: FormBuilder, private moviesService: MoviesService ) { }
  searchForm : FormGroup;
  options$: Observable<AutoCompleteResult[]>;
  @Output() searchClicked : EventEmitter<string> = new EventEmitter<string>();
  @Output() autoCompleteEvent : EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      term: new FormControl('', Validators.required)
       
    })
    this.options$  =this.searchForm.get("term").valueChanges
    .pipe(debounceTime(300))
    .pipe(filter( value => value.length >= MIN_LENGTH))
    .pipe(switchMap((term) => this.moviesService.getAutoCompleteResults(term))
    )
   
  }
  
  onSubmit() {
    if(this.searchForm.value.term){
      this.searchClicked.emit(this.searchForm.value.term);
    }
      
  }

}
