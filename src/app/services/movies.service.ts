import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { CONFIG } from '../core/config';
import { AutoCompleteResult } from '../models/autoCompleteResult';
import { Observable } from 'rxjs';

const BASE_URL = CONFIG.baseUrl;
const API_KEY = CONFIG.apikey;
const MAX_ITEMS_AUTOCOMPLETE = 5;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  search(term: string): Observable<Movie[]> {
    const url = this.buildSearchUrl(term);
    return this.http.get(url)
      .pipe(map((data: any) => data.Search ? data.Search :[])) 
      .pipe(map((data: Movie[]) => data.map((movie: Movie) => new Movie(movie) 
      )))

  }
  getAutoCompleteResults(term: string): Observable<AutoCompleteResult[]> {
    const url = this.buildSearchUrl(term);
    return this.http.get(url)
      .pipe(map((data: any) => data.Search))
      .pipe(map((items: any[]) => {
        items = items ? items : [];
        return items.slice(0, MAX_ITEMS_AUTOCOMPLETE);
      }))
      .pipe(map((data: any[]) => data.map((option: any) => new AutoCompleteResult(option) )))

  }
  private buildSearchUrl(term: string) {
    term = term.trim();
    return `${BASE_URL}?s=${term}&apikey=${API_KEY}&type=movie`;

  }
}
