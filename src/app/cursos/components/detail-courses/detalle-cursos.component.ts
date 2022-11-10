import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-detail-courses',
  templateUrl: './detail-courses.component.html',
  styleUrls: ['./detail-courses.component.scss']
})
export class DetailCoursesComponent implements OnInit {

  curso$! : Observable<Curso>;

  constructor(
    private activaRoute: ActivatedRoute,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.activaRoute.paramMap.subscribe((parametros) => {
      console.log(parametros.get('id'));
      let id = parseInt(parametros.get('id') || '0')

      this.curso$ = this.cursoService.obtenerCurso(id)
    })

  }

}
