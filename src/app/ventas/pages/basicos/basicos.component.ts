import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower = 'gabriel';
  nombreUpper = 'GABRIEL';
  nombreCompleto = 'gAbriel moNtoYa';


  fecha: Date = new Date();



}
