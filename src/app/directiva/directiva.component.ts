import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  lista: string[] = ['elemento1', 'elemento2', 'elemento3', 'elemento4'];

  habilitar: boolean = true;

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true
  }

  constructor() { }



}
