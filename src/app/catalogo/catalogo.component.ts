import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaceDatos';
import { PersonajeService } from '../personaje.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  titulo = 'Lista de Personajes';

  //este elemento llamado heroes de heroservice
  personajes: Personaje[] = [];


  constructor(private personajeService: PersonajeService) {}

  ngOnInit() {
    this.getPersonajes();
  }

  getPersonajes(): void {
    this.personajeService.getPersonajes()
        .subscribe(personajes => this.personajes = personajes);
  }
}
