import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../interfaceDatos';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PersonajeService } from '../personaje.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {

  @Input() personaje?: Personaje;

  constructor(
    private route: ActivatedRoute,
    private personajeService: PersonajeService,
    private location: Location
  ) { }

ngOnInit(): void {
    this.getPersonaje();
  }

  getPersonaje(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personajeService.getPersonaje(id)
      .subscribe(personaje => this.personaje = personaje);
  }

  goBack(): void {
    this.location.back();
  }
}
