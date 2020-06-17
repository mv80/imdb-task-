import { TestBed, getTestBed  } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { Movie } from '../models/movie';

fdescribe('MoviesService', () => {
  let injector: TestBed;
  let service: MoviesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });
    injector = getTestBed();
    service = injector.get(MoviesService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });  

  it('should be created', () => {
    const service: MoviesService = TestBed.get(MoviesService);
    expect(service).toBeTruthy();
  });
  it('should be able to retrive movies from the API using GET', () => {
    const dummyMovies : any = { Search :[{"Title":"Toy Soldiers","Year":"1991","imdbID":"tt0103112","Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BNTk0NGNiYTctYWE5NS00YzdkLWI1N2YtYWI5YTk2MmI5NzU4XkEyXkFqcGdeQXVyNzEyNjE5NzM@._V1_SX300.jpg"},
    {"Title":"The Toy Soldiers","Year":"2014","imdbID":"tt2219214","Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMjA0MTQ3MzczN15BMl5BanBnXkFtZTgwNjY1MzQxMTE@._V1_SX300.jpg"},
    {"Title":"Toy Soldiers","Year":"1984","imdbID":"tt0088292","Type":"movie",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTk4MzUxOTcwNV5BMl5BanBnXkFtZTcwNTU0MDcyMQ@@._V1_SX300.jpg"},
    {"Title":"Eminem: Like Toy Soldiers","Year":"2004","imdbID":"tt6793808","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjczYjA4MDEtOGMyZi00ZTAxLWFiMzgtMjQ1NjAzZDY0ZmIzXkEyXkFqcGdeQXVyNjM1MzczNjg@._V1_SX300.jpg"},{"Title":"Toy Soldiers","Year":"1999","imdbID":"tt0253831","Type":"movie","Poster":"N/A"},{"Title":"Martika: Toy Soldiers","Year":"1989","imdbID":"tt6860606","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYjUyNmY3MjUtNzkxZS00NzU1LThmYTMtZmJiMzdmOWM5MTQwXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_SX300.jpg"},{"Title":"Toy Soldiers","Year":"2012","imdbID":"tt2284576","Type":"movie","Poster":"N/A"},{"Title":"Toy Soldiers","Year":"2010","imdbID":"tt1683015","Type":"movie","Poster":"N/A"},{"Title":"Toy Soldiers","Year":"2010","imdbID":"tt1742684","Type":"movie",
    "Poster":"N/A"},{"Title":"Toy Soldiers","Year":"2012","imdbID":"tt2402221","Type":"movie","Poster":"N/A"}]
    }; 
    service.search("toy").subscribe((movies) => {
      expect(movies.length).toBe(10);
      expect(movies).toEqual(dummyMovies);
    })
    const request = httpMock.expectOne('http://www.omdbapi.com/?s=toy&apikey=157f34ed&type=movie');
    expect(request.request.method).toBe('GET');
    request.flush(dummyMovies);
  });
});
