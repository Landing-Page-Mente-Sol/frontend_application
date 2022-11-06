import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../shared/services/questions.service';
import { Question } from "../models/question";
import { Course} from "../models/course";
import { CoursesService } from '../shared/services/courses.service';
import { Answer } from '../models/answer';
import { AnswersService } from '../shared/services/answers.service';
@Component({
  selector: 'app-agregar-respuesta',
  templateUrl: './agregar-respuesta.component.html',
  styleUrls: ['./agregar-respuesta.component.css']
})
export class AgregarRespuestaComponent implements OnInit {
  pregunta: Question;
  asignaturas: Course[];
  recurso: any=-1;
  answers: Answer[];
  constructor(private questionService: QuestionsService,
    private courseService: CoursesService,
    private answerService:AnswersService
    )
  {
    this.answers=[]as Answer[];
    this.pregunta = {} as Question;
    this.asignaturas=[] as Course[];

    // this.questionService.getAll().subscribe((response: any)=>{
    //   this.preguntas = response;
    // });
    this.courseService.getAll().subscribe((respone:any)=>{this.asignaturas=respone});




    this.answerService.getAll().subscribe((response:any)=>{
      this.answers=response;
    })
    // this.indice=this.recursos[this.recursos.length-1].numero;
    // this.recursosService.delete(1).subscribe();
    ;
    this.id_question=localStorage.getItem("id_question");
    this.id_question=parseInt(this.id_question);
    this.questionService.getById(this.id_question).subscribe(response=>this.pregunta=response);
  }

  contenido:string='';
  aa: Date=new Date();
  agregar_respuesta(contenido: string){

      this.answerService.createAnswer(localStorage.getItem("id_question")!,
      localStorage.getItem("user")!,{
        "description":contenido,"madeAt":new Date()}).subscribe();
  }
  ngOnInit(): void {
  }

  id_question:any=-1;


}

