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
        this.movies = data.search; // Armazena os filmes retornados pela API
      },
      error: (err) => {
        console.error('Erro ao buscar filmes:', err); // Mostra erros no console
      },
    });
  }
}