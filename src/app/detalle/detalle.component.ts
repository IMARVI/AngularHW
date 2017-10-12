import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {
  public alumno: Object;
  private observerRef: any;

  constructor( private route: ActivatedRoute) {
    this.observerRef = route.params.subscribe(
      params => {
        this.alumno = params;
      });
    console.log(this.alumno);
   }

  ngOnInit() {
  }

}
