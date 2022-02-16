import { environment } from './../../environments/environment';
import { Curso } from './curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // Maneira básica para chamar API
  // private readonly API = 'http://localhost:3000/cursos'

  private readonly API = `${environment.API}cursos`;

constructor(
  private http: HttpClient,
) { }

list() {
  return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    )
}

}
