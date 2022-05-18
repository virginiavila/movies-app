import { MovieDetail } from "./MovieDetail";

export interface MovieList {
    page: number,
    results: MovieDetail[],
    total_pages: number,
    total_results: number,
}