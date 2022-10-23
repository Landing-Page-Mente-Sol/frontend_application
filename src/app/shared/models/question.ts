import {Answer} from "./answer";
export interface Question {
  etiqueta: number,
  descripcion: string,
  titulo: string,
  fecha: string,
  autor: string,
  respuestas: Answer[];
}
