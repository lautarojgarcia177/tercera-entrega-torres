import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import {DetailCoursesComponent} from './components/detail-courses/detalle-cursos.component';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import {SharedModule} from "../shared/shared.module";
import {PipesModule} from "../pipes/pipes.module";
import {CardsCursosComponent} from "./components/card-cursos/card-cursos.component";

@NgModule({
  declarations: [
    AddCourseComponent,
    CardsCursosComponent,
    DetailCoursesComponent,
    EditarCursosComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    PipesModule
  ]
})
export class CursosModule { }
