import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/interfaces/MovieDetail';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie',
  templateUrl: './moviedetail.page.html',
  styleUrls: ['./moviedetail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movie: MovieDetail;
  movieid: number;
  imgurl: string = environment.IMG_URL;
  value: number = 180;

  constructor(private api: MoviesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.movieid = params['movieid'];
     })
   }


  ngOnInit() {
    this.getMovieDetails(this.movieid);
  }


  getMovieDetails(id: number) {
    this.api.getMovie(id).subscribe(
      (response) => {
        this.movie = response;
        console.log(this.movie);   
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


}
