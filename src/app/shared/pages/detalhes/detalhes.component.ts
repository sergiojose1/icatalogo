import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent {
  movie: any;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private MovieService: MovieService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');

    if(movieId) {
      this.MovieService.getMovieDetails(movieId).subscribe(
        (data) => {
          console.log("dados retornados pela api:", data);
          this.movie = data;
          this.isLoading = false;
        },
        (error) => {
          console.error('erro ao carregar os detalhes do filme', error);
          this.isLoading = false;
        }
      );
    }
  }

}
