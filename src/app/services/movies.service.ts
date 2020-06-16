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
      .pipe(map((data: any) => {
        return data.Search ? data.Search : []; } 
      ))
      .pipe(map((data: Movie[]) => data.map((movie: Movie) => {
        return new Movie(movie)
      })))

  }
  getAutoCompleteResults(term: string): Observable<AutoCompleteResult[]> {
    const url = this.buildSearchUrl(term);
    return this.http.get(url)
      .pipe(map((data: any) => data.Search))
      .pipe(map((items: any[]) => {
        items = items ? items : [];
        const length = items.length >= MAX_ITEMS_AUTOCOMPLETE ? MAX_ITEMS_AUTOCOMPLETE : items.length;
        return items.slice(0, length);
      }))
      .pipe(map((data: any[]) => data.map((option: any) => {
        return new AutoCompleteResult(option)
      })))

  }
  private buildSearchUrl(term: string) {
    return `${BASE_URL}?s=${term}&apikey=${API_KEY}&type=movie`;

  }
}
