import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/enviroment"; // Nota: si tu archivo físico se llama "enviroment.ts" sin la 'n', déjalo así.
import { Película } from "../domain/pelicula.domain";

@Injectable({
  providedIn: "root"
})
export class PelículaService {

  private apiUrl = `${environment.API_URL}peliculas`; 

  constructor(private http: HttpClient){}

  findMovies(titulo: string = "", genero: string = ""): Observable<Película[]>{
    const params = new HttpParams()
      .set("titulo", titulo ?? "")
      .set("genero", genero ?? "");
  
    // Petición http GET
    return this.http.get<Película[] | null>(this.apiUrl, { params }).pipe(
      map(response => response ?? [])
    );
  }

  guardarPelicula(pelicula: any): Observable<any> { // Usar 'any' o la interface Pelicula
    return this.http.post<any>(this.apiUrl, pelicula);
  }
  
}