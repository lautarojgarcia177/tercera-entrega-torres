import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import { Usuario } from 'src/app/login/models/usuario';
import {Sesion} from "../../../login/models/sesion";
import {SesionService} from "../../services/sesion.service";
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  usuario$!: Observable<Usuario>
  usuarioSubscription!: Subscription
  usuario!: Usuario
  
  sesion$!: Observable<Sesion>
  subscription!: Subscription
  sesion!: Sesion


  constructor(
    private usuarioService: UsuarioService,
    private sesionService : SesionService
  ) { }

  ngOnInit(): void {
    /* this.usuario$ = this.usuarioService.obtenerUsuario(this.usuario.id);
    this.usuarioSubscription = this.usuario$.subscribe((usuario: Usuario)=> this.usuario = usuario)
    console.log(this.usuario); */
    
    this.sesion$ = this.sesionService.obtenerDatosSesion();
    this.subscription = this.sesion$.subscribe((sesion: Sesion)=> this.sesion = sesion)
    console.log(this.sesion);
    
  }
}

