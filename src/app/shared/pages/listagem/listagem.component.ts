import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  movies: any[] = []; // Armazena a lista de filmes
  errorMessage: string= '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        console.log('Dados recebidos no componente:', data); // Log dos dados recebidos
        if (data && data.results) {
          this.movies = data.results; // Certifique-se de que "results" é o nome correto
        } else {
          this.movies = data.movies;
        }
      },
      error: (err) => {
        console.error('Erro ao buscar filmes:', err); // Log de erro
        this.errorMessage = 'Erro ao carregar filmes. Tente novamente mais tarde.';
      },
    });
  }
}