import { Component, DestroyRef, inject, signal} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PelículaService } from '../../services/pelicula.service';
import { Película } from '../../domain/pelicula.domain';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-pelicula-search.component',
  imports: [ReactiveFormsModule],
  templateUrl: './pelicula-search.component.html',
  styleUrl: './pelicula-search.component.css',
})
export class PeliculaSearchComponent {
  private readonly fb = inject(FormBuilder);
  private readonly peliculaService = inject(PelículaService);
  private readonly destroyRef = inject(DestroyRef);

   readonly searchForm = this.fb.nonNullable.group({
    titulo: '',
    genero: '',
  });  

  readonly resultados = signal<Película[]>([]);
  readonly loading = signal(false);
  readonly searched = signal(false);
  readonly error = signal<string | null>(null);

  buscar():void{
    //console.log("Buscar películas con titulo")
    const { titulo, genero } = this.searchForm.getRawValue();
    console.log(titulo, genero)

    this.loading.set(true);
    this.searched.set(true);
    this.error.set(null);

    this.peliculaService
    .findMovies(titulo.trim(), genero.trim())
    .pipe(
      takeUntilDestroyed(this.destroyRef),
      catchError((err) => {
      console.error("Detalles del error HTTP:", err); 
      
      this.error.set("No se pudieron cargar las películas.");
      return of([] as Película[]);
    }),
          finalize(() => this.loading.set(false))
    )
     .subscribe(peliculas => {
      this.resultados.set(peliculas);
      
      console.log('Resultados reales del servidor:', peliculas);
      console.log('Valor de la señal resultados:', this.resultados());
      console.log('Valor de la señal error:', this.error());
    });
  }


  limpiar(): void {
    this.searchForm.reset({ titulo: '', genero: '' });
    this.resultados.set([]);
    this.loading.set(false);
    this.searched.set(false);
    this.error.set(null);
  }

  trackByPeliculaId(_: number, pelicula: Película): number {
    return pelicula.peliculaId;
  }


}


