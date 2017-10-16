import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetalleService } from '../../providers/detalle-service/detalle-service';
import { Alumno } from '../models/alumno';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [DetalleService]
})

export class DetalleComponent implements OnInit {
  alumno: Alumno;
  id: number;

  constructor(
    private detalleService: DetalleService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.alumno);
    console.log(this.id);
    this.alumno = this.detalleService.getAlumno(this.id);
    console.log(this.alumno);
  }

  save() {
    this.detalleService.saveAlumno(this.alumno);
    console.log('Nuevos datos');
    console.log(this.alumno);
  }

}
