import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alumno } from '../../models/alumnos';
import { AlumnosService } from '../../service/alumnos.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})
export class EditarAlumnoComponent implements OnInit {
  alumno!: Alumno;
  alumnoSubscription!: Subscription;
  formularioAlumno!: FormGroup;
  id!: number

  constructor(
    private alumnoService: AlumnosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  
  ) {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      console.log(parametros);
      this.id = parseInt(parametros.get('id') || '')
      this.formularioAlumno = new FormGroup({
      dni: new FormControl(parametros.get('dni')),
      nombre: new FormControl(parametros.get('nombre')),
      apellido: new FormControl(parametros.get('apellido')),
      fechaNacimiento: new FormControl(parametros.get('fechaNacimiento'))
      })
    })
  }

  ngOnInit(): void {
    
  }
  
  editarAlumno(){
    let c: Alumno = {
      id: this.id,
      dni: this.formularioAlumno.value.dni,
      nombre: this.formularioAlumno.value.nombre,
      apellido: this.formularioAlumno.value.apellido,
      fechaNacimiento: this.formularioAlumno.value.fechaNacimiento
    }
    this.alumnoService.editarAlumno(c);
    this.router.navigate(['/students'])
  }

}
