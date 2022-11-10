import {Component, OnDestroy, OnInit} from '@angular/core';
import {Curso} from "../../models/curso";
import {map, Observable, Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {Sesion} from "../../../login/models/sesion";
import {CursoService} from "../../services/curso.service";
import {SesionService} from "../../../core/services/sesion.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-cursos',
  templateUrl: './card-cursos.component.html',
  styleUrls: ['./card-cursos.component.scss']
})
export class CardsCursosComponent implements OnInit , OnDestroy{
  filtro: string = '';
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>
  cursosSubscription!: Subscription;
  
  sesion!: Sesion;
  sesionSubcription!: Subscription;
  sesion$!: Observable<Sesion>

  dataSource!: MatTableDataSource<Curso>
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta',];

  constructor(
    private cursosService: CursoService,
    private sesionService: SesionService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.obtenerCursos();
    this.cursosSubscription = this.cursos$.subscribe(cursos => this.cursos = cursos)

    this.sesion$ = this.sesionService.obtenerDatosSesion();
    this.sesionSubcription = this.sesion$.subscribe(sesion => this.sesion = sesion)
  }

  ngOnDestroy(): void {
    this.cursosSubscription.unsubscribe();
  }

  editarCurso(curso: Curso) {
    this.router.navigate(['/courses/edit-course', curso])
  }
  eliminarCurso(id: number) {
    console.log(id);
    this.cursosService.eliminarCurso(id);
    this.cursos$ = this.cursosService.obtenerCursos();
  }

  /* metodos filtrado tablas */
  filtrarCurso(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value;

  /* columna en especifico , filterPredicate lleva dos parametros*/
   this.cursos$ = this.cursosService.obtenerCursos().pipe(
    map(c => c.filter(
      curso => curso.nombre.toLocaleLowerCase().includes(valorObtenido.toLocaleLowerCase()) 
    ))
   );
  }
}

