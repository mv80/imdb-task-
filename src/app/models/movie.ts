export class Movie {
    title: string;
    year: string;
    id: string;
    type: string;
    image: string;
    constructor(movie) {
        this.id = movie.imdbID;
        this.title = movie.Title;
        this.type = movie.type;
        this.image = movie.Poster;
        this.year = movie.Year;

    }
}