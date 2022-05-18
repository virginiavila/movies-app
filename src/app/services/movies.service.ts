import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetail } from '../interfaces/MovieDetail';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieList } from '../interfaces/MovieList';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseurl: string = 'https://api.themoviedb.org/3/'
  API_KEY: string = environment.API_KEY;

  constructor(private http: HttpClient) {}


  getMovies(title: string): Observable<MovieList> {
    return this.http.get<MovieList>(this.baseurl + `search/movie?api_key=${this.API_KEY}&query=` + title);
  }

  getMovie(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(this.baseurl + `movie/${id}?api_key=` + this.API_KEY);
  }


}
