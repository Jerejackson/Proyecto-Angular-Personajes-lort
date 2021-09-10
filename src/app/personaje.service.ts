import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Personaje } from './interfaceDatos';
import { PERSONAJES } from './datos';

@Injectable({ providedIn: 'root'})
export class PersonajeService {

  constructor() { }

  getPersonajes(): Observable<Personaje[]> {
    const personajes = of(PERSONAJES);
    return personajes;
  }

  getPersonaje(id: number): Observable<Personaje> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const personaje = PERSONAJES.find(p => p.id === id)!;
    return of(personaje);
  }
}
