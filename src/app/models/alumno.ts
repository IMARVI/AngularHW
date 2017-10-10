import {Materia} from './materia';
export class Alumno {
  constructor(
    public nombre: string,
    public foto: string,
    public carrera: string,
    public matricula: string,
    public semestre: string,
    public edad: string,
    public materias: Array<Materia>
  ) {}
}
