import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaceDatos';
import { PersonajeService } from '../personaje.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';

@Component({
  selector: 'app-catalogo-carousel',
  templateUrl: './catalogo-carousel.component.html',
  styleUrls: ['./catalogo-carousel.component.css'],
  providers: [NgbCarouselConfig]  
})
export class CatalogoCarouselComponent implements OnInit {

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
