import { Component } from '@angular/core';
import { OrderTablePipe } from './order-table.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Otra cosa';
  nombreProfesor = 'juan velez';
  alumnos = ALUMNOS;
  isDesc = false;
  column = 'Nombre';
  direction: number;
  constructor() {}

  OnInit() {
    this.alumnos = ALUMNOS;
  }

  sort(param) {
    this.isDesc = !this.isDesc;
    this.column = param;
    this.direction = this.isDesc ? 1 : -1;
  }
}

const ALUMNOS: Alumno[] = [
	{matricula: 9322, nombre:'isaias mtz', carrera:'ITC'},
	{matricula: 1111, nombre:'Martin Albert', carrera:'ITC	'},
	{matricula: 2222, nombre:'Juan Gabriel', carrera: 'IMI'}
]

export class Alumno {
  matricula: number;
  nombre: string;
  carrera: string;
}
