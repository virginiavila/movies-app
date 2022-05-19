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
  movieNotFound: boolean = false;
  movieTittle: string = '';
  apiError: boolean = false;
  errorApiMessage: string = '';
  page: number = 1;
  pagination: MovieList;
  totalPages: number;
  totalResults: number;

  constructor(private api: MoviesService) { }

  ngOnInit() {

  }

  getMovieByTitle($event: any) {
    this.title = $event.target.value;
    this.totalPages = 0; 
    this.page = 1;
    if( this.title == '') {this.movies = []; this.movieNotFound == false;}
    else this.searchMovie(this.title, 1);
  }



  searchMovie(title: string, page: number){
    this.api.getMovies(title,page).subscribe(
      (response: MovieList) => {
       [this.movies, this.page, this.totalPages] = [response.results, response.page, response.total_pages];
       this.movieNotFound = false;
       if (response.results.length == 0 ) this.movieNotFound = true; },       
      (err: HttpErrorResponse) => {
       this.apiError = true;
       this.errorApiMessage = err.error.status_message
      }
    );
  }

  




}
