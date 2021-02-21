import { Component } from '@angular/core';
import {interval} from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre = 'Susana';
  genero = 'femenino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  // i18nPlural
  clientes = ['Maria', 'Sandra', 'Santiago', 'Fernando', 'Gabriel', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando'

  };

  // KeyValuePipe

  persona = {
    nombre: 'Gabriel',
    edad: 46,
    direccion: 'Buenos Aires'
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Thor',
      vuela: true
    }
  ];

  // Async Pipe

  miObserbable = interval(5000); // 0, 1, 2, 3, 4, 5, 6.....

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 4000);
  });

  cambiarPersona(): void{
    if (this.nombre === 'Susana'){
      this.nombre = 'Fernando';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }
  }

  borrarCliente(): void{
    this.clientes.pop();
  }


}
