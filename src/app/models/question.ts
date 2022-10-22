import {Answer} from "./answer";
export interface Question {
  etiqueta: number,
  mostrar: boolean,
  descripcion: string,
  titulo: string,
  fecha: string,
  autor: string,
  respuestas: Answer[];
}
