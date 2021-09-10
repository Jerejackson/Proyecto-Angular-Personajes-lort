import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  bandera = false;

  cambiarBandera(){
    this.bandera = !this.bandera;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
