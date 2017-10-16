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
        'Isaías Martínez',
        'foto1',
        'ITC',
        'A00988525',
        '5',
        '26',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
      new Alumno(
        2,
        'Martín Fernández Lorenzo',
        'foto1',
        'ITC',
        'A01270963',
        '5',
        '21',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
      new Alumno(
        3,
        'Luis Alberto Torres Romero',
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
      new Alumno(
        4,
        'Freddie Mercury',
        'foto1',
        'IMA',
        'A00988527',
        '5',
        '22',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
      new Alumno(
        5,
        'Paul McCartney',
        'foto1',
        'IMI',
        'A01234567',
        '5',
        '22',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
      new Alumno(
        6,
        'John Lennon',
        'foto1',
        'IIS',
        'A00988527',
        '5',
        '22',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
      new Alumno(
        7,
        'George Harrison',
        'foto1',
        'ITC',
        'A01234578',
        '5',
        '22',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
      new Alumno(
        8,
        'Ringo Starr',
        'foto1',
        'IME',
        'A01334578',
        '5',
        '22',
        [
          new Materia('Español', '100'),
          new Materia('Ingles', '90')
        ]
      ),
      new Alumno(
        9,
        'Bob Dylan',
        'foto1',
        'LIN',
        'A09881234',
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
