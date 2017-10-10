import { Component } from '@angular/core';
import { OrderTablePipe } from './order-table.pipe';
import { DetalleService } from '../providers/detalle-service/detalle-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DetalleService]
})

export class AppComponent {

  isDesc = false;
  column = 'Nombre';
  direction: number;
  constructor(
    public detalleService: DetalleService
  ) {}
  sort(param) {
    this.isDesc = !this.isDesc;
    this.column = param;
    this.direction = this.isDesc ? 1 : -1;
  }
}
