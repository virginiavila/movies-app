import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/Movie';
import { MovieList } from 'src/app/interfaces/MovieList';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title: string = ''
  movies: Movie[] = [];

  constructor(private api: MoviesService) { }

  ngOnInit() {

  }

  getMovieByTitle($event: any) {
    this.title = $event.target.value
    this.searchMovie(this.title);
  }

  searchMovie(title: string){
    this.api.getMovies(title).subscribe(
      (response: MovieList) => {
       this.movies = response.results;
       console.log(this.movies)},
      (error: HttpErrorResponse) => {console.log(error.status)}
    );
  }





}
