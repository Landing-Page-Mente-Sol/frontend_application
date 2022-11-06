import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';
import { Course} from "../models/course";
import { Question } from "../models/question";
import { QuestionsService } from '../shared/services/questions.service';
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
  // autor="Jerry Quispe Gavilan";
  respuestas=[];
  course:Course= {id: -1,
  name: "",
  image: ""}
  set_id(i:number){
    this.etiqueta=i;
    console.log(this.etiqueta);
    this.course.id=i;
  }

buscar_autor()
{

}

  publicar_pregunta(descripcion:string,titulo:string){
    this.questionService.createQuestion(
      this.course.id,
      localStorage.getItem("user")!,
      {"description": descripcion,
    "title":titulo,
    "madeAt": new Date()}
    ).subscribe();
// this.questionService.create(
//   {
//     "description": descripcion,
//     "title":titulo,
//     "madeAt": new Date(),
//     "user":localStorage.getItem("user"),
//     "course":this.course,
//     "id":0
//   }
//   ).subscribe((aux)=>console.log(aux));
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
