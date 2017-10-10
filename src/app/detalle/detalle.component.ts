import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {
  public alumno: Alumno;

  constructor() {
   }

  ngOnInit() {
  }

}
