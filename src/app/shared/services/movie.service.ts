import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=586d0ba2aee5be1fa10f872b649701e2&language=pt-BR'
  private apiKey = '586d0ba2aee5be1fa10f872b649701e2';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(
    `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR`
    );
  }
  
  getMovieDetails(movieId: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=pt-BR`
    );
  }
}
