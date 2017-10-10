import { Injectable } from '@angular/core';
import { Materia } from '../../app/models/materia';
import { Alumno } from '../../app/models/alumno';

@Injectable()
export class DetalleService {
  public infoAlumnos: Alumno[];

  constructor() {
    this.getInfo();
  }

  getInfo() {
     this.infoAlumnos = [
      new Alumno(
        'Isaias',
        'foto1',
        'ITC',
        'A00988525',
        '5',
        '22',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
      new Alumno(
        'Martin',
        'foto1',
        'ITC',
        'A00988526',
        '5',
        '22',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
      new Alumno(
        'Luis',
        'foto1',
        'ITC',
        'A00988527',
        '5',
        '22',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
    ];
  }

}
