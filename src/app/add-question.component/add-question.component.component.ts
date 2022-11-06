import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course} from "../models/course";
import { Question } from "../models/question";
import { QuestionsService } from "../services/questions.service";
import { Answer } from '../models/answer';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.component.html',
  styleUrls: ['./add-question.component.component.css']
})
export class AddQuestionComponentComponent implements OnInit {
  preguntas: Question[];
  asignaturas: Course[];
  constructor(private questionService: QuestionsService,
    private courseService: CoursesService)
  {
    this.preguntas = [] as Question[];
    this.asignaturas=[] as Course[]
    this.questionService.getAll().subscribe((response: any)=>{
      this.preguntas = response;
    })
    this.courseService.getAll().subscribe((respone:any)=>{this.asignaturas=respone})
  }
  titulo="";
  descripcion="";
  etiqueta:any=null;
  fecha="";
  autor="Jerry Quispe Gavilan";
  respuestas=[];
  set_id(i:number){
    this.etiqueta=i;
    console.log(this.etiqueta);
  }


  publicar_pregunta(descripcion:string,titulo:string){
this.questionService.create(
  {
      "id":0,
      "mostrar":false,
      "etiqueta":this.etiqueta,
      "descripcion": descripcion,
      "titulo":titulo,
      "fecha": new Date(),
      "autor":this.autor,
      "respuestas":[] as Answer[]
  }
  ).subscribe((aux)=>console.log(aux));
}

  // "id": 0, auto
  // "etiqueta": 3,
  // "descripcion": "una como realizar o crear clases abstractas en c++, java y c#",
  // "titulo": "¿como crear arreglos?",
  // "fecha": "13/06/2022",
  // "autor": "Gavilan",
  // "respuestas": [

  ngOnInit(): void {
  }


// agregar_asignatura(nuevo:string){
  //   console.log(nuevo);
  //   this.couseService.create({"id":0,"curso":nuevo, "imagen":"./assets/images/new.png"}).subscribe((aux)=>console.log(aux));
  // }
}