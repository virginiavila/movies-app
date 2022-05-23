export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  genres: GenreDetails[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface GenreDetails {
  id: number;
  name: string;
}
