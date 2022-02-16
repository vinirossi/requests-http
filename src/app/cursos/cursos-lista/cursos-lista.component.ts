import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-listas',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[] | undefined;

  constructor(
    private service: CursosService
  ) { }

  ngOnInit(): void {
    this.service.list()
    .subscribe(dados => this.cursos = dados);
  }

}
