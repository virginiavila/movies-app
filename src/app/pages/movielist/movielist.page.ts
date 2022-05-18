import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/interfaces/MovieDetail';
import { MovieList } from 'src/app/interfaces/MovieList';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.page.html',
  styleUrls: ['./movielist.page.scss'],
})
export class MovielistPage implements OnInit {

  title: string = ''
  movies: MovieDetail[] = [];

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
