import { Usuario } from "src/app/login/models/usuario";

export interface Alumno{
  id: number;
  dni: number;
  nombre: string;
  fechaNacimiento: Date;
  apellido: string;
  nameUsuario?: string;
}

