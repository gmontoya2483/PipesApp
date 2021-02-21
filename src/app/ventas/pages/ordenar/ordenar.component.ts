import {Component} from '@angular/core';
import {Color, Heroe} from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {
  enMayusculas = false;
  ordenarPor = 'sin valor';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  products = [];


  cambiarMayuscula(): void {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(ordenarPor: string): void{
    this.ordenarPor = ordenarPor;
  }


}
