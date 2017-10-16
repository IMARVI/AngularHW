import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderTablePipe } from '../order-table.pipe';

import { DetalleService } from '../../providers/detalle-service/detalle-service';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DetalleService]
})

export class HomeComponent {

  isDesc = false;
  column = 'Nombre';
  direction: number;
  alumnoSelecionado: number;

  constructor(private router: Router, public detalleService: DetalleService) {}

  sort(param) {
    this.isDesc = !this.isDesc;
    this.column = param;
    this.direction = this.isDesc ? 1 : -1;
  }

  irDetalle(alumno: number): void {
    this.alumnoSelecionado = alumno;
    console.log('irdetalle');
    this.router.navigate(['/detalle', this.alumnoSelecionado]);
  }
}
