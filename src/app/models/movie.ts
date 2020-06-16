export class Movie {
    title: string;
    year: string;
    id: string;
    type: string;
    image: string;
    constructor(src: any) {
        this.id = src.imdbID;
        this.title = src.Title;
        this.type = src.type;
        this.image = src.Poster;
        this.year = src.Year;

    }
}