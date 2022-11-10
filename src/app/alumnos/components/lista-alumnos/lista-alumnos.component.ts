import {Component, OnInit} from '@angular/core';
import {Alumno} from "../../models/alumnos";
import {Observable, Subscription} from "rxjs";
import {AlumnosService} from "../../service/alumnos.service";
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/login/models/sesion';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Usuario } from 'src/app/login/models/usuario';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {
  alumno!: Alumno;
  alumnos!: Alumno[];
  alumnosSubcription!: Subscription
  alumnos$!: Observable<Alumno[]>
  
  columnasAlumnos: string[] = ['id','dni','nombre/apellido','fecha-nacimiento','editar/borrar'];

  dataSource: MatTableDataSource<Alumno>



  sesion!: Sesion[];
  sesion$!: any;
  sesionSubcription!: Subscription
  
  usuario$!: Observable<Usuario[]>

  constructor(
    private alumnoService: AlumnosService,
    private router: Router,
    private sesionService :SesionService,
    
  ) {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
    this.alumnosSubcription = this.alumnos$.subscribe((alumnos : Alumno[])=> this.alumnos = alumnos)
    
    
    this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
    
    this.sesion$= this.sesionService.obtenerDatosSesion();
    this.sesionSubcription = this.sesion$.subscribe((sesion: Sesion[]) => this.sesion = sesion)
    
    
   
  };
  
  ngOnInit(): void {
   
}

eliminarAlumno(id: number){
  this.alumnoService.eliminarAlumno(id);
  this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
}
 editarAlumno(alumno: Alumno){
  this.router.navigate(['students/edit-student', alumno])
 }
 
 

}
