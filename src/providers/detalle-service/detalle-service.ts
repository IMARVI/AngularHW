import { Injectable } from '@angular/core';
import { Materia } from '../../app/models/materia';
import { Alumno } from '../../app/models/alumno';

import { Headers, Http } from '@angular/http';

@Injectable()
export class DetalleService {
  public infoAlumnos: Alumno[];

  constructor() {
    this.getInfo();
  }

  getAlumno(id: number): Alumno {
    const alumno = this.infoAlumnos[id - 1];
    return alumno;
  }

  saveAlumno(alumno: Alumno): void {
    this.infoAlumnos[alumno.id - 1 ] = alumno;
  }

  update(): Alumno[] {
    return this.infoAlumnos;
  }

  getInfo() {
     this.infoAlumnos = [
      new Alumno(
        1,
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
        2,
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
        3,
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
