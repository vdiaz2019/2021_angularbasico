import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Dr. Strange'];
  heroeBorrado: string = '';

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarElemento(): void {
    const heroeBorradoAux = this.heroes.shift();
    this.heroeBorrado = heroeBorradoAux ? heroeBorradoAux : '';
  }
}
