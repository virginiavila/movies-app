import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/Movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

  constructor(private api: MoviesService) { }

  movie: Movie;

  ngOnInit() {
    this.getMovieDetails(2);
  }


  getMovieDetails(id: number) {
    this.api.getMovie(id).subscribe(
      (response) => {
        this.movie = response;
        console.log(this.movie);   

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
