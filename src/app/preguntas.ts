export {Question} from '../app/models/question'
import { Component } from '@angular/core';
import { QuestionsService } from "../app/services/questions.service";
import { Question } from "../app/models/question";
import { Tuple } from "../app/models/tuple";
import { UsersService} from "../app/services/users.service";
import { Course} from "../app/models/course";
import { CoursesService } from "../app/services/courses.service";



export class pregunta{

  constructor(private questionService: QuestionsService,
    private userService: UsersService,
    private courseService: CoursesService){
    this.preguntas = [] as Question[];
    this.dates = [] as Tuple[];
    this.asignaturas = [] as Course[];
    this.questionService.getAll().subscribe((response: any)=>{
      this.preguntas = response;
    })

    this.userService.getById(1).subscribe((response)=>{
      this.dates = response.dates;
    })

    this.courseService.getAll().subscribe((response: any)=>{
      this.asignaturas = response;
    })


    }
    asignaturas: Course[];
    dates: Tuple[];
    preguntas: Question[];

    get_asignaturas(){
      return this.asignaturas;
    }
    get_dates(){
      return this.dates;
    }
    get_preguntas(){
      return this.preguntas;
    }
}
