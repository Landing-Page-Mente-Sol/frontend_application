import { Component, OnInit } from '@angular/core';

import { QuestionsService } from "../services/questions.service";
import { Question } from "../models/question";
import { Course} from "../models/course";
import { CoursesService } from "../services/courses.service";
import { Recursos } from '../models/recursos';
import { RecursosService } from '../services/recursos.service';
import { Answer } from '../models/answer';
@Component({
  selector: 'app-agregar-respuesta',
  templateUrl: './agregar-respuesta.component.html',
  styleUrls: ['./agregar-respuesta.component.css']
})
export class AgregarRespuestaComponent implements OnInit {
  preguntas: Question[];
  asignaturas: Course[];
  recursos: Recursos[];
  variable_pregunta:Question;
  constructor(private questionService: QuestionsService,
    private recursosService: RecursosService,
    private courseService: CoursesService)
  {
    this.preguntas = [] as Question[];
    this.asignaturas=[] as Course[];
    this.recursos=[] as Recursos[];
    this.variable_pregunta = {}  as Question;

    this.questionService.getAll().subscribe((response: any)=>{
      this.preguntas = response;
    });
    this.courseService.getAll().subscribe((respone:any)=>{this.asignaturas=respone});

    this.recursosService.getAll().subscribe((response:any)=>{
      this.recursos=response;
      this.questionService.getById((this.recursos[this.recursos.length-1].numero)).
      subscribe((response) => this.variable_pregunta = response)
    });

    // this.indice=this.recursos[this.recursos.length-1].numero;
    // this.recursosService.delete(1).subscribe();
    ;
  }

  contenido:string='';
  aa: Date=new Date();
  agregar_respuesta(contenido: string){
    this.aa=new Date();
    this.variable_pregunta.respuestas.push(
      { id: this.variable_pregunta.respuestas.length,
        descripcion:contenido,
        fecha: this.aa,
        autor:"juan",
        index_pregunta:1000
      });

      this.questionService.update(
        this.recursos[this.recursos.length-1].numero,this.variable_pregunta).subscribe();
  }
  ngOnInit(): void {
  }

  // "id": 0,
  // "descripcion": "Antes de crear la clase, se antepone template<Name_object> y luego se crea una clase de la forma habitual",
  // "fecha": "7/12/2022",
  // "autor": "Pejewino",
  // "index_pregunta": 0

}

