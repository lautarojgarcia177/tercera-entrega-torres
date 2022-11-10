import {Component, OnInit} from '@angular/core';
import {Alumno} from "../../models/alumnos";
import {Subscription} from "rxjs";
import { FormControl, FormGroup} from "@angular/forms";
import {AlumnosService} from "../../service/alumnos.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

alumnos!: Alumno[];
subscription!: Subscription;
formularioAlumno!: FormGroup;
id!: number


 constructor(
  private alumnoService: AlumnosService,
  private router: Router,
  private activatedroute: ActivatedRoute,

 ){
this.subscription = this.alumnoService.obtenerAlumnos().subscribe((a) => this.alumnos = a )

this.formularioAlumno = new FormGroup({
  
  dni: new FormControl,
  nombre: new FormControl,
  apellido: new FormControl,
  fechaNacimiento: new FormControl
 })
}

guardarAlumno(){
  let idAlumno:number = Math.max.apply(null, this.alumnos.map(o => o.id));

  let c : Alumno = {
    id: idAlumno+1,
    dni: this.formularioAlumno.value.dni,
    nombre: this.formularioAlumno.value.nombre,
    apellido: this.formularioAlumno.value.apellido,
    fechaNacimiento: this.formularioAlumno.value.fechaNacimiento
  }
  this.alumnoService.agregarAlumno(c);
  this.router.navigate(['students'])
}

 ngOnInit(): void {

}
  
}
